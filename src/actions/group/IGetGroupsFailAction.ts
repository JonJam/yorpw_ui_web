import keys from "../ActionTypeKeys";

export default interface IGetGroupsFail {
  type: keys.GET_GROUPS_FAIL;
  payload: {
    error: Error;
  };
};
