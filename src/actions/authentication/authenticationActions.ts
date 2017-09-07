import keys from "../ActionTypeKeys";
import ISignOutAction from "./ISignOutAction";
import ISignInAction from "./ISignInAction";
import { sitesPath } from "../../routes/paths";

import { History } from "history";

export function signIn(history: History): ISignInAction {
  history.push(sitesPath);

  return {
    type: keys.SIGN_IN
  };
}

export function signOut(): ISignOutAction {
  return {
    type: keys.SIGN_OUT
  };
}
