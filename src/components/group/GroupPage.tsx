import { validate } from "class-validator";
import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as toastr from "toastr";
import {
  addGroup as addGroupAction,
  updateGroup as updateGroupAction
} from "../../actions/group/groupActions";
import GroupViewModel from "../../models/GroupViewModel";
import IGroup from "../../models/IGroup";
import IValidationErrors from "../../models/IValidationErrors";
import { getGroupById } from "../../selectors";
import IStoreState from "../../store/IStoreState";
import strings from "../../strings";
import { mapToValidationErrors } from "../../utilities";
import GroupFrom from "./GroupForm";

interface IGroupPageProps extends RouteComponentProps<any> {
  readonly viewModel: GroupViewModel;
  readonly groups: ReadonlyArray<IGroup>;
  addGroup: (
    group: IGroup
  ) => (dispatch: Dispatch<IStoreState>) => Promise<void>;
  updateGroup: (
    group: IGroup
  ) => (dispatch: Dispatch<IStoreState>) => Promise<void>;
  // TODO Add deleteGroup
}

interface IGroupPageState {
  readonly actionInProgress: boolean;
  readonly validationErrors: IValidationErrors;
  readonly viewModel: GroupViewModel;
}

class GroupPage extends React.Component<IGroupPageProps, IGroupPageState> {
  constructor(props: IGroupPageProps) {
    super(props);

    this.state = {
      actionInProgress: false,
      validationErrors: {},
      viewModel: this.props.viewModel
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  public render() {
    const isNewGroup = this.state.viewModel.id === "";
    const title = isNewGroup
      ? strings.groupPage.addTitle
      : strings.groupPage.editTitle;

    return (
      <div className="row mt-3">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              {title}
              <h1 className="sr-only">
                {title}
              </h1>
            </div>
            <div className="card-body">
              <GroupFrom
                group={this.state.viewModel}
                isNewGroup={isNewGroup}
                validationErrors={this.state.validationErrors}
                actionInProgress={this.state.actionInProgress}
                handleCancelClick={this.handleCancelClick}
                handleSaveClick={this.handleSaveClick}
                handleValueChange={this.handleValueChange}
                handleDeleteClick={this.handleDeleteClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private handleValueChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const propertyName = e.target.id;
    const updatedValue = e.target.value;

    const updatedSite = {
      ...this.state.viewModel,
      [propertyName]: updatedValue
    };

    this.setState({
      viewModel: new GroupViewModel(updatedSite)
    });
  }

  private async handleSaveClick() {
    this.setState({
      actionInProgress: true
    });

    const viewModel = this.state.viewModel;

    const validationResult = await validate(viewModel);

    if (validationResult.length > 0) {
      this.setState({
        validationErrors: mapToValidationErrors(validationResult)
      });
    } else {
      if (viewModel.id !== "") {
        await this.updateGroup(viewModel);
      } else {
        await this.addGroup(viewModel);
      }

      this.props.history.goBack();
    }

    this.setState({
      actionInProgress: false
    });
  }

  private async handleDeleteClick() {
    // TODO Implement delete
  }

  private handleCancelClick() {
    this.props.history.goBack();
  }

  private async updateGroup(viewModel: GroupViewModel) {
    await this.props.updateGroup(viewModel);

    toastr.success(strings.groupPage.updateGroupSuccessMessage);
  }

  private async addGroup(viewModel: GroupViewModel) {
    await this.props.addGroup(viewModel);

    toastr.success(strings.groupPage.addGroupSuccessMessage);
  }
}

function mapStateToProps(
  state: IStoreState,
  ownProps: RouteComponentProps<any>
) {
  const groupId: string = ownProps.match.params.groupId;
  let groupViewModel = new GroupViewModel();

  if (groupId !== undefined) {
    const group = getGroupById(state.groups, groupId);

    if (group !== undefined) {
      // We may get undefined as a result of:
      //  - Performing a delete so group would return null.
      //  - The specified IDs are incorrect.
      // So use default as displaying error message may result in false positives.
      groupViewModel = new GroupViewModel({ ...group });
    }
  }

  return {
    viewModel: groupViewModel
  };
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
  return {
    addGroup: bindActionCreators(addGroupAction, dispatch),
    updateGroup: bindActionCreators(updateGroupAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupPage);
