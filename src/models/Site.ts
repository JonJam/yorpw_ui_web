import { IsEmail, IsNotEmpty, IsUrl, MaxLength } from "class-validator";
import strings from "../strings";
import ISite from "./Site";

export default class Site implements ISite {
  public readonly id: string;

  @IsNotEmpty({
    message: strings.site.nameIsNotEmptyMessage
  })
  @MaxLength(100, {
    message: strings.site.nameMaxLengthMessage
  })
  public readonly name: string;

  @IsNotEmpty({
    message: strings.site.urlIsNotEmptyMessage
  })
  @IsUrl(undefined, {
    message: strings.site.urlIsUrlMessage
  })
  @MaxLength(1000, {
    message: strings.site.urlMaxLengthMessage
  })
  public readonly url: string;

  @IsNotEmpty({
    message: strings.site.userNameIsNotEmptyMessage
  })
  @IsEmail(undefined, {
    message: strings.site.userNameIsEmailMessage
  })
  @MaxLength(100, {
    message: strings.site.userNameMaxLengthMessage
  })
  public readonly userName: string;

  @IsNotEmpty({
    message: strings.site.passwordIsNotEmptyMessage
  })
  @MaxLength(100, {
    message: strings.site.passwordMaxLengthMessage
  })
  public readonly password: string;

  constructor(site: ISite) {
    this.id = site.id;
    this.name = site.name;
    this.url = site.url;
    this.userName = site.userName;
    this.password = site.password;
  }
}
