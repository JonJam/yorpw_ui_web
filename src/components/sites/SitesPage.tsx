import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { getGroups as getGroupsAction } from "../../actions/group/groupActions";
import { getSites as getSitesAction } from "../../actions/site/siteActions";
import IGroup from "../../model/IGroup";
import ISite from "../../model/ISite";
import IStoreState from "../../store/IStoreState";

interface ISitePagesProps {
  groups: IGroup[];
  sites: ISite[];
  getGroups: () => (dispatch: Dispatch<IStoreState>) => Promise<void>;
  getSites: () => (dispatch: Dispatch<IStoreState>) => Promise<void>;
}

class SitesPage extends React.Component<ISitePagesProps> {
  constructor(props: ISitePagesProps) {
    super(props);
  }

  public componentDidMount() {
    this.props.getGroups();
    this.props.getSites();
  }

  public render() {
    return <div />;
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    groups: state.groups,
    sites: state.sites
  };
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
  return {
    getGroups: bindActionCreators(getGroupsAction, dispatch),
    getSites: bindActionCreators(getSitesAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SitesPage);
