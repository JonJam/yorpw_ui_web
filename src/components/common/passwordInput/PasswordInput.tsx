import * as React from "react";
import zxcvbn from "zxcvbn";
import strings from "../../../strings";
import ValidationErrorMessage from "../ValidationErrorMessage";

import "./PasswordInput.css";

interface IPasswordInputProps {
  readonly className: string;
  readonly id: string;
  readonly label: string;
  readonly placeholder: string;
  readonly value: any;
  readonly showClear: boolean;
  readonly isReadonly?: boolean;
  readonly validationErrors?: ReadonlyArray<string>;
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleToggleClick?: () => void;
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

  // zxcvbn().score is a number in range 0 (too guessable) - 4 (very unguessable).
  let passwordScore = zxcvbn(props.value).score * 25;
  // Adding some percentage for 0 in order that progress bar displays some red.
  passwordScore = passwordScore === 0 ? 1 : passwordScore;

  let strengthIndicatorColor = "bg-danger";
  const strengthIndicatorStyle = {
    width: `${passwordScore}%`
  };

  if (passwordScore >= 75) {
    strengthIndicatorColor = "bg-success";
  } else if (passwordScore > 25) {
    strengthIndicatorColor = "bg-warning";
  }

  const isReadonly = props.isReadonly !== undefined ? props.isReadonly : false;

  /* tslint:disable:no-empty */
  const handleInputChange =
    props.handleInputChange !== undefined ? props.handleInputChange : () => {};

  /* tslint:disable:no-empty */
  const handleToggleClick =
    props.handleToggleClick !== undefined ? props.handleToggleClick : () => {};

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
          onChange={handleInputChange}
          readOnly={isReadonly}
        />
        {isReadonly ? null : (
          <span className="input-group-btn">
            <button
              className="btn btn-light"
              type="button"
              aria-label={label}
              onClick={handleToggleClick}
            >
              {icon}
            </button>
          </span>
        )}
      </div>
      <div className="progress">
        <div
          className={`progress-bar ${strengthIndicatorColor}`}
          style={strengthIndicatorStyle}
          role="progressbar"
          aria-valuenow={passwordScore}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
      {props.validationErrors !== undefined ? (
        <ValidationErrorMessage messages={props.validationErrors} />
      ) : null}
    </div>
  );
}
