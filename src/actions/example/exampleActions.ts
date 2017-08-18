import keys from "../ActionTypeKeys";
import ITestCallAction from "./ITestCallAction";

export function testCall(message: string): ITestCallAction {
  return {
    payload: {
      msg: message
    },
    type: keys.TEST_CALL
  };
}
