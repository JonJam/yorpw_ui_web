import keys from "../ActionTypeKeys";

export default interface IUpdateSiteFailAction {
  readonly type: keys.UPDATE_SITE_FAIL;
  readonly payload: {
    readonly error: Error;
  };
};
