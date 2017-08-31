import keys from "../ActionTypeKeys";
import ISite from "../../model/ISite";

export default interface IGetSitesSuccessAction {
  type: keys.GET_SITES_SUCCESS;
  payload: {
    sites: ISite[];
  };
};
