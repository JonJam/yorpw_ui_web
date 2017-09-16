import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import { getGroups as getGroupsAction } from "../../actions/group/groupActions";
import { getSites as getSitesAction } from "../../actions/site/siteActions";
import IGroupViewModel from "../../models/IGroupViewModel";
import { sitesPath } from "../../routes/paths";
import getGroupViewModels from "../../selectors/getGroupViewModels";
import isBusy from "../../selectors/isBusy";
import IStoreState from "../../store/IStoreState";
import strings from "../../strings";
import GroupList from "./GroupList";

interface ISitePagesProps extends RouteComponentProps<any> {
  readonly groups: ReadonlyArray<IGroupViewModel>;
  readonly isBusy: boolean;
  getGroups: () => (dispatch: Dispatch<IStoreState>) => Promise<void>;
  getSites: () => (dispatch: Dispatch<IStoreState>) => Promise<void>;
}

class SitesPage extends React.Component<ISitePagesProps> {
  constructor(props: ISitePagesProps) {
    super(props);

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
        <h1 className="sr-only">
          {strings.sitesPage.title}
        </h1>
        <GroupList
          groups={this.props.groups}
          isBusy={this.props.isBusy}
          handleSiteClick={this.handleSiteClick}
        />
      </div>
    );
  }

  private handleSiteClick(siteId: string) {
    this.props.history.push(`${sitesPath}/${siteId}`);
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    groups: getGroupViewModels(state.groups, state.sites),
    isBusy: isBusy(state.pendingActions)
  };
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
  return {
    getGroups: bindActionCreators(getGroupsAction, dispatch),
    getSites: bindActionCreators(getSitesAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SitesPage);
