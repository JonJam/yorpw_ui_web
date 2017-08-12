import * as React from "react";
import { shallow } from "enzyme";
import App from "./App";

// Shallow render test
it("renders without crashing", () => {
  shallow(<App />);
});
