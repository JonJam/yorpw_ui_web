import ISite from "./ISite";

// TODO Think of a better name for this.
export default interface IGroupViewModel {
  id: string;
  name: string;
  sites: ISite[];
};
