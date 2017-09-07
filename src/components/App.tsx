import { History } from "history";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import { signOut as signOutAction } from "../actions/authentication/authenticationActions";
import ISignOutAction from "../actions/authentication/ISignOutAction";
import Routes from "../routes/Routes";
import isBusy from "../selectors/isBusy";
import IStoreState from "../store/IStoreState";
import Footer from "./footer/Footer";
import Header from "./header/Header";

import "./App.css";

interface IAppProps extends RouteComponentProps<any> {
  isBusy: boolean;
  isAuthenticated: boolean;
  signOut: (history: History) => ISignOutAction;
}

class App extends React.Component<IAppProps> {
  constructor(props: IAppProps) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  public render() {
    return (
      <div>
        <Header
          isBusy={this.props.isBusy}
          isAuthenticated={this.props.isAuthenticated}
          handleSignOut={this.signOut}
        />

        <div className="container-fluid">
          <Routes isAuthenticated={this.props.isAuthenticated} />
        </div>

        <Footer />
      </div>
    );
  }

  private signOut() {
    this.props.signOut(this.props.history);
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    isAuthenticated: state.isAuthenticated,
    isBusy: isBusy(state.pendingActions)
  };
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
  return {
    signOut: bindActionCreators(signOutAction, dispatch)
  };
}

// Casting to prevent error where used in index.ts that isBusy is mandatory, since it is being provided by Redux.
export default withRouter(
  connect<{}, {}, IAppProps>(mapStateToProps, mapDispatchToProps)(App)
) as React.ComponentClass<{}>;
