import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Footer from "./app/Footer/Footer";
import Header from "./app/Header/Header";
import Routes from "../routes/Routes";
import { connect } from "react-redux";
import isBusy from "../selectors/isBusy";
import IStoreState from "../store/IStoreState";

import "./App.css";

interface IAppProps extends RouteComponentProps<any> {
  isBusy: boolean;
}

class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <Header />

        <div className="container-fluid">
          {/* TODO Replace isBusy with actual value */}
          <Routes isAuthenticated={this.props.isBusy} />
        </div>

        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    isBusy: isBusy(state.pendingActions)
  };
}

// Casting to prevent error where used in index.ts that isBusy is mandatory, since it is being provided by Redux.
export default withRouter(
  connect<{}, {}, IAppProps>(mapStateToProps)(App)
) as React.ComponentClass<{}>;
