import { Dispatch } from "redux";
import { getGroups as getGroupsFromApi } from "../../api/groupsApi";
import IGroup from "../../model/IGroup";
import IStoreState from "../../store/IStoreState";
import keys from "../ActionTypeKeys";
import IGetGroupsFailAction from "./IGetGroupsFailAction";
import IGetGroupsInProgressAction from "./IGetGroupsInProgressAction";
import IGetGroupsSuccessAction from "./IGetGroupsSuccessAction";

export function getGroups(): (
  dispatch: Dispatch<IStoreState>
) => Promise<void> {
  return async (dispatch: Dispatch<IStoreState>) => {
    // Signal work in progress.
    dispatch(getGroupsInProgress());

    try {
      const groups: IGroup[] = await getGroupsFromApi();

      dispatch(getGroupsSuccess(groups));
    } catch (err) {
      dispatch(getGroupsFail(err));
    }
  };
}

function getGroupsInProgress(): IGetGroupsInProgressAction {
  return {
    type: keys.GET_GROUPS_INPROGRESS
  };
}

function getGroupsSuccess(groups: IGroup[]): IGetGroupsSuccessAction {
  return {
    payload: {
      groups
    },
    type: keys.GET_GROUPS_SUCCESS
  };
}

function getGroupsFail(error: Error): IGetGroupsFailAction {
  return {
    payload: {
      error
    },
    type: keys.GET_GROUPS_FAIL
  };
}
