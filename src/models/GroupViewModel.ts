import { IsNotEmpty, MaxLength } from "class-validator";
import strings from "../strings";
import IGroup from "./IGroup";

export default class GroupViewModel implements IGroup {
  public readonly id: string;

  @IsNotEmpty({
    message: strings.groupViewModel.nameIsNotEmptyMessage
  })
  @MaxLength(100, {
    message: strings.groupViewModel.nameMaxLengthMessage
  })
  public readonly name: string;

  public readonly siteIds: ReadonlyArray<string>;

  constructor(
    group: IGroup = {
      id: "",
      name: "",
      siteIds: []
    }
  ) {
    this.id = group.id;
    this.name = group.name;
    this.siteIds = group.siteIds;
  }
}
