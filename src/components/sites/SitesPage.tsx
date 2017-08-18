import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { testCall } from "../../actions/example/exampleActions";
import ITestCallAction from "../../actions/example/ITestCallAction";
import IStoreState from "../../store/IStoreState";

interface ISitePagesProps {
  msg: string;
  testCall: (message: string) => ITestCallAction;
}

class SitesPage extends React.Component<ISitePagesProps> {
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: IStoreState) {
  return {
    msg: state.example
  };
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
  return {
    testCall: bindActionCreators(testCall, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SitesPage);
