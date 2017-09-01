import IGroup from "../models/IGroup";
import IGroupViewModel from "../models/IGroupViewModel";
import ISite from "../models/ISite";

// TODO Refactor this to use reselect see http://redux.js.org/docs/recipes/ComputingDerivedData.html
function getGroupViewModels(
  groupsFromState: IGroup[],
  sitesFromState: ISite[]
): IGroupViewModel[] {
  const val = groupsFromState.map(groupFromState => {
    const { id, name } = groupFromState;
    const sites: ISite[] = [];

    groupFromState.sites.forEach(siteId => {
      const site = sitesFromState.find(s => s.id === siteId);

      if (site !== undefined) {
        sites.push({ ...site });
      }
    });

    const groupViewModel: IGroupViewModel = {
      id,
      name,
      sites
    };

    return groupViewModel;
  });

  return val;
}

export default getGroupViewModels;
