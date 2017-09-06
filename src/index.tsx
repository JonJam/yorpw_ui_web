import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../src/components/App";
import configureStore from "../src/store/configureStore";
import registerServiceWorker from "./registerServiceWorker";
import "whatwg-fetch";

// The following imports have to be in this order for bootstrap to correctly work.
/* tslint:disable ordered-imports */
import "./createBootstrapGlobals";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import "../node_modules/font-awesome/css/font-awesome.css";

const store = configureStore();

ReactDOM.render(
  <App store={store} />,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
