import ActionTypes from "../actions/ActionTypes";
import ActionTypeKeys from "../actions/ActionTypeKeys";
import TestCallAction from "../actions/example/TestCallAction";

import initialState from "./initialState";

export default function exampleReducer(
  state = initialState.msg,
  action: ActionTypes
) {
  switch (action.type) {
    case ActionTypeKeys.TEST_CALL:
      return onTestCall(action);
    default:
      return state;
  }
}

function onTestCall(action: TestCallAction) {
  return action.payload.msg;
}
