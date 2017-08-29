import { History } from "history";
import * as React from "react";
import strings from "../../strings";

interface IHomePageProps {
  history: History;
}

class HomePage extends React.Component<IHomePageProps> {
  public render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3 text-center">
          {strings.Home.title}
        </h1>
        <p className="lead text-center">
          {strings.Home.tagLine}
        </p>
        <hr className="my-4" />
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={this.handleClick}
          >
            {strings.Home.getButton}
          </button>
        </div>
      </div>
    );
  }

  private handleClick = () => {
    this.props.history.push("/signup");
  };
}

export default HomePage;
