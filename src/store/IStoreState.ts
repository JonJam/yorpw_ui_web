import IGroup from "../models/IGroup";
import ISite from "../models/ISite";

export default interface IStoreState {
  groups: IGroup[];
  sites: ISite[];
  pendingActions: number;
  isAuthenticated: boolean;
};
