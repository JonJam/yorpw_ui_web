import keys from "../ActionTypeKeys";

export default interface IGetSitesFailAction {
  readonly type: keys.GET_SITES_FAIL;
  readonly payload: {
    readonly error: Error;
  };
};
