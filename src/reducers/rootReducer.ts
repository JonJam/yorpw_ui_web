import { combineReducers } from "redux";
import IStoreState from "../store/IStoreState";
import groups from "./groupsReducer";
import pendingActions from "./pendingActionsReducer";

const rootReducer = combineReducers<IStoreState>({
  groups,
  pendingActions
});

export default rootReducer;
