import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Store } from "redux";
import IStoreState from "../store/IStoreState";
import Error404Page from "./errors/Error404Page";
import HomePage from "./home/HomePage";
import SitesPage from "./sites/SitesPage";
import NavBar from "./app/NavBar/NavBar";
import Footer from "./app/Footer/Footer";

import "./App.css";

interface IAppProps {
  store: Store<IStoreState>;
}

class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <div>
            <NavBar />

            <div className="container">
              <Switch>
                <Route exact={true} path="/" component={HomePage} />
                <Route path="/sites" component={SitesPage} />
                <Route component={Error404Page} />
              </Switch>
            </div>

            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
