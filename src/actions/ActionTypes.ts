import IGetGroupsFailAction from "./group/IGetGroupsFailAction";
import IGetGroupsInProgressAction from "./group/IGetGroupsInProgressAction";
import IGetGroupsSuccessAction from "./group/IGetGroupsSuccessAction";
import IGetSitesFailAction from "./site/IGetSitesFailAction";
import IGetSitesInProgressAction from "./site/IGetSitesInProgressAction";
import IGetSitesSuccessAction from "./site/IGetSitesSuccessAction";
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
  | ISignOutAction;

export default ActionTypes;
