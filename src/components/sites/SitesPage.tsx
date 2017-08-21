import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { testCall, testCallAsync } from "../../actions/example/exampleActions";
import ITestCallAction from "../../actions/example/ITestCallAction";
import IStoreState from "../../store/IStoreState";

interface ISitePagesProps {
  msg: string;
  testCall: (message: string) => ITestCallAction;
  testCallAsync: () => (dispatch: Dispatch<IStoreState>) => Promise<void>;
}

interface ISitePagesState {
  doAsync: boolean;
  message: string;
}

class SitesPage extends React.Component<ISitePagesProps, ISitePagesState> {
  constructor(props: ISitePagesProps) {
    super(props);

    this.state = {
      doAsync: false,
      message: props.msg
    };
  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Home</h1>
            <div>
              <p>Message is:</p>
              <p>
                {this.props.msg}
              </p>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="checkbox"
                  checked={this.state.doAsync}
                  onChange={this.handleDoAsyncChange}
                />
                <input
                  type="text"
                  value={this.state.message}
                  onChange={this.handleTextChange}
                />
                <input type="submit" value="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newValue = this.state.message;

    if (this.state.doAsync) {
      this.props.testCallAsync();
    } else {
      this.props.testCall(newValue);
    }
  };

  private handleTextChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;

    this.setState({
      message: newValue
    });
  };

  private handleDoAsyncChange = () => {
    const newValue = !this.state.doAsync;

    this.setState({
      doAsync: newValue
    });
  };
}

function mapStateToProps(state: IStoreState) {
  return {
    msg: state.example
  };
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
  return {
    testCall: bindActionCreators(testCall, dispatch),
    testCallAsync: bindActionCreators(testCallAsync, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SitesPage);
