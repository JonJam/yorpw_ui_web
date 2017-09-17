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
import ISite from "../../models/ISite";
import IValidationErrors from "../../models/IValidationErrors";
import Site from "../../models/Site";
import getCourseById from "../../selectors/getCourseById";
import IStoreState from "../../store/IStoreState";
import strings from "../../strings";
import { mapToValidationErrors } from "../../utilities";
import SiteFrom from "./SiteForm";

import "./SitePage.css";

interface ISitePageProps extends RouteComponentProps<any> {
  readonly site: ISite;
  updateSite: (
    site: ISite
  ) => (dispatch: Dispatch<IStoreState>) => Promise<void>;
  deleteSite: (
    siteId: string
  ) => (dispatch: Dispatch<IStoreState>) => Promise<void>;
  addSite: (site: ISite) => (dispatch: Dispatch<IStoreState>) => Promise<void>;
}

interface ISitePageState {
  readonly actionInProgress: boolean;
  readonly formSite: ISite;
  readonly showClearPassword: boolean;
  readonly validationErrors: IValidationErrors;
}

class SitePage extends React.Component<ISitePageProps, ISitePageState> {
  constructor(props: ISitePageProps) {
    super(props);

    this.state = {
      actionInProgress: false,
      formSite: { ...this.props.site },
      showClearPassword: false,
      validationErrors: {}
    };

    this.handleTogglePasswordClick = this.handleTogglePasswordClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  public render() {
    const isNewSite = this.state.formSite.id === "";
    const title = isNewSite
      ? strings.sitePage.addTitle
      : strings.sitePage.editTitle;

    return (
      <div className="row mt-3 sitePage">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              {title}
              <h1 className="sr-only">
                {title}
              </h1>
            </div>
            <div className="card-body">
              <SiteFrom
                site={this.state.formSite}
                isNewSite={isNewSite}
                validationErrors={this.state.validationErrors}
                showClearPassword={this.state.showClearPassword}
                actionInProgress={this.state.actionInProgress}
                handleCancelClick={this.handleCancelClick}
                handleSaveClick={this.handleSaveClick}
                handleInputChange={this.handleInputChange}
                handleTogglePasswordClick={this.handleTogglePasswordClick}
                handleDeleteClick={this.handleDeleteClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const propertyName = e.target.id;
    const updatedValue = e.target.value;

    const updatedSite = {
      ...this.state.formSite,
      [propertyName]: updatedValue
    };

    this.setState({
      formSite: updatedSite
    });
  }

  private async handleSaveClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    this.setState({
      actionInProgress: true
    });

    const site = new Site(this.state.formSite);

    const validationResult = await validate(site);

    if (validationResult.length > 0) {
      this.setState({
        validationErrors: mapToValidationErrors(validationResult)
      });
    } else {
      if (site.id !== "") {
        await this.updateSite(site);
      } else {
        await this.addSite(site);
      }

      this.props.history.goBack();
    }

    this.setState({
      actionInProgress: false
    });
  }

  private async handleDeleteClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    this.setState({
      actionInProgress: true
    });

    await this.props.deleteSite(this.state.formSite.id);

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

  private async updateSite(site: ISite) {
    await this.props.updateSite(site);

    toastr.success(strings.sitePage.updateSiteSuccessMessage);
  }

  private async addSite(site: ISite) {
    await this.props.addSite(site);

    toastr.success(strings.sitePage.addSiteSuccessMessage);
  }
}

function mapStateToProps(
  state: IStoreState,
  ownProps: RouteComponentProps<any>
) {
  const siteId: string = ownProps.match.params.siteId;
  let site: ISite | undefined = {
    id: "",
    name: "",
    password: "",
    url: "",
    userName: ""
  };

  if (siteId !== undefined) {
    site = getCourseById(state.sites, siteId);
  }

  return {
    site
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
