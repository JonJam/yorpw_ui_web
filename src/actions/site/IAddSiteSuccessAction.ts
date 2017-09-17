import keys from "../ActionTypeKeys";
import ISite from "../../models/ISite";

export default interface IAddSiteSuccessAction {
  readonly type: keys.ADD_SITE_SUCCESS;
  readonly payload: {
    readonly site: ISite;
  };
};
