import ActionTypeKeys from "../actions/ActionTypeKeys";
import ActionTypes from "../actions/ActionTypes";
import IGetSitesSuccessAction from "../actions/site/IGetSitesSuccessAction";
import IUpdateSiteSuccessAction from "../actions/site/IUpdateSiteSuccessAction";
import IDeleteSiteSuccessAction from "../actions/site/IDeleteSiteSuccessAction";
import initialState from "./initialState";
import ISite from "../models/ISite";

export default function sitesReducer(
  state = initialState.sites,
  action: ActionTypes
) {
  switch (action.type) {
    case ActionTypeKeys.GET_SITES_SUCCESS:
      return onGetSitesSuccess(action);
    case ActionTypeKeys.UPDATE_SITE_SUCCESS:
      return onUpdateSiteSuccess(action, state);
    case ActionTypeKeys.DELETE_SITE_SUCCESS:
      return onDeleteSiteSuccess(action, state);
    default:
      return state;
  }
}

function onGetSitesSuccess(action: IGetSitesSuccessAction) {
  return action.payload.sites;
}

function onUpdateSiteSuccess(
  action: IUpdateSiteSuccessAction,
  currentState: ISite[]
) {
  return [
    ...currentState.filter(site => site.id !== action.payload.site.id),
    { ...action.payload.site }
  ];
}

function onDeleteSiteSuccess(
  action: IDeleteSiteSuccessAction,
  currentState: ISite[]
) {
  return [...currentState.filter(site => site.id !== action.payload.siteId)];
}
