import keys from "../ActionTypeKeys";

export default interface IGetGroupsFail {
  type: keys.GET_GROUPS_FAIL;
  payload: {
    // TODO check this is right type for API Error or fetch 404.
    error: Error;
  };
};
