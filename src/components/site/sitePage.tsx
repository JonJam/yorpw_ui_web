import { validate } from "class-validator";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import * as toastr from "toastr";
import {
  addSite as addSiteAction,
  deleteSite as deleteSiteAction,
  updateSite as updateSiteAction
} from "../../actions/site/siteActions";
import IGroup from "../../models/IGroup";
import ISite from "../../models/ISite";
import IValidationErrors from "../../models/IValidationErrors";
import SiteViewModel from "../../models/SiteViewModel";
import { getGroupForSite, getGroupOptions, getSiteById } from "../../selectors";
import IStoreState from "../../store/IStoreState";
import strings from "../../strings";
import { mapToValidationErrors } from "../../utilities";
import ISelectOption from "../common/select/ISelectOption";
import SiteFrom from "./SiteForm";

import "./SitePage.css";

interface ISitePageProps extends RouteComponentProps<any> {
  readonly viewModel: SiteViewModel;
  readonly groups: ReadonlyArray<IGroup>;
  readonly groupOptions: ReadonlyArray<ISelectOption<string>>;
  updateSite: (
    site: ISite,
    oldGroup?: IGroup,
    newGroup?: IGroup
  ) => (dispatch: Dispatch<IStoreState>) => Promise<void>;
  deleteSite: (
    siteId: string,
    group: IGroup
  ) => (dispatch: Dispatch<IStoreState>) => Promise<void>;
  addSite: (
    site: ISite,
    group: IGroup
  ) => (dispatch: Dispatch<IStoreState>) => Promise<void>;
}

interface ISitePageState {
  readonly actionInProgress: boolean;
  readonly showClearPassword: boolean;
  readonly validationErrors: IValidationErrors;
  readonly viewModel: SiteViewModel;
}

class SitePage extends React.Component<ISitePageProps, ISitePageState> {
  constructor(props: ISitePageProps) {
    super(props);

    this.state = {
      actionInProgress: false,
      showClearPassword: false,
      validationErrors: {},
      viewModel: this.props.viewModel
    };

    this.handleTogglePasswordClick = this.handleTogglePasswordClick.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  public render() {
    const isNewSite = this.state.viewModel.id === "";
    const title = isNewSite
      ? strings.sitePage.addTitle
      : strings.sitePage.editTitle;

    return (
      <div className="row mt-3 sitePage">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              {title}
              <h1 className="sr-only">{title}</h1>
            </div>
            <div className="card-body">
              <SiteFrom
                site={this.state.viewModel}
                groupOptions={this.props.groupOptions}
                isNewSite={isNewSite}
                validationErrors={this.state.validationErrors}
                showClearPassword={this.state.showClearPassword}
                actionInProgress={this.state.actionInProgress}
                handleCancelClick={this.handleCancelClick}
                handleSaveClick={this.handleSaveClick}
                handleValueChange={this.handleValueChange}
                handleTogglePasswordClick={this.handleTogglePasswordClick}
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
      viewModel: new SiteViewModel(updatedSite)
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
        await this.updateSite(viewModel);
      } else {
        await this.addSite(viewModel);
      }

      this.props.history.goBack();
    }

    this.setState({
      actionInProgress: false
    });
  }

  private async handleDeleteClick() {
    this.setState({
      actionInProgress: true
    });

    const viewModel = this.state.viewModel;

    const groupToUpdate = this.props.groups.find(
      g => g.id === viewModel.groupId
    ) as IGroup;

    await this.props.deleteSite(this.state.viewModel.id, groupToUpdate);

    toastr.success(strings.sitePage.deleteSiteSuccessMessage);

    this.props.history.goBack();

    this.setState({
      actionInProgress: false
    });
  }

  private handleCancelClick() {
    this.props.history.goBack();
  }

  private handleTogglePasswordClick() {
    this.setState((prevState: ISitePageState) => {
      return {
        showClearPassword: !prevState.showClearPassword
      };
    });
  }

  private async updateSite(viewModel: SiteViewModel) {
    let oldGroup: IGroup | undefined;
    let newGroup: IGroup | undefined;

    if (this.props.viewModel.groupId !== viewModel.groupId) {
      // Group changed.
      oldGroup = this.props.groups.find(
        g => g.id === this.props.viewModel.groupId
      ) as IGroup;
      newGroup = this.props.groups.find(
        g => g.id === viewModel.groupId
      ) as IGroup;
    }

    await this.props.updateSite(viewModel, oldGroup, newGroup);

    toastr.success(strings.sitePage.updateSiteSuccessMessage);
  }

  private async addSite(viewModel: SiteViewModel) {
    const groupToUpdate = this.props.groups.find(
      g => g.id === viewModel.groupId
    ) as IGroup;

    await this.props.addSite(viewModel, groupToUpdate);

    toastr.success(strings.sitePage.addSiteSuccessMessage);
  }
}

function mapStateToProps(
  state: IStoreState,
  ownProps: RouteComponentProps<any>
) {
  const siteId: string = ownProps.match.params.siteId;
  let siteViewModel = new SiteViewModel();

  if (siteId !== undefined) {
    const site = getSiteById(state.sites, siteId);
    const group = getGroupForSite(state.groups, siteId);

    if (site !== undefined && group !== undefined) {
      // We may get undefined as a result of:
      //  - Performing a delete so site would return null.
      //  - Perform an update to move between groups.
      //  - The specified IDs are incorrect.
      // So use default as displaying error message may result in false positives.
      siteViewModel = new SiteViewModel({ ...site, groupId: group.id });
    }
  }

  return {
    groupOptions: getGroupOptions(state.groups),
    groups: state.groups,
    viewModel: siteViewModel
  };
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
  return {
    addSite: bindActionCreators(addSiteAction, dispatch),
    deleteSite: bindActionCreators(deleteSiteAction, dispatch),
    updateSite: bindActionCreators(updateSiteAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SitePage);
