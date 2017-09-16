import keys from "../ActionTypeKeys";

export default interface IGetGroupsFail {
  readonly type: keys.GET_SITES_FAIL;
  readonly payload: {
    readonly error: Error;
  };
};
