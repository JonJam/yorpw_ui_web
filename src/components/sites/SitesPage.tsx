import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { getGroups as getGroupsAction } from "../../actions/group/groupActions";
import IGroup from "../../model/IGroup";
import IStoreState from "../../store/IStoreState";

interface ISitePagesProps {
  groups: IGroup[];
  getGroups: () => (dispatch: Dispatch<IStoreState>) => Promise<void>;
}

class SitesPage extends React.Component<ISitePagesProps> {
  constructor(props: ISitePagesProps) {
    super(props);
  }

  public componentDidMount() {
    this.props.getGroups();
  }

  public render() {
    return <div />;
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    groups: state.groups
  };
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
  return {
    getGroups: bindActionCreators(getGroupsAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SitesPage);
