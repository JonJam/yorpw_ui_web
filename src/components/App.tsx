import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Routes from "../routes/Routes";
import { connect } from "react-redux";
import isBusy from "../selectors/isBusy";
import IStoreState from "../store/IStoreState";

import "./App.css";

interface IAppProps extends RouteComponentProps<any> {
  isBusy: boolean;
  isAuthenticated: boolean;
}

class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <Header isBusy={this.props.isBusy} />

        <div className="container-fluid">
          <Routes isAuthenticated={this.props.isAuthenticated} />
        </div>

        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    isAuthenticated: state.isAuthenticated,
    isBusy: isBusy(state.pendingActions)
  };
}

// Casting to prevent error where used in index.ts that isBusy is mandatory, since it is being provided by Redux.
export default withRouter(
  connect<{}, {}, IAppProps>(mapStateToProps)(App)
) as React.ComponentClass<{}>;
