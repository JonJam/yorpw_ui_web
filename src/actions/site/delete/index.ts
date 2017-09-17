import keys from "../../ActionTypeKeys";

export interface IDeleteSiteFailAction {
  readonly type: keys.DELETE_SITE_FAIL;
  readonly payload: {
    readonly error: Error;
  };
}

export interface IDeleteSiteInProgressAction {
  readonly type: keys.DELETE_SITE_INPROGRESS;
}

export interface IDeleteSiteSuccessAction {
  readonly type: keys.DELETE_SITE_SUCCESS;
  readonly payload: {
    readonly siteId: string;
  };
}
