import { History } from "history";
import { homePath, sitesPath } from "../../routes/paths";
import keys from "../ActionTypeKeys";
import ISignInAction from "./ISignInAction";
import ISignOutAction from "./ISignOutAction";

export function signIn(history: History): ISignInAction {
  history.push(sitesPath);

  return {
    type: keys.SIGN_IN
  };
}

export function signOut(history: History): ISignOutAction {
  history.push(homePath);

  return {
    type: keys.SIGN_OUT
  };
}
