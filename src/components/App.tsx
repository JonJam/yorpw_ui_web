import { History } from "history";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import { signOut as signOutAction } from "../actions/authentication/authenticationActions";
import ISignOutAction from "../actions/authentication/ISignOutAction";
import IUpdateSearchTermAction from "../actions/searchTerm/IUpdateSearchTermAction";
import { updateSearchTerm as updateSearchTermAction } from "../actions/searchTerm/searchTermActions";
import Routes from "../routes/Routes";
import { isBusy } from "../selectors";
import IStoreState from "../store/IStoreState";
import Header from "./header/Header";

import "./App.css";

interface IAppProps extends RouteComponentProps<any> {
  readonly isBusy: boolean;
  readonly isAuthenticated: boolean;
  readonly searchTerm: string;
  signOut: (history: History) => ISignOutAction;
  updateSearchTerm: (searchTerm: string) => IUpdateSearchTermAction;
}

class App extends React.Component<IAppProps> {
  constructor(props: IAppProps) {
    super(props);

    this.signOut = this.signOut.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  public render() {
    return (
      <div>
        <Header
          isBusy={this.props.isBusy}
          isAuthenticated={this.props.isAuthenticated}
          currentLocation={this.props.location.pathname}
          handleSignOut={this.signOut}
          searchTerm={this.props.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
        />

        <div className="container-fluid">
          <Routes isAuthenticated={this.props.isAuthenticated} />
        </div>
      </div>
    );
  }

  private signOut(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    this.props.signOut(this.props.history);
  }

  private handleSearchTermChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = e.target.value;

    this.props.updateSearchTerm(searchTerm);
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    isAuthenticated: state.isAuthenticated,
    isBusy: isBusy(state.pendingActions),
    searchTerm: state.searchTerm
  };
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
  return {
    signOut: bindActionCreators(signOutAction, dispatch),
    updateSearchTerm: bindActionCreators(updateSearchTermAction, dispatch)
  };
}

// Casting to prevent error where used in index.ts that isBusy is mandatory, since it is being provided by Redux.
export default withRouter(
  connect<{}, {}, IAppProps>(mapStateToProps, mapDispatchToProps)(App)
) as React.ComponentClass<{}>;
