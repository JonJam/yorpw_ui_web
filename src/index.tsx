import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../src/components/App";
import configureStore from "../src/store/configureStore";
import registerServiceWorker from "./registerServiceWorker";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

const store = configureStore();

ReactDOM.render(
  <App store={store} />,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
