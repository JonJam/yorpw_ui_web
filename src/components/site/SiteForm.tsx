import * as React from "react";
import ISite from "../../models/ISite";
import IValidationErrors from "../../models/IValidationErrors";
import strings from "../../strings";
import { nameOf } from "../../utilities";
import Input from "../common/Input";
import PasswordInput from "./passwordInput/PasswordInput";

interface ISiteFormProps {
  readonly site: ISite;
  readonly showClearPassword: boolean;
  readonly validationErrors: IValidationErrors;
  handleTogglePasswordClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleSaveClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCancelClick: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SiteForm(props: ISiteFormProps) {
  const name = nameOf<ISite>("name");
  const url = nameOf<ISite>("url");
  const userName = nameOf<ISite>("userName");
  const password = nameOf<ISite>("password");

  return (
    // Disabling browser default feedback tooltips using novalidate
    <form noValidate={true}>
      <div className="form-row">
        <Input
          className="col-12"
          id={name}
          label={strings.siteForm.nameLabel}
          type="text"
          placeholder={strings.siteForm.namePlaceholder}
          value={props.site.name}
          handleInputChange={props.handleInputChange}
          validationErrors={props.validationErrors[name]}
        />
      </div>
      <div className="form-row">
        <Input
          className="col-12"
          id={url}
          label={strings.siteForm.urlLabel}
          type="url"
          placeholder={strings.siteForm.urlPlaceholder}
          value={props.site.url}
          handleInputChange={props.handleInputChange}
          validationErrors={props.validationErrors[url]}
        />
      </div>
      <div className="form-row">
        <Input
          className="col-sm-6"
          id={userName}
          label={strings.siteForm.emailAddressLabel}
          type="email"
          placeholder={strings.siteForm.emailAddressPlaceholder}
          value={props.site.userName}
          handleInputChange={props.handleInputChange}
          validationErrors={props.validationErrors[userName]}
        />
        <PasswordInput
          className="col-sm-6"
          id={password}
          label={strings.siteForm.passwordLabel}
          placeholder={strings.siteForm.passwordPlaceholder}
          value={props.site.password}
          showClear={props.showClearPassword}
          handleInputChange={props.handleInputChange}
          handleToggleClick={props.handleTogglePasswordClick}
          validationErrors={props.validationErrors[password]}
        />
      </div>
      <div className="form-row">
        <div className="col-12">
          <button
            type="button"
            className="btn btn-light"
            onClick={props.handleCancelClick}
          >
            {strings.siteForm.cancelButton}
          </button>
          <button
            type="submit"
            className="btn btn-primary ml-1"
            onClick={props.handleSaveClick}
          >
            {strings.siteForm.saveButton}
          </button>
        </div>
      </div>
    </form>
  );
}
