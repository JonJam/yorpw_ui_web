import * as React from "react";
import GroupViewModel from "../../models/GroupViewModel";
import IValidationErrors from "../../models/IValidationErrors";
import strings from "../../strings";
import { nameOf } from "../../utilities";
import Input from "../common/Input";

interface IGroupFormProps {
  readonly group: GroupViewModel;
  readonly isNewGroup: boolean;
  readonly validationErrors: IValidationErrors;
  readonly actionInProgress: boolean;
  handleSaveClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCancelClick: () => void;
  handleDeleteClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleValueChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function GroupForm(props: IGroupFormProps) {
  const name = nameOf<GroupViewModel>("name");

  return (
    // Disabling browser default feedback tooltips using novalidate
    <form noValidate={true}>
      <div className="form-row">
        <Input
          className="col-12"
          id={name}
          label={strings.siteForm.nameLabel}
          type="text"
          placeholder={strings.siteForm.namePlaceholder}
          value={props.group.name}
          handleChange={props.handleValueChange}
          validationErrors={props.validationErrors[name]}
        />
      </div>
      <div className="form-row">
        <div className="col-11">
          <button
            type="button"
            className="btn btn-light"
            onClick={props.handleCancelClick}
          >
            {strings.siteForm.cancelButton}
          </button>
          <button
            disabled={props.actionInProgress}
            type="submit"
            className="btn btn-primary ml-1"
            onClick={props.handleSaveClick}
          >
            {strings.siteForm.saveButton}
          </button>
        </div>
        {props.isNewGroup
          ? null
          : <div className="col-1">
              <button
                disabled={props.actionInProgress}
                type="button"
                className="btn btn-danger float-right"
                onClick={props.handleDeleteClick}
              >
                {strings.siteForm.deleteButton}
              </button>
            </div>}
      </div>
    </form>
  );
}
