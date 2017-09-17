import * as React from "react";
import ValidationErrorMessage from "../ValidationErrorMessage";
import ISelectOption from "./ISelectOption";

interface ISelectProps {
  readonly className: string;
  readonly id: string;
  readonly label: string;
  readonly value: any;
  readonly options: ReadonlyArray<ISelectOption>;
  readonly validationErrors: ReadonlyArray<string> | undefined;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function Select(props: ISelectProps) {
  const formGroupClass = `form-group ${props.className}`;

  const selectClass = `form-control ${props.validationErrors !== undefined &&
  props.validationErrors.length > 0
    ? "is-invalid"
    : ""}`;

  const options = props.options.map(so =>
    <option key={so.value} value={so.value}>
      {so.display}
    </option>
  );

  return (
    <div className={formGroupClass}>
      <label htmlFor={props.id}>
        {props.label}
      </label>
      <select
        id={props.id}
        value={props.value}
        onChange={props.handleChange}
        className={selectClass}
      >
        <option value="" />
        {options}
      </select>
      <ValidationErrorMessage messages={props.validationErrors} />
    </div>
  );
}
