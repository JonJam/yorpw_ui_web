import keys from "../ActionTypeKeys";

export default interface IUpdateGroupFailAction {
  readonly type: keys.UPDATE_GROUP_FAIL;
  readonly payload: {
    readonly error: Error;
  };
};
