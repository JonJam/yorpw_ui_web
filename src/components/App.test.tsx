import * as React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("shallow renders without crashing", () => {
  // Act / Assert
  shallow(<App />);
});
