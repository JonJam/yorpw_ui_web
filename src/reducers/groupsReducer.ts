import ActionTypeKeys from "../actions/ActionTypeKeys";
import ActionTypes from "../actions/ActionTypes";
import IGetGroupsSuccessAction from "../actions/group/IGetGroupsSuccessAction";
import initialState from "./initialState";

export default function groupsReducer(
  state = initialState.groups,
  action: ActionTypes
) {
  switch (action.type) {
    case ActionTypeKeys.GET_GROUPS_SUCCESS:
      return onGetGroupsSuccess(action);
    default:
      return state;
  }
}

function onGetGroupsSuccess(action: IGetGroupsSuccessAction) {
  return action.payload.groups;
}
