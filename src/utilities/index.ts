import { ValidationError } from "class-validator";
import IValidationErrors from "../models/IValidationErrors";

export function mapToValidationErrors(
  validatonErrors: ReadonlyArray<ValidationError>
) {
  const validationMessages: IValidationErrors = {};

  validatonErrors.forEach(validationError => {
    const messages: string[] = [];

    for (const key of Object.keys(validationError.constraints)) {
      messages.push(validationError.constraints[key]);
    }

    validationMessages[validationError.property] = messages;
  });

  return validationMessages;
}

// Based off: https://schneidenbach.gitbooks.io/typescript-cookbook/nameof-operator.html
export function nameOf<T>(name: keyof T) {
  return name;
}
