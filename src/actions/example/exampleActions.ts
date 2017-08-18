import { Dispatch } from "redux";
import keys from "../ActionTypeKeys";
import ITestCallAction from "./ITestCallAction";
import ITestCallAsyncSuccessAction from "./ITestCallAsyncSuccessAction";
import IStoreState from "../../store/IStoreState";
import "whatwg-fetch";

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
    const response = await fetch("https://www.google.co.uk");
    const json = await response.json();

    console.log(json);

    dispatch(testCallSuccess("GOT STUFF"));
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
