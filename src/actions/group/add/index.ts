import keys from "../../ActionTypeKeys";
import IGroup from "../../../models/IGroup";

export interface IAddGroupFailAction {
  readonly type: keys.ADD_GROUP_FAIL;
  readonly payload: {
    readonly error: Error;
  };
}

export interface IAddGroupInProgressAction {
  readonly type: keys.ADD_GROUP_INPROGRESS;
}

export interface IAddGroupSuccessAction {
  readonly type: keys.ADD_GROUP_SUCCESS;
  readonly payload: {
    readonly group: IGroup;
  };
}
