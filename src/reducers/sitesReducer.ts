import ActionTypeKeys from "../actions/ActionTypeKeys";
import ActionTypes from "../actions/ActionTypes";
import { IAddSiteSuccessAction } from "../actions/site/add";
import { IDeleteSiteSuccessAction } from "../actions/site/delete";
import { IGetSitesSuccessAction } from "../actions/site/get";
import { IUpdateSiteSuccessAction } from "../actions/site/update";
import initialState from "./initialState";
import { ISitesStoreState } from "../store/IStoreState";

export default function sitesReducer(
  state: ISitesStoreState = initialState.sites,
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
    case ActionTypeKeys.GET_SITES_INPROGRESS:
      return onGetSitesInProgress(state);
    default:
      return state;
  }
}

function onGetSitesSuccess(action: IGetSitesSuccessAction) {
  return {
    isFetching: false,
    items: action.payload.sites
  };
}

function onUpdateSiteSuccess(
  action: IUpdateSiteSuccessAction,
  currentState: ISitesStoreState
) {
  return {
    ...currentState,
    items: [
      currentState.items.filter(site => site.id !== action.payload.site.id),
      { ...action.payload.site }
    ]
  };
}

function onDeleteSiteSuccess(
  action: IDeleteSiteSuccessAction,
  currentState: ISitesStoreState
) {
  return {
    ...currentState,
    items: [
      ...currentState.items.filter(site => site.id !== action.payload.siteId)
    ]
  };
}

function onAddSiteSuccess(
  action: IAddSiteSuccessAction,
  currentState: ISitesStoreState
) {
  return {
    ...currentState,
    items: [...currentState.items, { ...action.payload.site }]
  };
}

function onGetSitesInProgress(currentState: ISitesStoreState) {
  return {
    ...currentState,
    isFetching: true
  };
}
