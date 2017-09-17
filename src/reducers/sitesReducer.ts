import ActionTypeKeys from "../actions/ActionTypeKeys";
import ActionTypes from "../actions/ActionTypes";
import { IAddSiteSuccessAction } from "../actions/site/add";
import { IDeleteSiteSuccessAction } from "../actions/site/delete";
import { IGetSitesSuccessAction } from "../actions/site/get";
import { IUpdateSiteSuccessAction } from "../actions/site/update";
import ISite from "../models/ISite";
import initialState from "./initialState";

export default function sitesReducer(
  state: ReadonlyArray<ISite> = initialState.sites,
  action: ActionTypes
) {
  switch (action.type) {
    case ActionTypeKeys.GET_SITES_SUCCESS:
      return onGetSitesSuccess(action);
    case ActionTypeKeys.UPDATE_SITE_SUCCESS:
      return onUpdateSiteSuccess(action, state);
    case ActionTypeKeys.DELETE_SITE_SUCCESS:
      return onDeleteSiteSuccess(action, state);
    case ActionTypeKeys.ADD_SITE_SUCCESS:
      return onAddSiteSuccess(action, state);
    default:
      return state;
  }
}

function onGetSitesSuccess(action: IGetSitesSuccessAction) {
  return action.payload.sites;
}

function onUpdateSiteSuccess(
  action: IUpdateSiteSuccessAction,
  currentState: ReadonlyArray<ISite>
) {
  return [
    ...currentState.filter(site => site.id !== action.payload.site.id),
    { ...action.payload.site }
  ];
}

function onDeleteSiteSuccess(
  action: IDeleteSiteSuccessAction,
  currentState: ReadonlyArray<ISite>
) {
  return [...currentState.filter(site => site.id !== action.payload.siteId)];
}

function onAddSiteSuccess(
  action: IAddSiteSuccessAction,
  currentState: ReadonlyArray<ISite>
) {
  return [...currentState, { ...action.payload.site }];
}
