import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Store } from "redux";
import { HomeRoute, SignUpRoute, SitesRoute } from "../routes";
import IStoreState from "../store/IStoreState";
import Footer from "./app/Footer/Footer";
import Header from "./app/Header/Header";
import Error404Page from "./errors/Error404Page";
import HomePage from "./home/HomePage";
import SignUpPage from "./signup/SignUpPage";
import SitesPage from "./sites/SitesPage";

import "./App.css";

interface IAppProps {
  store: Store<IStoreState>;
}

class App extends React.Component<IAppProps> {
  public render() {
    // Ideally would move Provider/BrowserRouter into index.tsx and move out Switch to Routes.tsx file.
    // However doing the previous breaks routing locally such that the URL changes but the page doesn't render,
    // and you have to refresh the browser to view it.
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <div>
            <Header />

            <div className="container">
              <Switch>
                <Route exact={true} path={HomeRoute} component={HomePage} />
                <Route path={SitesRoute} component={SitesPage} />
                <Route path={SignUpRoute} component={SignUpPage} />
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
