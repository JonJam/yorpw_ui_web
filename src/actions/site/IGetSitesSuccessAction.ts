import keys from "../ActionTypeKeys";
import ISite from "../../models/ISite";

export default interface IGetSitesSuccessAction {
  readonly type: keys.GET_SITES_SUCCESS;
  readonly payload: {
    readonly sites: ReadonlyArray<ISite>;
  };
};
