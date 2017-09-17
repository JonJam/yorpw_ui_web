import keys from "../../ActionTypeKeys";
import IGroup from "../../../models/IGroup";

export interface IGetGroupsFailAction {
  readonly type: keys.GET_GROUPS_FAIL;
  readonly payload: {
    readonly error: Error;
  };
}

export interface IGetGroupsInProgressAction {
  readonly type: keys.GET_GROUPS_INPROGRESS;
}

export interface IGetGroupsSuccessAction {
  readonly type: keys.GET_GROUPS_SUCCESS;
  readonly payload: {
    readonly groups: ReadonlyArray<IGroup>;
  };
}
