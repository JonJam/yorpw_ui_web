import { Dispatch } from "redux";
import {
  addSite as addSiteFromApi,
  deleteSite as deleteSiteFromApi,
  getSites as getSitesFromApi,
  updateSite as updateSiteFromApi
} from "../../api/sitesApi";
import IGroup from "../../models/IGroup";
import ISite from "../../models/ISite";
import IStoreState from "../../store/IStoreState";
import keys from "../ActionTypeKeys";
import { updateGroup } from "../group/groupActions";
import {
  IAddSiteFailAction,
  IAddSiteInProgressAction,
  IAddSiteSuccessAction
} from "./add";
import {
  IDeleteSiteFailAction,
  IDeleteSiteInProgressAction,
  IDeleteSiteSuccessAction
} from "./delete";
import {
  IGetSitesFailAction,
  IGetSitesInProgressAction,
  IGetSitesSuccessAction
} from "./get";
import {
  IUpdateSiteFailAction,
  IUpdateSiteInProgressAction,
  IUpdateSiteSuccessAction
} from "./update";

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
  site: ISite,
  oldGroup?: IGroup,
  newGroup?: IGroup
): (dispatch: Dispatch<IStoreState>) => Promise<void> {
  return async (dispatch: Dispatch<IStoreState>) => {
    // Signal work in progress.
    dispatch(updateSiteInProgress());

    try {
      const updatedSite: ISite = await updateSiteFromApi(site);

      // Adding to new group first so that that SitePage doesn't display
      // an error that it cannot find Group for Site, which is temporary.
      // After added to new group then remove from old group.
      if (newGroup !== undefined) {
        const newGroupToUpdate = {
          ...newGroup,
          sites: [...newGroup.sites, site.id]
        };

        await dispatch(updateGroup(newGroupToUpdate));
      }

      if (oldGroup !== undefined) {
        const oldGroupToUpdate = {
          ...oldGroup,
          sites: oldGroup.sites.filter(s => s !== site.id)
        };

        await dispatch(updateGroup(oldGroupToUpdate));
      }

      dispatch(updateSiteSuccess(updatedSite));
    } catch (err) {
      dispatch(updateSiteFail(err));
    }
  };
}

export function deleteSite(
  siteId: string,
  group: IGroup
): (dispatch: Dispatch<IStoreState>) => Promise<void> {
  return async (dispatch: Dispatch<IStoreState>) => {
    // Signal work in progress.
    dispatch(deleteSiteInProgress());

    try {
      await deleteSiteFromApi(siteId);

      const groupToUpdate = {
        ...group,
        sites: group.sites.filter(s => s !== siteId)
      };

      await dispatch(updateGroup(groupToUpdate));

      dispatch(deleteSiteSuccess(siteId));
    } catch (err) {
      dispatch(deleteSiteFail(err));
    }
  };
}

export function addSite(
  site: ISite,
  group: IGroup
): (dispatch: Dispatch<IStoreState>) => Promise<void> {
  return async (dispatch: Dispatch<IStoreState>) => {
    // Signal work in progress.
    dispatch(addSiteInProgress());

    try {
      const addedSite = await addSiteFromApi(site);

      const groupToUpdate = {
        ...group,
        sites: [...group.sites, addedSite.id]
      };

      await dispatch(updateGroup(groupToUpdate));

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
