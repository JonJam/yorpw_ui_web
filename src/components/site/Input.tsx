import * as React from "react";

interface IInputProps {
  className: string;
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: IInputProps) {
  const className = `form-group ${props.className}`;

  return (
    <div className={className}>
      <label htmlFor={props.id}>
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleInputChange}
      />
    </div>
  );
}
