import IGroup from "../models/IGroup";
import ISite from "../models/ISite";

export default interface IStoreState {
  readonly groups: ReadonlyArray<IGroup>;
  readonly sites: ISitesStoreState;
  readonly pendingActions: number;
  readonly isAuthenticated: boolean;
  readonly searchTerm: string;
};

export interface ISitesStoreState {
  isFetching: boolean;
  items: ReadonlyArray<ISite>;
  lastUpdated: Date | null;
}
