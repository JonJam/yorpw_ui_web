import { Dispatch } from "redux";
import "whatwg-fetch";
import IStoreState from "../../store/IStoreState";
import keys from "../ActionTypeKeys";
import ITestCallAction from "./ITestCallAction";
import ITestCallAsyncSuccessAction from "./ITestCallAsyncSuccessAction";

export function testCall(message: string): ITestCallAction {
  return {
    payload: {
      msg: message
    },
    type: keys.TEST_CALL
  };
}

export function testCallAsync(): (
  dispatch: Dispatch<IStoreState>
) => Promise<void> {
  return async (dispatch: Dispatch<IStoreState>) => {
    await fetch("https://api.github.com/users");

    dispatch(testCallSuccess("MESSAGE FROM ASYNC"));
  };
}

function testCallSuccess(message: string): ITestCallAsyncSuccessAction {
  return {
    payload: {
      msg: message
    },
    type: keys.TEST_CALL_ASYNC_SUCCESS
  };
}
