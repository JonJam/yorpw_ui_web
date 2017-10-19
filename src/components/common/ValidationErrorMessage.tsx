import * as React from "react";

interface IValidationErrorMessageProps {
  readonly messages: ReadonlyArray<string>;
}

export default function ValidationErrorMessage(
  props: IValidationErrorMessageProps
) {
  let element: JSX.Element | null = null;

  if (props.messages.length > 0) {
    element = (
      <div className="invalid-feedback">
        <ul className="list-unstyled">
          {props.messages.map(m => <li key={m}>{m}</li>)}
        </ul>
      </div>
    );
  }

  return element;
}
