import ISite from "./ISite";
import IGroup from "./IGroup";

export default interface IGroupWithSites extends IGroup {
  readonly sites: ReadonlyArray<ISite>;
};
