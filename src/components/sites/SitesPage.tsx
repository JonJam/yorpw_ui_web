import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { getGroups as getGroupsAction } from "../../actions/group/groupActions";
import { getSites as getSitesAction } from "../../actions/site/siteActions";
import IGroupViewModel from "../../models/IGroupViewModel";
import getGroupViewModels from "../../selectors/getGroupViewModels";
import IStoreState from "../../store/IStoreState";
import GroupsList from "./GroupsList";

interface ISitePagesProps {
  groups: IGroupViewModel[];
  getGroups: () => (dispatch: Dispatch<IStoreState>) => Promise<void>;
  getSites: () => (dispatch: Dispatch<IStoreState>) => Promise<void>;
}

class SitesPage extends React.Component<ISitePagesProps> {
  public componentDidMount() {
    this.props.getGroups();
    this.props.getSites();
  }

  public render() {
    return <GroupsList groups={this.props.groups} />;
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    groups: getGroupViewModels(state.groups, state.sites)
  };
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
  return {
    getGroups: bindActionCreators(getGroupsAction, dispatch),
    getSites: bindActionCreators(getSitesAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SitesPage);
