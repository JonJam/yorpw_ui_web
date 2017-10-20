import { createSelector } from "reselect";
import ISelectOption from "../components/common/select/ISelectOption";
import IGroup from "../models/IGroup";
import IGroupWithSites from "../models/IGroupWithSites";
import ISite from "../models/ISite";
import IStoreState from "../store/IStoreState";

// Derived data selectors = using reselect
const pendingActionsSelector = (state: IStoreState) => state.pendingActions;
const groupsSelector = (state: IStoreState) => state.groups;
const sitesSelector = (state: IStoreState) => state.sites;
const searchTermSelector = (state: IStoreState) => state.searchTerm;
const getGroupsWithSitesSelector = createSelector(
  [groupsSelector, sitesSelector],
  (
    groupsFromState: ReadonlyArray<IGroup>,
    sitesFromState: ReadonlyArray<ISite>
  ) => {
    const sortedGroups = [...groupsFromState].sort(groupCompare);

    return sortedGroups.map(group => {
      const { id, name } = group;
      const sites: ISite[] = [];

      group.siteIds.forEach(siteId => {
        const site = sitesFromState.find(s => s.id === siteId);

        if (site !== undefined) {
          sites.push({ ...site });
        }
      });

      sites.sort(siteCompare);

      const groupWithSites: IGroupWithSites = {
        id,
        name,
        siteIds: group.siteIds,
        sites
      };

      return groupWithSites;
    }) as ReadonlyArray<IGroupWithSites>;
  }
);

export const isBusy = createSelector(
  [pendingActionsSelector],
  pendingActions => pendingActions > 0
);

export const filterGroupsAndSites = createSelector(
  [getGroupsWithSitesSelector, searchTermSelector],
  (groups, searchTerm) => {
    if (searchTerm.trim() !== "") {
      return groups
        .filter(group => {
          return group.sites.some(site => site.name.includes(searchTerm));
        })
        .map(group => {
          return {
            ...group,
            sites: group.sites.filter(site => site.name.includes(searchTerm))
          };
        });
    } else {
      return groups;
    }
  }
);

export const getGroupOptions = createSelector(
  [groupsSelector],
  groupsFromState => {
    const sortedGroups = [...groupsFromState].sort(groupCompare);

    return sortedGroups.map(g => {
      const option: ISelectOption = {
        display: g.name,
        value: g.id
      };

      return option;
    }) as ReadonlyArray<ISelectOption>;
  }
);

// Non-derived data selectors.
export function getSiteById(sites: ReadonlyArray<ISite>, siteId: string) {
  return sites.find(s => s.id === siteId);
}

export function getGroupForSite(
  groupsFromState: ReadonlyArray<IGroup>,
  siteId: string
) {
  return groupsFromState.find(g => g.siteIds.indexOf(siteId) !== -1);
}

export function getGroupById(groups: ReadonlyArray<IGroup>, groupId: string) {
  return groups.find(g => g.id === groupId);
}

function groupCompare(group1: IGroup, group2: IGroup) {
  if (group1.name < group2.name) {
    return -1;
  }

  if (group1.name > group2.name) {
    return 1;
  }

  return 0;
}

function siteCompare(site1: ISite, site2: ISite) {
  if (site1.name < site2.name) {
    return -1;
  }

  if (site1.name > site2.name) {
    return 1;
  }

  return 0;
}
