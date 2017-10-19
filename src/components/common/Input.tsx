import * as React from "react";
import ValidationErrorMessage from "./ValidationErrorMessage";

interface IInputProps {
  readonly className: string;
  readonly id: string;
  readonly label: string;
  readonly type: string;
  readonly placeholder: string;
  readonly value: any;
  readonly validationErrors?: ReadonlyArray<string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: IInputProps) {
  const formGroupClass = `form-group ${props.className}`;

  const inputClass = `form-control ${props.validationErrors !== undefined &&
  props.validationErrors.length > 0
    ? "is-invalid"
    : ""}`;

  return (
    <div className={formGroupClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        className={inputClass}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
      />
      {props.validationErrors !== undefined ? (
        <ValidationErrorMessage messages={props.validationErrors} />
      ) : null}
    </div>
  );
}
