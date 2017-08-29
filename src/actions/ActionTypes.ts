import IGetGroupsFailAction from "./group/IGetGroupsFailAction";
import IGetGroupsInProgressAction from "./group/IGetGroupsInProgressAction";
import IGetGroupsSuccessAction from "./group/IGetGroupsSuccessAction";

type ActionTypes =
  | IGetGroupsFailAction
  | IGetGroupsInProgressAction
  | IGetGroupsSuccessAction;

export default ActionTypes;
