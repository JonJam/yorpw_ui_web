import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { getGroups as getGroupsAction } from "../../actions/group/groupActions";
import { getSites as getSitesAction } from "../../actions/site/siteActions";
import IGroupViewModel from "../../models/IGroupViewModel";
import getGroupViewModels from "../../selectors/getGroupViewModels";
import isBusy from "../../selectors/isBusy";
import IStoreState from "../../store/IStoreState";
import strings from "../../strings";
import GroupList from "./GroupList";

interface ISitePagesProps {
  groups: IGroupViewModel[];
  isBusy: boolean;
  getGroups: () => (dispatch: Dispatch<IStoreState>) => Promise<void>;
  getSites: () => (dispatch: Dispatch<IStoreState>) => Promise<void>;
}

class SitesPage extends React.Component<ISitePagesProps> {
  public componentDidMount() {
    this.props.getGroups();
    this.props.getSites();
  }

  public render() {
    return (
      <div>
        <h1 className="sr-only">
          {strings.sitesPage.h1}
        </h1>
        <GroupList groups={this.props.groups} isBusy={this.props.isBusy} />
      </div>
    );
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
