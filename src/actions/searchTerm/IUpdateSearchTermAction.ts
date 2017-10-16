import keys from "../ActionTypeKeys";

export default interface IUpdateSearchTermAction {
  readonly type: keys.UPDATE_SEARCHTERM;
  readonly payload: {
    readonly searchTerm: string;
  };
};
