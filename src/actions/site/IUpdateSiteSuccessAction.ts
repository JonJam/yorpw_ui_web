import keys from "../ActionTypeKeys";
import ISite from "../../models/ISite";

export default interface IGetSitesSuccessAction {
  readonly type: keys.UPDATE_SITE_SUCCESS;
  readonly payload: {
    readonly site: ISite;
  };
};
