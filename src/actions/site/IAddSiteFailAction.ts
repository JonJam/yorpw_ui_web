import keys from "../ActionTypeKeys";

export default interface IAddSiteFailAction {
  readonly type: keys.ADD_SITE_FAIL;
  readonly payload: {
    readonly error: Error;
  };
};
