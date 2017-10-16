import { combineReducers } from "redux";
import IStoreState from "../store/IStoreState";
import isAuthenticated from "./authenticationReducer";
import groups from "./groupsReducer";
import pendingActions from "./pendingActionsReducer";
import searchTerm from "./searchTermReducer";
import sites from "./sitesReducer";

const rootReducer = combineReducers<IStoreState>({
  groups,
  isAuthenticated,
  pendingActions,
  searchTerm,
  sites
});

export default rootReducer;
