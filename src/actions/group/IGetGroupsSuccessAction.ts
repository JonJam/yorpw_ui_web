import keys from "../ActionTypeKeys";
import IGroup from "../../model/IGroup";

export default interface IGetGroupsSuccessAction {
  type: keys.GET_GROUPS_SUCCESS;
  payload: {
    groups: IGroup[];
  };
};
