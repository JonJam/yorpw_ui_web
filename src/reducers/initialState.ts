import IStoreState from "../store/IStoreState";

const defaultState: IStoreState = {
  groups: [],
  isAuthenticated: false,
  pendingActions: 0,
  searchTerm: "",
  sites: {
    isFetching: false,
    items: []
  }
};

export default defaultState;
