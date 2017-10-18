import * as React from "react";
import strings from "../../strings";
import { nameOf } from "../../utilities";
import Input from "../common/Input";
import ISelectOption from "../common/select/ISelectOption";
import Select from "../common/select/Select";

// TODO Add validation / in progress disabling (Use SiteForm as basis)

// TODO Add required props
interface IGeneratePasswordFormProps {
  readonly length: number;
  readonly lengthOptions: ReadonlyArray<ISelectOption<number>>;
  readonly memorable: boolean;
  readonly password: string;
  handleGenerateClick: () => void;
  handleCancelClick: () => void;
  handleValueChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function GeneratePasswordForm(
  props: IGeneratePasswordFormProps
) {
  const length = nameOf<IGeneratePasswordFormProps>("length");
  const memorable = nameOf<IGeneratePasswordFormProps>("memorable");

  return (
    // Disabling browser default feedback tooltips using novalidate
    <form noValidate={true}>
      {/*
      TODO Add output (not sure whether here or at page level)
      TODO Add inputs */}
      <div className="form-row">
        <Select
          className="col-12"
          id={length}
          value={props.length}
          label={strings.generatePasswordForm.lengthLabel}
          options={props.lengthOptions}
          handleChange={props.handleValueChange}
          validationErrors={props.validationErrors[groupId]}
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
        <div className="col-12">
          <button
            type="button"
            className="btn btn-light"
            onClick={props.handleCancelClick}
          >
            {strings.generatePasswordForm.cancelButton}
          </button>
          <button
            /* disabled={props.actionInProgress} */
            type="submit"
            className="btn btn-primary ml-1"
            onClick={props.handleGenerateClick}
          >
            {strings.generatePasswordForm.generateButton}
          </button>
        </div>
      </div>
    </form>
  );
}
