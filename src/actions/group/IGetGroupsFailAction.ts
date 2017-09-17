import keys from "../ActionTypeKeys";

export default interface IGetGroupsFailAction {
  readonly type: keys.GET_GROUPS_FAIL;
  readonly payload: {
    readonly error: Error;
  };
};
