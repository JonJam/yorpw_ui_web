import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import IStoreState from "./IStoreState";
import thunkMiddleware from "redux-thunk";

export default function configureStore() {
  return createStore<IStoreState>(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  );
}
