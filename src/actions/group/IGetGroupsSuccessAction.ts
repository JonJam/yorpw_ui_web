import keys from "../ActionTypeKeys";
import IGroup from "../../models/IGroup";

export default interface IGetGroupsSuccessAction {
  readonly type: keys.GET_GROUPS_SUCCESS;
  readonly payload: {
    readonly groups: ReadonlyArray<IGroup>;
  };
};
