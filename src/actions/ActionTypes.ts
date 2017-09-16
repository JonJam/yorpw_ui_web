import IGetGroupsFailAction from "./group/IGetGroupsFailAction";
import IGetGroupsInProgressAction from "./group/IGetGroupsInProgressAction";
import IGetGroupsSuccessAction from "./group/IGetGroupsSuccessAction";
import IGetSitesFailAction from "./site/IGetSitesFailAction";
import IGetSitesInProgressAction from "./site/IGetSitesInProgressAction";
import IGetSitesSuccessAction from "./site/IGetSitesSuccessAction";
import IUpdateSiteFailAction from "./site/IUpdateSiteFailAction";
import IUpdateSiteInProgressAction from "./site/IUpdateSiteInProgressAction";
import IUpdateSiteSuccessAction from "./site/IUpdateSiteSuccessAction";
import ISignInAction from "./authentication/ISignInAction";
import ISignOutAction from "./authentication/ISignOutAction";

type ActionTypes =
  | IGetGroupsFailAction
  | IGetGroupsInProgressAction
  | IGetGroupsSuccessAction
  | IGetSitesFailAction
  | IGetSitesInProgressAction
  | IGetSitesSuccessAction
  | ISignInAction
  | ISignOutAction
  | IUpdateSiteSuccessAction
  | IUpdateSiteFailAction
  | IUpdateSiteInProgressAction;

export default ActionTypes;
