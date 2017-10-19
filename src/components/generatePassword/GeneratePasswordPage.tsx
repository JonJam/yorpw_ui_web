import * as generatePassword from "password-generator";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import strings from "../../strings";
import ISelectOption from "../common/select/ISelectOption";
import GeneratePasswordForm from "./GeneratePasswordForm";

import "./GeneratePasswordPage.css";

interface IGeneratePasswordPageState {
  readonly length: number;
  readonly memorable: boolean;
  readonly password: string;
}

export default class GeneratePasswordPage extends React.Component<
  RouteComponentProps<any>,
  IGeneratePasswordPageState
> {
  private readonly lengthOptions: ReadonlyArray<ISelectOption>;

  constructor(props: RouteComponentProps<any>) {
    super(props);

    // Generating list of numbers from 5 - 100.
    /* tslint:disable:variable-name */
    this.lengthOptions = Array.from(new Array(101), (_value, index) => {
      const option: ISelectOption = {
        display: index.toString(),
        value: index
      };

      return option;
    }).slice(5);

    const length = 10;
    const memorable = false;
    const password = generatePassword(length, memorable);

    this.state = {
      length,
      memorable,
      password
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleGenerateClick = this.handleGenerateClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  public render() {
    return (
      <div className="row mt-3 generatePasswordPage">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              {strings.generatePasswordPage.title}
              <h1 className="sr-only">{strings.generatePasswordPage.title}</h1>
            </div>
            <div className="card-body">
              <GeneratePasswordForm
                length={this.state.length}
                lengthOptions={this.lengthOptions}
                memorable={this.state.memorable}
                password={this.state.password}
                handleValueChange={this.handleValueChange}
                handleCancelClick={this.handleCancelClick}
                handleGenerateClick={this.handleGenerateClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private handleValueChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const propertyName = e.target.id;
    const updatedValue =
      e.target.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    const updatedState = {
      ...this.state,
      [propertyName]: updatedValue
    };

    this.setState(updatedState);
  }

  private async handleGenerateClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const password = generatePassword(this.state.length, this.state.memorable);

    this.setState({
      password
    });
  }

  private handleCancelClick() {
    this.props.history.goBack();
  }
}
