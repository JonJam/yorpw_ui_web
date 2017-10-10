import ActionTypeKeys from "../actions/ActionTypeKeys";
import ActionTypes from "../actions/ActionTypes";
import { IAddGroupSuccessAction } from "../actions/group/add";
import { IGetGroupsSuccessAction } from "../actions/group/get";
import { IUpdateGroupSuccessAction } from "../actions/group/update";
import IGroup from "../models/IGroup";
import initialState from "./initialState";

export default function groupsReducer(
  state: ReadonlyArray<IGroup> = initialState.groups,
  action: ActionTypes
) {
  switch (action.type) {
    case ActionTypeKeys.GET_GROUPS_SUCCESS:
      return onGetGroupsSuccess(action);
    case ActionTypeKeys.UPDATE_GROUP_SUCCESS:
      return onUpdateGroupSuccess(action, state);
    case ActionTypeKeys.ADD_GROUP_SUCCESS:
      return onAddGroupSuccess(action, state);
    default:
      return state;
  }
}

function onGetGroupsSuccess(action: IGetGroupsSuccessAction) {
  return action.payload.groups;
}

function onUpdateGroupSuccess(
  action: IUpdateGroupSuccessAction,
  currentState: ReadonlyArray<IGroup>
) {
  return [
    ...currentState.filter(group => group.id !== action.payload.group.id),
    { ...action.payload.group }
  ];
}

function onAddGroupSuccess(
  action: IAddGroupSuccessAction,
  currentState: ReadonlyArray<IGroup>
) {
  return [...currentState, { ...action.payload.group }];
}
