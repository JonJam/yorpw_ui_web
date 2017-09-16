import IGroup from "../models/IGroup";
import ISite from "../models/ISite";

export default interface IStoreState {
  readonly groups: ReadonlyArray<IGroup>;
  readonly sites: ReadonlyArray<ISite>;
  readonly pendingActions: number;
  readonly isAuthenticated: boolean;
};
