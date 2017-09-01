import { Dispatch } from "redux";
import { getSites as getSitesFromApi } from "../../api/sitesApi";
import ISite from "../../models/ISite";
import IStoreState from "../../store/IStoreState";
import keys from "../ActionTypeKeys";
import IGetSitesFailAction from "./IGetSitesFailAction";
import IGetSitesInProgressAction from "./IGetSitesInProgressAction";
import IGetSitesSuccessAction from "./IGetSitesSuccessAction";

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
