import keys from "../ActionTypeKeys";

export default interface IGetGroupsFailAction {
  type: keys.GET_GROUPS_FAIL;
  payload: {
    error: Error;
  };
};
