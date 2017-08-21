import * as React from "react";
import { shallow } from "enzyme";
import App from "./App";
import configureStore from "redux-mock-store";
import IStoreState from "../store/IStoreState";

const mockStore = configureStore<IStoreState>();

it("shallow renders without crashing", () => {
  // Arrange
  const initialState: IStoreState = {
    example: "Hi"
  };

  const store = mockStore(initialState);

  // Act / Assert
  shallow(<App store={store} />);
});
