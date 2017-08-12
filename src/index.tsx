import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../src/components/App";
import registerServiceWorker from "./registerServiceWorker";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
