import keys from "../ActionTypeKeys";
import IGroup from "../../models/IGroup";

export default interface IUpdateGroupSuccessAction {
  readonly type: keys.UPDATE_GROUP_SUCCESS;
  readonly payload: {
    readonly group: IGroup;
  };
};
