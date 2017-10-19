import * as React from "react";
import IValidationErrors from "../../models/IValidationErrors";
import SiteViewModel from "../../models/SiteViewModel";
import strings from "../../strings";
import { nameOf } from "../../utilities";
import Input from "../common/Input";
import PasswordInput from "../common/passwordInput/PasswordInput";
import ISelectOption from "../common/select/ISelectOption";
import Select from "../common/select/Select";

interface ISiteFormProps {
  readonly site: SiteViewModel;
  readonly groupOptions: ReadonlyArray<ISelectOption>;
  readonly isNewSite: boolean;
  readonly showClearPassword: boolean;
  readonly validationErrors: IValidationErrors;
  readonly actionInProgress: boolean;
  handleTogglePasswordClick: () => void;
  handleSaveClick: () => void;
  handleCancelClick: () => void;
  handleDeleteClick: () => void;
  handleValueChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function SiteForm(props: ISiteFormProps) {
  const name = nameOf<SiteViewModel>("name");
  const url = nameOf<SiteViewModel>("url");
  const userName = nameOf<SiteViewModel>("userName");
  const password = nameOf<SiteViewModel>("password");
  const groupId = nameOf<SiteViewModel>("groupId");

  return (
    // Disabling browser default feedback tooltips using novalidate
    <form noValidate={true}>
      <div className="form-row">
        <Select
          className="col-12"
          id={groupId}
          value={props.site.groupId}
          label={strings.siteForm.groupIdLabel}
          options={props.groupOptions}
          handleChange={props.handleValueChange}
          validationErrors={props.validationErrors[groupId]}
          includeEmptyOption={true}
        />
      </div>

      <div className="form-row">
        <Input
          className="col-6"
          id={name}
          label={strings.siteForm.nameLabel}
          type="text"
          placeholder={strings.siteForm.namePlaceholder}
          value={props.site.name}
          handleChange={props.handleValueChange}
          validationErrors={props.validationErrors[name]}
        />
        <Input
          className="col-6"
          id={url}
          label={strings.siteForm.urlLabel}
          type="url"
          placeholder={strings.siteForm.urlPlaceholder}
          value={props.site.url}
          handleChange={props.handleValueChange}
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
          handleChange={props.handleValueChange}
          validationErrors={props.validationErrors[userName]}
        />
        <PasswordInput
          className="col-sm-6"
          id={password}
          label={strings.siteForm.passwordLabel}
          placeholder={strings.siteForm.passwordPlaceholder}
          value={props.site.password}
          showClear={props.showClearPassword}
          handleInputChange={props.handleValueChange}
          handleToggleClick={props.handleTogglePasswordClick}
          validationErrors={props.validationErrors[password]}
        />
      </div>
      <div className="form-row">
        <div className="col-11">
          <button
            type="button"
            className="btn btn-light"
            onClick={props.handleCancelClick}
          >
            {strings.siteForm.cancelButton}
          </button>
          <button
            disabled={props.actionInProgress}
            type="submit"
            className="btn btn-primary ml-1"
            onClick={props.handleSaveClick}
          >
            {strings.siteForm.saveButton}
          </button>
        </div>
        {props.isNewSite ? null : (
          <div className="col-1">
            <button
              disabled={props.actionInProgress}
              type="button"
              className="btn btn-danger float-right"
              onClick={props.handleDeleteClick}
            >
              {strings.siteForm.deleteButton}
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
