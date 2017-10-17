import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import strings from "../../strings";
import GeneratePasswordForm from "./GeneratePasswordForm";

import "./GeneratePasswordPage.css";

interface IGeneratePasswordPageProps extends RouteComponentProps<any> {}

// TODO Add properties for state
interface IGeneratePasswordPageState {}

export default class GeneratePasswordPage extends React.Component<
  IGeneratePasswordPageProps,
  IGeneratePasswordPageState
> {
  constructor(props: IGeneratePasswordPageProps) {
    super(props);

    // TODO set initial state.

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
              {/* TODO Handle values change
              TODO Pass initial values */}
              <GeneratePasswordForm
                handleCancelClick={this.handleCancelClick}
                handleGenerateClick={this.handleGenerateClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private async handleGenerateClick() {
    // TODO Implement this
    console.log("Clicked handleGenerateClick");
  }

  private handleCancelClick() {
    this.props.history.goBack();
  }
}
