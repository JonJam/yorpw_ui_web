import IStoreState from "../store/IStoreState";

const defaultState: IStoreState = {
  groups: {
    isFetching: false,
    items: [],
    lastUpdated: null
  },
  isAuthenticated: false,
  pendingActions: 0,
  searchTerm: "",
  sites: {
    isFetching: false,
    items: [],
    lastUpdated: null
  }
};

export default defaultState;
