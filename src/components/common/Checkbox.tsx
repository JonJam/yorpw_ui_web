import * as React from "react";

interface ICheckboxProps {
  readonly className: string;
  readonly id: string;
  readonly label: string;
  readonly value: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox(props: ICheckboxProps) {
  const formCheckClass = `form-check ${props.className}`;

  return (
    <div className={formCheckClass}>
      <label htmlFor={props.id} className="form-check-label">
        <input
          type="checkbox"
          className="form-check-input"
          id={props.id}
          checked={props.value}
          onChange={props.handleChange}
        />
        {props.label}
      </label>
    </div>
  );
}
