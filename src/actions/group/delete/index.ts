import keys from "../../ActionTypeKeys";

export interface IDeleteGroupFailAction {
  readonly type: keys.DELETE_GROUP_FAIL;
  readonly payload: {
    readonly error: Error;
  };
}

export interface IDeleteGroupInProgressAction {
  readonly type: keys.DELETE_GROUP_INPROGRESS;
}

export interface IDeleteGroupSuccessAction {
  readonly type: keys.DELETE_GROUP_SUCCESS;
  readonly payload: {
    readonly groupId: string;
  };
}
