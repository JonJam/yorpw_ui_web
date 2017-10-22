import ActionTypeKeys from "../actions/ActionTypeKeys";
import ActionTypes from "../actions/ActionTypes";
import { IAddGroupSuccessAction } from "../actions/group/add";
import { IDeleteGroupSuccessAction } from "../actions/group/delete";
import { IGetGroupsSuccessAction } from "../actions/group/get";
import { IUpdateGroupSuccessAction } from "../actions/group/update";
import { IGroupsStoreState } from "../store/IStoreState";
import initialState from "./initialState";

export default function groupsReducer(
  state: IGroupsStoreState = initialState.groups,
  action: ActionTypes
) {
  switch (action.type) {
    case ActionTypeKeys.GET_GROUPS_SUCCESS:
      return onGetGroupsSuccess(action);
    case ActionTypeKeys.UPDATE_GROUP_SUCCESS:
      return onUpdateGroupSuccess(action, state);
    case ActionTypeKeys.ADD_GROUP_SUCCESS:
      return onAddGroupSuccess(action, state);
    case ActionTypeKeys.DELETE_GROUP_SUCCESS:
      return onDeleteGroupSuccess(action, state);
    case ActionTypeKeys.GET_GROUPS_INPROGRESS:
      return onGetGroupsInProgress(state);
    default:
      return state;
  }
}

function onGetGroupsSuccess(action: IGetGroupsSuccessAction) {
  return {
    isFetching: false,
    items: action.payload.groups,
    lastUpdated: Date.now()
  };
}

function onUpdateGroupSuccess(
  action: IUpdateGroupSuccessAction,
  currentState: IGroupsStoreState
) {
  return {
    ...currentState,
    items: [
      ...currentState.items.filter(
        group => group.id !== action.payload.group.id
      ),
      { ...action.payload.group }
    ],
    lastUpdated: Date.now()
  };
}

function onAddGroupSuccess(
  action: IAddGroupSuccessAction,
  currentState: IGroupsStoreState
) {
  return {
    ...currentState,
    items: [...currentState.items, { ...action.payload.group }],
    lastUpdated: Date.now()
  };
}

function onDeleteGroupSuccess(
  action: IDeleteGroupSuccessAction,
  currentState: IGroupsStoreState
) {
  return {
    ...currentState,
    items: [
      ...currentState.items.filter(group => group.id !== action.payload.groupId)
    ],
    lastUpdated: Date.now()
  };
}

function onGetGroupsInProgress(currentState: IGroupsStoreState) {
  return {
    ...currentState,
    isFetching: true
  };
}
