import * as React from "react";
import ISite from "../../models/ISite";
import strings from "../../strings";
import Input from "./Input";
import PasswordInput from "./PasswordInput";

interface ISiteFormProps {
  site: ISite;
  showClearPassword: boolean;
  handleTogglePasswordClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleSaveClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCancelClick: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// TODO validation
export default function SiteForm(props: ISiteFormProps) {
  return (
    <form>
      <div className="form-row">
        <Input
          className="col-12"
          id="name"
          label={strings.siteForm.nameLabel}
          type="text"
          placeholder={strings.siteForm.namePlaceholder}
          value={props.site.name}
          handleInputChange={props.handleInputChange}
        />
      </div>
      <div className="form-row">
        <Input
          className="col-12"
          id="url"
          label={strings.siteForm.urlLabel}
          type="url"
          placeholder={strings.siteForm.urlPlaceholder}
          value={props.site.url}
          handleInputChange={props.handleInputChange}
        />
      </div>
      <div className="form-row">
        <Input
          className="col-sm-6"
          id="userName"
          label={strings.siteForm.emailAddressLabel}
          type="email"
          placeholder={strings.siteForm.emailAddressPlaceholder}
          value={props.site.userName}
          handleInputChange={props.handleInputChange}
        />
        <PasswordInput
          className="col-sm-6"
          id="password"
          label={strings.siteForm.passwordLabel}
          placeholder={strings.siteForm.passwordPlaceholder}
          value={props.site.password}
          showClear={props.showClearPassword}
          handleInputChange={props.handleInputChange}
          handleToggleClick={props.handleTogglePasswordClick}
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
