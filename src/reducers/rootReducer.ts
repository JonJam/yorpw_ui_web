import { combineReducers } from "redux";
import IStoreState from "../store/IStoreState";
import groups from "./groupsReducer";
import pendingActions from "./pendingActionsReducer";
import sites from "./sitesReducer";
import isAuthenticated from "./authenticationReducer";

const rootReducer = combineReducers<IStoreState>({
  groups,
  pendingActions,
  sites,
  isAuthenticated
});

export default rootReducer;
