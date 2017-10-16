import { IsEmail, IsNotEmpty, IsUrl, MaxLength } from "class-validator";
import strings from "../strings";
import ISite from "./ISite";
import zxcvbn from "zxcvbn";

interface ISiteViewModel extends ISite {
  groupId: string;
}

export default class SiteViewModel implements ISiteViewModel {
  public readonly id: string;

  @IsNotEmpty({
    message: strings.siteViewModel.nameIsNotEmptyMessage
  })
  @MaxLength(100, {
    message: strings.siteViewModel.nameMaxLengthMessage
  })
  public readonly name: string;

  @IsNotEmpty({
    message: strings.siteViewModel.urlIsNotEmptyMessage
  })
  @IsUrl(undefined, {
    message: strings.siteViewModel.urlIsUrlMessage
  })
  @MaxLength(1000, {
    message: strings.siteViewModel.urlMaxLengthMessage
  })
  public readonly url: string;

  @IsNotEmpty({
    message: strings.siteViewModel.userNameIsNotEmptyMessage
  })
  @IsEmail(undefined, {
    message: strings.siteViewModel.userNameIsEmailMessage
  })
  @MaxLength(100, {
    message: strings.siteViewModel.userNameMaxLengthMessage
  })
  public readonly userName: string;

  @IsNotEmpty({
    message: strings.siteViewModel.passwordIsNotEmptyMessage
  })
  @MaxLength(100, {
    message: strings.siteViewModel.passwordMaxLengthMessage
  })
  public readonly password: string;

  @IsNotEmpty({
    message: strings.siteViewModel.groupIdIsNotEmptyMessage
  })
  public readonly groupId: string;

  public readonly passwordScore: number;

  constructor(
    site: ISiteViewModel = {
      groupId: "",
      id: "",
      name: "",
      password: "",
      url: "",
      userName: ""
    }
  ) {
    this.id = site.id;
    this.name = site.name;
    this.url = site.url;
    this.userName = site.userName;
    this.password = site.password;
    this.groupId = site.groupId;

    // zxcvbn().score is a number in range 0 (too guessable) - 4 (very unguessable).
    this.passwordScore = zxcvbn(site.password).score * 25;
  }
}
