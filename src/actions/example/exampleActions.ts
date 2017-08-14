import keys from "../ActionTypeKeys";
import TestCallAction from "./TestCallAction";

export function testCall(message: string): TestCallAction {
  return {
    type: keys.TEST_CALL,
    payload: {
      msg: message
    }
  };
}
