import ISelectOption from "../components/common/select/ISelectOption";
import IGroup from "../models/IGroup";
import IGroupWithSites from "../models/IGroupWithSites";
import ISite from "../models/ISite";

// TODO Refactor these to use reselect see http://redux.js.org/docs/recipes/ComputingDerivedData.html

export function getSiteById(sites: ReadonlyArray<ISite>, siteId: string) {
  return sites.find(s => s.id === siteId);
}

export function isBusy(pendingActions: number) {
  return pendingActions > 0;
}

export function getGroupsWithSites(
  groupsFromState: ReadonlyArray<IGroup>,
  sitesFromState: ReadonlyArray<ISite>
): ReadonlyArray<IGroupWithSites> {
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
  });
}

export function getGroupOptions(
  groupsFromState: ReadonlyArray<IGroup>
): ReadonlyArray<ISelectOption> {
  const sortedGroups = [...groupsFromState].sort(groupCompare);

  return sortedGroups.map(g => {
    const option: ISelectOption = {
      display: g.name,
      value: g.id
    };

    return option;
  });
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
