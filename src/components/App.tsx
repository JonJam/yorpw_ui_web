import * as React from "react";
import { Store } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import State from "../store/State";

import HomePage from "./home/HomePage";
import SitesPage from "./sites/SitesPage";
import Error404Page from "./errors/Error404Page";

interface AppProps {
  store: Store<State>;
}

class App extends React.Component<AppProps> {
  public render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/sites">Sites</Link>
              </li>
            </ul>

            <hr />

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/sites" component={SitesPage} />
              <Route component={Error404Page} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
