import keys from "../../ActionTypeKeys";
import ISite from "../../../models/ISite";

export interface IGetSitesFailAction {
  readonly type: keys.GET_SITES_FAIL;
  readonly payload: {
    readonly error: Error;
  };
}

export interface IGetSitesInProgressAction {
  readonly type: keys.GET_SITES_INPROGRESS;
}

export interface IGetSitesSuccessAction {
  readonly type: keys.GET_SITES_SUCCESS;
  readonly payload: {
    readonly sites: ReadonlyArray<ISite>;
  };
}
