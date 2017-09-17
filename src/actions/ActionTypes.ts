import {
  IGetGroupsFailAction,
  IGetGroupsInProgressAction,
  IGetGroupsSuccessAction
} from "./group/get";
import {
  IUpdateGroupFailAction,
  IUpdateGroupInProgressAction,
  IUpdateGroupSuccessAction
} from "./group/update";
import {
  IGetSitesFailAction,
  IGetSitesInProgressAction,
  IGetSitesSuccessAction
} from "./site/get";
import {
  IUpdateSiteFailAction,
  IUpdateSiteInProgressAction,
  IUpdateSiteSuccessAction
} from "./site/update";
import {
  IDeleteSiteFailAction,
  IDeleteSiteInProgressAction,
  IDeleteSiteSuccessAction
} from "./site/delete";
import {
  IAddSiteFailAction,
  IAddSiteInProgressAction,
  IAddSiteSuccessAction
} from "./site/add";
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
