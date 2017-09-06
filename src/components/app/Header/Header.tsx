import * as React from "react";
import { connect } from "react-redux";
import isBusy from "../../../selectors/isBusy";
import IStoreState from "../../../store/IStoreState";
import NavBar from "../NavBar/NavBar";
import Progress from "../Progress/Progress";

interface IHeaderProps {
  isBusy: boolean;
}

class Header extends React.Component<IHeaderProps> {
  public render() {
    return (
      <div>
        <NavBar />
        <Progress isBusy={this.props.isBusy} />
      </div>
    );
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    isBusy: isBusy(state.pendingActions)
  };
}

export default connect(mapStateToProps)(Header);
