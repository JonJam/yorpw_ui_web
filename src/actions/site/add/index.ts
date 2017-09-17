import keys from "../../ActionTypeKeys";
import ISite from "../../../models/ISite";

export interface IAddSiteFailAction {
  readonly type: keys.ADD_SITE_FAIL;
  readonly payload: {
    readonly error: Error;
  };
}

export interface IAddSiteInProgressAction {
  readonly type: keys.ADD_SITE_INPROGRESS;
}

export interface IAddSiteSuccessAction {
  readonly type: keys.ADD_SITE_SUCCESS;
  readonly payload: {
    readonly site: ISite;
  };
}
