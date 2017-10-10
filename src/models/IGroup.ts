export default interface IGroup {
  readonly id: string;
  readonly name: string;
  readonly siteIds: ReadonlyArray<string>;
};
