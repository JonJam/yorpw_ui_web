import keys from "../ActionTypeKeys";

export default interface IDeleteSiteSuccessAction {
  readonly type: keys.DELETE_SITE_SUCCESS;
  readonly payload: {
    readonly siteId: string;
  };
};
