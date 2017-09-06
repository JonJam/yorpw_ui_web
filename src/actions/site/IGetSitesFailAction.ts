import keys from "../ActionTypeKeys";

export default interface IGetGroupsFail {
  type: keys.GET_SITES_FAIL;
  payload: {
    error: Error;
  };
};
