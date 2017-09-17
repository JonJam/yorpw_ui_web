import ISite from "./ISite";

// TODO Think of a better name for this.
export default interface IGroupViewModel {
  readonly id: string;
  readonly name: string;
  readonly sites: ReadonlyArray<ISite>;
};
