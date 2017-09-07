import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { signUpPath } from "../../routes/paths";
import strings from "../../strings";

export default class HomePage extends React.Component<
  RouteComponentProps<any>
> {
  constructor(props: RouteComponentProps<any>) {
    super(props);

    // Use bind instead of Arrow functions. As when using Arrow functions Chrome Debugger tools can't find values for properties in function.
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3 text-center">
          {strings.home.title}
        </h1>
        <p className="lead text-center">
          {strings.home.tagLine}
        </p>
        <hr className="my-4" />
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={this.handleClick}
          >
            {strings.home.getButton}
          </button>
        </div>
      </div>
    );
  }

  private handleClick() {
    this.props.history.push(signUpPath);
  }
}
