import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import { getGroups as getGroupsAction } from "../../actions/group/groupActions";
import { getSites as getSitesAction } from "../../actions/site/siteActions";
import IGroupWithSites from "../../models/IGroupWithSites";
import { groupPath, sitePath } from "../../routes/paths";
import { filterGroupsAndSites, isBusy } from "../../selectors";
import IStoreState from "../../store/IStoreState";
import strings from "../../strings";
import Footer from "./footer/Footer";
import GroupList from "./GroupList";

interface ISitePagesProps extends RouteComponentProps<any> {
  readonly groups: ReadonlyArray<IGroupWithSites>;
  readonly isBusy: boolean;
  getGroups: () => (dispatch: Dispatch<IStoreState>) => Promise<void>;
  getSites: () => (dispatch: Dispatch<IStoreState>) => Promise<void>;
}

class SitesPage extends React.Component<ISitePagesProps> {
  constructor(props: ISitePagesProps) {
    super(props);

    this.handleGroupEditClick = this.handleGroupEditClick.bind(this);
    this.handleSiteClick = this.handleSiteClick.bind(this);
  }

  public componentDidMount() {
    // TODO improve this so not calling everytime page loads ?
    this.props.getGroups();
    this.props.getSites();
  }

  public render() {
    return (
      <div>
        <h1 className="sr-only">{strings.sitesPage.title}</h1>
        <GroupList
          groups={this.props.groups}
          isBusy={this.props.isBusy}
          handleGroupEditClick={this.handleGroupEditClick}
          handleSiteClick={this.handleSiteClick}
        />
        <Footer />
      </div>
    );
  }

  private handleGroupEditClick(groupId: string) {
    this.props.history.push(`${groupPath}/${groupId}`);
  }

  private handleSiteClick(siteId: string) {
    this.props.history.push(`${sitePath}/${siteId}`);
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    groups: filterGroupsAndSites(state),
    isBusy: isBusy(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
  return {
    getGroups: bindActionCreators(getGroupsAction, dispatch),
    getSites: bindActionCreators(getSitesAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SitesPage);
