import { Dispatch } from "redux";
import {
  addGroup as addGroupFromApi,
  deleteGroup as deleteGroupFromApi,
  getGroups as getGroupsFromApi,
  updateGroup as updateGroupFromApi
} from "../../api/groupsApi";
import IGroup from "../../models/IGroup";
import IStoreState from "../../store/IStoreState";
import keys from "../ActionTypeKeys";
import { deleteSite } from "../site/siteActions";
import {
  IAddGroupFailAction,
  IAddGroupInProgressAction,
  IAddGroupSuccessAction
} from "./add";
import {
  IDeleteGroupFailAction,
  IDeleteGroupInProgressAction,
  IDeleteGroupSuccessAction
} from "./delete";
import {
  IGetGroupsFailAction,
  IGetGroupsInProgressAction,
  IGetGroupsSuccessAction
} from "./get";
import {
  IUpdateGroupFailAction,
  IUpdateGroupInProgressAction,
  IUpdateGroupSuccessAction
} from "./update";

export function getGroupsIfNeeded(): (
  dispatch: Dispatch<IStoreState>,
  getState: () => IStoreState
) => Promise<void> {
  return async (
    dispatch: Dispatch<IStoreState>,
    getState: () => IStoreState
  ) => {
    if (shouldGetGroups(getState())) {
      await dispatch(getGroups());
    }
  };
}

export function addGroup(
  group: IGroup
): (dispatch: Dispatch<IStoreState>) => Promise<void> {
  return async (dispatch: Dispatch<IStoreState>) => {
    // Signal work in progress.
    dispatch(addGroupInProgress());

    try {
      const addedGroup = await addGroupFromApi(group);

      dispatch(addGroupSuccess(addedGroup));
    } catch (err) {
      dispatch(addGroupFail(err));
    }
  };
}

export function updateGroup(
  group: IGroup
): (dispatch: Dispatch<IStoreState>) => Promise<void> {
  return async (dispatch: Dispatch<IStoreState>) => {
    // Signal work in progress.
    dispatch(updateGroupInProgress());

    try {
      const updatedGroup: IGroup = await updateGroupFromApi(group);

      dispatch(updateGroupSuccess(updatedGroup));
    } catch (err) {
      dispatch(updateGroupFail(err));
    }
  };
}

export function deleteGroup(
  group: IGroup
): (dispatch: Dispatch<IStoreState>) => Promise<void> {
  return async (dispatch: Dispatch<IStoreState>) => {
    // Signal work in progress.
    dispatch(deleteGroupInProgress());

    try {
      // Delete all sites within group.
      const deleteSitePromises = group.siteIds.map(siteId => {
        return dispatch(deleteSite(siteId));
      });

      await Promise.all(deleteSitePromises);

      await deleteGroupFromApi(group.id);

      dispatch(deleteGroupSuccess(group.id));
    } catch (err) {
      dispatch(deleteGroupFail(err));
    }
  };
}

function shouldGetGroups(state: IStoreState) {
  const groupsState = state.sites;
  if (groupsState.lastUpdated === null) {
    return true;
  } else if (groupsState.isFetching) {
    return false;
  } else {
    return false;
  }
}

function getGroups(): (dispatch: Dispatch<IStoreState>) => Promise<void> {
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

function addGroupInProgress(): IAddGroupInProgressAction {
  return {
    type: keys.ADD_GROUP_INPROGRESS
  };
}

function addGroupSuccess(group: IGroup): IAddGroupSuccessAction {
  return {
    payload: {
      group
    },
    type: keys.ADD_GROUP_SUCCESS
  };
}

function addGroupFail(error: Error): IAddGroupFailAction {
  return {
    payload: {
      error
    },
    type: keys.ADD_GROUP_FAIL
  };
}

function updateGroupInProgress(): IUpdateGroupInProgressAction {
  return {
    type: keys.UPDATE_GROUP_INPROGRESS
  };
}

function updateGroupSuccess(group: IGroup): IUpdateGroupSuccessAction {
  return {
    payload: {
      group
    },
    type: keys.UPDATE_GROUP_SUCCESS
  };
}

function updateGroupFail(error: Error): IUpdateGroupFailAction {
  return {
    payload: {
      error
    },
    type: keys.UPDATE_GROUP_FAIL
  };
}

function deleteGroupInProgress(): IDeleteGroupInProgressAction {
  return {
    type: keys.DELETE_GROUP_INPROGRESS
  };
}

function deleteGroupSuccess(groupId: string): IDeleteGroupSuccessAction {
  return {
    payload: {
      groupId
    },
    type: keys.DELETE_GROUP_SUCCESS
  };
}

function deleteGroupFail(error: Error): IDeleteGroupFailAction {
  return {
    payload: {
      error
    },
    type: keys.DELETE_GROUP_FAIL
  };
}
