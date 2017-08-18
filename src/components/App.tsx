import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Store } from "redux";
import IStoreState from "../store/IStoreState";
import Error404Page from "./errors/Error404Page";
import HomePage from "./home/HomePage";
import SitesPage from "./sites/SitesPage";

interface IAppProps {
  store: Store<IStoreState>;
}

class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
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
              <Route exact={true} path="/" component={HomePage} />
              <Route path="/sites" component={SitesPage} />
              <Route component={Error404Page} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
