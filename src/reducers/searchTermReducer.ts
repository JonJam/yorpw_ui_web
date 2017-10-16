import ActionTypeKeys from "../actions/ActionTypeKeys";
import ActionTypes from "../actions/ActionTypes";
import IUpdateSearchTermAction from "../actions/searchTerm/IUpdateSearchTermAction";
import initialState from "./initialState";

export default function searchTermReducer(
  state = initialState.searchTerm,
  action: ActionTypes
) {
  switch (action.type) {
    case ActionTypeKeys.UPDATE_SEARCHTERM:
      return onSearchTermChange(action);
    default:
      return state;
  }
}

function onSearchTermChange(action: IUpdateSearchTermAction) {
  return action.payload.searchTerm;
}
