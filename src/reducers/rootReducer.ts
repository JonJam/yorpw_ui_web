import { combineReducers } from "redux";
import IStoreState from "../store/IStoreState";
import example from "./exampleReducer";

const rootReducer = combineReducers<IStoreState>({
  example
});

export default rootReducer;
