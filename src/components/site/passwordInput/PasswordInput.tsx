import * as React from "react";
import strings from "../../../strings";
import ValidationErrorMessage from "../../common/ValidationErrorMessage";

import "./PasswordInput.css";

interface IPasswordInputProps {
  readonly className: string;
  readonly id: string;
  readonly label: string;
  readonly placeholder: string;
  readonly value: any;
  readonly showClear: boolean;
  readonly validationErrors: ReadonlyArray<string> | undefined;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleToggleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function PasswordInput(props: IPasswordInputProps) {
  const formGroupClass = `password-input form-group ${props.className}`;
  const inputClass = `form-control ${props.validationErrors !== undefined &&
  props.validationErrors.length > 0
    ? "is-invalid"
    : ""}`;

  let type = "password";
  let icon = <span className="fa fa-eye" aria-hidden="true" />;
  let label = strings.passwordInput.showPasswordLabel;

  if (props.showClear) {
    type = "text";
    icon = <span className="fa fa-eye-slash" aria-hidden="true" />;
    label = strings.passwordInput.hidePasswordLabel;
  }

  return (
    <div className={formGroupClass}>
      <label htmlFor={props.id}>
        {props.label}
      </label>

      <div className="input-group">
        <input
          type={type}
          className={inputClass}
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.handleInputChange}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-light"
            type="button"
            aria-label={label}
            onClick={props.handleToggleClick}
          >
            {icon}
          </button>
        </span>
      </div>

      <ValidationErrorMessage messages={props.validationErrors} />
    </div>
  );
}
