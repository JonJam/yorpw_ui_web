import * as React from "react";
import strings from "../../strings";
import { nameOf } from "../../utilities";
import Checkbox from "../common/Checkbox";
import PasswordInput from "../common/passwordInput/PasswordInput";
import ISelectOption from "../common/select/ISelectOption";
import Select from "../common/select/Select";

interface IGeneratePasswordFormProps {
  readonly length: number;
  readonly lengthOptions: ReadonlyArray<ISelectOption>;
  readonly memorable: boolean;
  readonly password: string;
  handleGenerateClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
  const password = nameOf<IGeneratePasswordFormProps>("password");

  return (
    // Disabling browser default feedback tooltips using novalidate
    <form noValidate={true}>
      <div className="form-row">
        <PasswordInput
          className="col-12"
          id={password}
          label={strings.siteForm.passwordLabel}
          placeholder={strings.generatePasswordForm.passwordPlaceholder}
          value={props.password}
          showClear={true}
          isReadonly={true}
        />
      </div>
      <div className="form-row">
        <Select
          className="col-12"
          id={length}
          value={props.length}
          label={strings.generatePasswordForm.lengthLabel}
          options={props.lengthOptions}
          handleChange={props.handleValueChange}
        />
      </div>

      <div className="form-row">
        <Checkbox
          className="col-12"
          id={memorable}
          label={strings.generatePasswordForm.memorableLabel}
          value={props.memorable}
          handleChange={props.handleValueChange}
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
