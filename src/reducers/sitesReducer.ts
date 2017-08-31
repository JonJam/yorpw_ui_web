import ActionTypeKeys from "../actions/ActionTypeKeys";
import ActionTypes from "../actions/ActionTypes";
import IGetSitesSuccessAction from "../actions/site/IGetSitesSuccessAction";
import initialState from "./initialState";

export default function sitesReducer(
  state = initialState.sites,
  action: ActionTypes
) {
  switch (action.type) {
    case ActionTypeKeys.GET_SITES_SUCCESS:
      return onGetSitesSuccess(action);
    default:
      return state;
  }
}

function onGetSitesSuccess(action: IGetSitesSuccessAction) {
  return action.payload.sites;
}
