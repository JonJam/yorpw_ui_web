import keys from "../ActionTypeKeys";

export default interface ITestCallAsyncSuccessAction {
  type: keys.TEST_CALL_ASYNC_SUCCESS;
  payload: {
    msg: string;
  };
};
