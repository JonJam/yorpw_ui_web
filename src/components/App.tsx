import * as React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import HomePage from "./home/HomePage";
import SitesPage from "./sites/SitesPage";
import Error404Page from "./errors/Error404Page";

class App extends React.Component {
  public render() {
    return (
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
    );
  }
}

export default App;
