import { combineReducers } from "redux";
import IStoreState from "../store/IStoreState";
import groups from "./groupsReducer";
import pendingActions from "./pendingActionsReducer";
import sites from "./sitesReducer";

const rootReducer = combineReducers<IStoreState>({
  groups,
  pendingActions,
  sites
});

export default rootReducer;
