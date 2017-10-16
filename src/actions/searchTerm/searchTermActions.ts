import keys from "../ActionTypeKeys";
import IUpdateSearchTermAction from "./IUpdateSearchTermAction";

export function updateSearchTerm(searchTerm: string): IUpdateSearchTermAction {
  return {
    payload: {
      searchTerm
    },
    type: keys.UPDATE_SEARCHTERM
  };
}
