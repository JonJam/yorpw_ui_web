import { Dispatch } from "redux";
import {
  addSite as addSiteFromApi,
  deleteSite as deleteSiteFromApi,
  getSites as getSitesFromApi,
  updateSite as updateSiteFromApi
} from "../../api/sitesApi";
import ISite from "../../models/ISite";
import IStoreState from "../../store/IStoreState";
import keys from "../ActionTypeKeys";
import IAddSiteFailAction from "./IAddSiteFailAction";
import IAddSiteInProgressAction from "./IAddSiteInProgressAction";
import IAddSiteSuccessAction from "./IAddSiteSuccessAction";
import IDeleteSiteFailAction from "./IDeleteSiteFailAction";
import IDeleteSiteInProgressAction from "./IDeleteSiteInProgressAction";
import IDeleteSiteSuccessAction from "./IDeleteSiteSuccessAction";
import IGetSitesFailAction from "./IGetSitesFailAction";
import IGetSitesInProgressAction from "./IGetSitesInProgressAction";
import IGetSitesSuccessAction from "./IGetSitesSuccessAction";
import IUpdateSiteFailAction from "./IUpdateSiteFailAction";
import IUpdateSiteInProgressAction from "./IUpdateSiteInProgressAction";
import IUpdateSiteSuccessAction from "./IUpdateSiteSuccessAction";

export function getSites(): (dispatch: Dispatch<IStoreState>) => Promise<void> {
  return async (dispatch: Dispatch<IStoreState>) => {
    // Signal work in progress.
    dispatch(getSitesInProgress());

    try {
      const sites: ISite[] = await getSitesFromApi();

      dispatch(getSitesSuccess(sites));
    } catch (err) {
      dispatch(getSitesFail(err));
    }
  };
}

export function updateSite(
  site: ISite
): (dispatch: Dispatch<IStoreState>) => Promise<void> {
  return async (dispatch: Dispatch<IStoreState>) => {
    // Signal work in progress.
    dispatch(updateSiteInProgress());

    try {
      const updatedSite: ISite = await updateSiteFromApi(site);

      dispatch(updateSiteSuccess(updatedSite));
    } catch (err) {
      dispatch(updateSiteFail(err));
    }
  };
}

export function deleteSite(
  siteId: string
): (dispatch: Dispatch<IStoreState>) => Promise<void> {
  return async (dispatch: Dispatch<IStoreState>) => {
    // Signal work in progress.
    dispatch(deleteSiteInProgress());

    try {
      await deleteSiteFromApi(siteId);

      dispatch(deleteSiteSuccess(siteId));
    } catch (err) {
      dispatch(deleteSiteFail(err));
    }
  };
}

export function addSite(
  site: ISite
): (dispatch: Dispatch<IStoreState>) => Promise<void> {
  return async (dispatch: Dispatch<IStoreState>) => {
    // Signal work in progress.
    dispatch(addSiteInProgress());

    try {
      const addedSite: ISite = await addSiteFromApi(site);

      dispatch(addSiteSuccess(addedSite));
    } catch (err) {
      dispatch(addSiteFail(err));
    }
  };
}

function getSitesInProgress(): IGetSitesInProgressAction {
  return {
    type: keys.GET_SITES_INPROGRESS
  };
}

function getSitesSuccess(sites: ISite[]): IGetSitesSuccessAction {
  return {
    payload: {
      sites
    },
    type: keys.GET_SITES_SUCCESS
  };
}

function getSitesFail(error: Error): IGetSitesFailAction {
  return {
    payload: {
      error
    },
    type: keys.GET_SITES_FAIL
  };
}

function updateSiteInProgress(): IUpdateSiteInProgressAction {
  return {
    type: keys.UPDATE_SITE_INPROGRESS
  };
}

function updateSiteSuccess(site: ISite): IUpdateSiteSuccessAction {
  return {
    payload: {
      site
    },
    type: keys.UPDATE_SITE_SUCCESS
  };
}

function updateSiteFail(error: Error): IUpdateSiteFailAction {
  return {
    payload: {
      error
    },
    type: keys.UPDATE_SITE_FAIL
  };
}

function deleteSiteInProgress(): IDeleteSiteInProgressAction {
  return {
    type: keys.DELETE_SITE_INPROGRESS
  };
}

function deleteSiteSuccess(siteId: string): IDeleteSiteSuccessAction {
  return {
    payload: {
      siteId
    },
    type: keys.DELETE_SITE_SUCCESS
  };
}

function deleteSiteFail(error: Error): IDeleteSiteFailAction {
  return {
    payload: {
      error
    },
    type: keys.DELETE_SITE_FAIL
  };
}

function addSiteInProgress(): IAddSiteInProgressAction {
  return {
    type: keys.ADD_SITE_INPROGRESS
  };
}

function addSiteSuccess(site: ISite): IAddSiteSuccessAction {
  return {
    payload: {
      site
    },
    type: keys.ADD_SITE_SUCCESS
  };
}

function addSiteFail(error: Error): IAddSiteFailAction {
  return {
    payload: {
      error
    },
    type: keys.ADD_SITE_FAIL
  };
}
