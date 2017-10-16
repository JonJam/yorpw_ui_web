import * as React from "react";
import zxcvbn from "zxcvbn";
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
  handleToggleClick: () => void;
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

  // bg-danger 0-25
  // bg-warning 25-75
  // bg-success 75 - 100

  // // zxcvbn().score is a number in range 0 (too guessable) - 4 (very unguessable).
  // this.passwordScore = zxcvbn(site.password).score * 25;
  console.log(zxcvbn);

  return (
    <div className={formGroupClass}>
      <label htmlFor={props.id}>{props.label}</label>

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
      <div className="progress">
        {/* style="width: 25%; height: 4px;" */}
        <div
          className="progress-bar bg-success"
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>

      <ValidationErrorMessage messages={props.validationErrors} />
    </div>
  );
}
