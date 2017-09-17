import keys from "../../ActionTypeKeys";
import ISite from "../../../models/ISite";

export interface IUpdateSiteFailAction {
  readonly type: keys.UPDATE_SITE_FAIL;
  readonly payload: {
    readonly error: Error;
  };
}

export interface IUpdateSiteInProgressAction {
  readonly type: keys.UPDATE_SITE_INPROGRESS;
}

export interface IUpdateSiteSuccessAction {
  readonly type: keys.UPDATE_SITE_SUCCESS;
  readonly payload: {
    readonly site: ISite;
  };
}
