import ActionTypeKeys from "../actions/ActionTypeKeys";
import ActionTypes from "../actions/ActionTypes";
import ITestCallAction from "../actions/example/ITestCallAction";
import ITestCallAsyncSuccessAction from "../actions/example/ITestCallAsyncSuccessAction";
import initialState from "./initialState";

export default function exampleReducer(
  state = initialState.msg,
  action: ActionTypes
) {
  switch (action.type) {
    case ActionTypeKeys.TEST_CALL:
      return onTestCall(action);
    case ActionTypeKeys.TEST_CALL_ASYNC_SUCCESS:
      return onTestCallAsyncSuccess(action);
    default:
      return state;
  }
}

function onTestCall(action: ITestCallAction) {
  return action.payload.msg;
}

function onTestCallAsyncSuccess(action: ITestCallAsyncSuccessAction) {
  return action.payload.msg;
}
