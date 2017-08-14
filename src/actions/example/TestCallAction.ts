import keys from "../ActionTypeKeys";

export default interface TestCallAction {
  type: keys.TEST_CALL;
  payload: {
    msg: string;
  };
};
