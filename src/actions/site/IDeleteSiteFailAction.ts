import keys from "../ActionTypeKeys";

export default interface IDeleteSiteFailAction {
  readonly type: keys.DELETE_SITE_FAIL;
  readonly payload: {
    readonly error: Error;
  };
};
