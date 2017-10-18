import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import strings from "../../strings";
import GeneratePasswordForm from "./GeneratePasswordForm";
import * as generatePassword from "password-generator";
import ISelectOption from "../common/select/ISelectOption";

import "./GeneratePasswordPage.css";

interface IGeneratePasswordPageProps extends RouteComponentProps<any> {}

interface IGeneratePasswordPageState {
  readonly length: number;
  readonly memorable: boolean;
  readonly password: string;
}

export default class GeneratePasswordPage extends React.Component<
  IGeneratePasswordPageProps,
  IGeneratePasswordPageState
> {
  private readonly lengthOptions: ReadonlyArray<ISelectOption<number>>;

  constructor(props: IGeneratePasswordPageProps) {
    super(props);

    // Generating list of numbers from 5 - 100.
    this.lengthOptions = Array(100)
      .map((_value, index) => {
        const option: ISelectOption<number> = {
          display: index.toString(),
          value: index
        };

        return option;
      })
      .slice(4);

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
    // TODO Test
    const propertyName = e.target.id;
    const updatedValue = e.target.value;

    const updatedState = {
      ...this.state,
      [propertyName]: updatedValue
    };

    this.setState(updatedState);
  }

  private async handleGenerateClick() {
    // TODO Implement this
    console.log("Clicked handleGenerateClick");

    // TODO Update state
  }

  private handleCancelClick() {
    this.props.history.goBack();
  }
}
