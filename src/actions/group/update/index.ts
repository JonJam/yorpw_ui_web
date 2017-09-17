import keys from "../../ActionTypeKeys";
import IGroup from "../../../models/IGroup";

export interface IUpdateGroupFailAction {
  readonly type: keys.UPDATE_GROUP_FAIL;
  readonly payload: {
    readonly error: Error;
  };
}

export interface IUpdateGroupInProgressAction {
  readonly type: keys.UPDATE_GROUP_INPROGRESS;
}

export interface IUpdateGroupSuccessAction {
  readonly type: keys.UPDATE_GROUP_SUCCESS;
  readonly payload: {
    readonly group: IGroup;
  };
}
