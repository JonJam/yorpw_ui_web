import * as React from "react";
import strings from "../../strings";

interface IPasswordInputProps {
  className: string;
  id: string;
  label: string;
  placeholder: string;
  value: any;
  showClear: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleToggleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function PasswordInput(props: IPasswordInputProps) {
  const className = `form-group ${props.className}`;

  let type = "password";
  let icon = <span className="fa fa-eye" aria-hidden="true" />;
  let label = strings.passwordInput.showPasswordLabel;

  if (props.showClear) {
    type = "text";
    icon = <span className="fa fa-eye-slash" aria-hidden="true" />;
    label = strings.passwordInput.hidePasswordLabel;
  }

  return (
    <div className={className}>
      <label htmlFor={props.id}>
        {props.label}
      </label>

      <div className="input-group">
        <input
          type={type}
          className="form-control"
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
    </div>
  );
}
