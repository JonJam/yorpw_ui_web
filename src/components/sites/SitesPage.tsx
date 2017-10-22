import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import { getGroupsIfNeeded as getGroupsIfNeededAction } from "../../actions/group/groupActions";
import { getSitesIfNeeded as getSitesIfNeededAction } from "../../actions/site/siteActions";
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
  getGroupsIfNeeded: () => (
    dispatch: Dispatch<IStoreState>,
    getState: () => IStoreState
  ) => Promise<void>;
  getSitesIfNeeded: () => (
    dispatch: Dispatch<IStoreState>,
    getState: () => IStoreState
  ) => Promise<void>;
}

class SitesPage extends React.Component<ISitePagesProps> {
  constructor(props: ISitePagesProps) {
    super(props);

    this.handleGroupEditClick = this.handleGroupEditClick.bind(this);
    this.handleSiteClick = this.handleSiteClick.bind(this);
  }

  public componentDidMount() {
    this.props.getGroupsIfNeeded();
    this.props.getSitesIfNeeded();
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
    getGroupsIfNeeded: bindActionCreators(getGroupsIfNeededAction, dispatch),
    getSitesIfNeeded: bindActionCreators(getSitesIfNeededAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SitesPage);
