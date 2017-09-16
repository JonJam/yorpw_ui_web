import { validate } from "class-validator";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
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
}

interface ISitePageState {
  readonly formSite: ISite;
  readonly showClearPassword: boolean;
  readonly validationErrors: IValidationErrors;
}

// TODO Use this for add new sites or purely update ?
// TODO redirect if site is null ?
class SitePage extends React.Component<ISitePageProps, ISitePageState> {
  constructor(props: ISitePageProps) {
    super(props);

    this.state = {
      formSite: { ...this.props.site },
      showClearPassword: false,
      validationErrors: {}
    };

    this.handleTogglePasswordClick = this.handleTogglePasswordClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  public render() {
    return (
      <div className="row mt-3 sitePage">
        <div className="col-12">
          <div className="card">
            {/* TODO Update title based on whether updating or creating */}
            <div className="card-header">
              {strings.sitePage.title}
              <h1 className="sr-only">
                {strings.sitePage.title}
              </h1>
            </div>
            <div className="card-body">
              <SiteFrom
                site={this.state.formSite}
                validationErrors={this.state.validationErrors}
                showClearPassword={this.state.showClearPassword}
                handleCancelClick={this.handleCancelClick}
                handleSaveClick={this.handleSaveClick}
                handleInputChange={this.handleInputChange}
                handleTogglePasswordClick={this.handleTogglePasswordClick}
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

    // TODO Loading ?
    const site = new Site(this.state.formSite);

    const validationResult = await validate(site);

    if (validationResult.length > 0) {
      this.setState({
        validationErrors: mapToValidationErrors(validationResult)
      });
    } else {
      // TODO implement save
    }
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
}

function mapStateToProps(
  state: IStoreState,
  ownProps: RouteComponentProps<any>
) {
  const siteId: string = ownProps.match.params.siteId;

  const site = getCourseById(state.sites, siteId);

  return {
    site
  };
}

export default connect(mapStateToProps)(SitePage);