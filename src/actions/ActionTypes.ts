import IGetGroupsFailAction from "./group/IGetGroupsFailAction";
import IGetGroupsInProgressAction from "./group/IGetGroupsInProgressAction";
import IGetGroupsSuccessAction from "./group/IGetGroupsSuccessAction";
import IUpdateGroupFailAction from "./group/IUpdateGroupFailAction";
import IUpdateGroupInProgressAction from "./group/IUpdateGroupInProgressAction";
import IUpdateGroupSuccessAction from "./group/IUpdateGroupSuccessAction";
import IGetSitesFailAction from "./site/IGetSitesFailAction";
import IGetSitesInProgressAction from "./site/IGetSitesInProgressAction";
import IGetSitesSuccessAction from "./site/IGetSitesSuccessAction";
import IUpdateSiteFailAction from "./site/IUpdateSiteFailAction";
import IUpdateSiteInProgressAction from "./site/IUpdateSiteInProgressAction";
import IUpdateSiteSuccessAction from "./site/IUpdateSiteSuccessAction";
import IDeleteSiteFailAction from "./site/IDeleteSiteFailAction";
import IDeleteSiteInProgressAction from "./site/IDeleteSiteInProgressAction";
import IDeleteSiteSuccessAction from "./site/IDeleteSiteSuccessAction";
import IAddSiteFailAction from "./site/IAddSiteFailAction";
import IAddSiteInProgressAction from "./site/IAddSiteInProgressAction";
import IAddSiteSuccessAction from "./site/IAddSiteSuccessAction";
import ISignInAction from "./authentication/ISignInAction";
import ISignOutAction from "./authentication/ISignOutAction";

type ActionTypes =
  | IGetGroupsFailAction
  | IGetGroupsInProgressAction
  | IGetGroupsSuccessAction
  | IUpdateGroupFailAction
  | IUpdateGroupInProgressAction
  | IUpdateGroupSuccessAction
  | IGetSitesFailAction
  | IGetSitesInProgressAction
  | IGetSitesSuccessAction
  | ISignInAction
  | ISignOutAction
  | IUpdateSiteSuccessAction
  | IUpdateSiteFailAction
  | IUpdateSiteInProgressAction
  | IDeleteSiteFailAction
  | IDeleteSiteInProgressAction
  | IDeleteSiteSuccessAction
  | IAddSiteFailAction
  | IAddSiteInProgressAction
  | IAddSiteSuccessAction;

export default ActionTypes;
