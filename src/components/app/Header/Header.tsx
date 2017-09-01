import * as React from "react";
import { connect } from "react-redux";
import IStoreState from "../../../store/IStoreState";
import NavBar from "../NavBar/NavBar";
import Progress from "../Progress/Progress";

interface IHeaderProps {
  pendingActions: number;
}

class Header extends React.Component<IHeaderProps> {
  public render() {
    return (
      <div>
        <NavBar />
        <Progress pendingActions={this.props.pendingActions} />
      </div>
    );
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    pendingActions: state.pendingActions
  };
}

export default connect(mapStateToProps)(Header);
