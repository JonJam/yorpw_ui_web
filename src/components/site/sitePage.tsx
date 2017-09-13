import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import ISite from "../../models/ISite";
import getCourseById from "../../selectors/getCourseById";
import IStoreState from "../../store/IStoreState";
import strings from "../../strings";
import SiteFrom from "./SiteForm";

import "./SitePage.css";

interface ISitePageProps extends RouteComponentProps<any> {
  site: ISite;
}

interface ISitePageState {
  formSite: ISite;
  showClearPassword: boolean;
}

// TODO Use this for add new sites or purely update ?
// TODO redirect if site is null ?
class SitePage extends React.Component<ISitePageProps, ISitePageState> {
  constructor(props: ISitePageProps) {
    super(props);

    this.state = {
      formSite: { ...this.props.site },
      showClearPassword: false
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

  private handleSaveClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    // TODO implement this.
    console.log("Saved clicked");
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
