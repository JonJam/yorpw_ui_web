import * as React from "react";
import strings from "../../strings";

// TODO Add validation / in progress disabling (Use SiteForm as basis)

// TODO Add required props
interface IGeneratePasswordFormProps {
  handleGenerateClick: () => void;
  handleCancelClick: () => void;
}

export default function GeneratePasswordForm(
  props: IGeneratePasswordFormProps
) {
  return (
    // Disabling browser default feedback tooltips using novalidate
    <form noValidate={true}>
      {/*
      TODO Add output (not sure whether here or at page level)
      TODO Add inputs */}
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
            /* disabled={props.actionInProgress} */
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
