import keys from "../ActionTypeKeys";

export default interface ITestCallAction {
  type: keys.TEST_CALL;
  payload: {
    msg: string;
  };
};
