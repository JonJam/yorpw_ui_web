import keys from "../ActionTypeKeys";
import IGroup from "../../models/IGroup";

export default interface IGetGroupsSuccessAction {
  type: keys.GET_GROUPS_SUCCESS;
  payload: {
    groups: IGroup[];
  };
};
