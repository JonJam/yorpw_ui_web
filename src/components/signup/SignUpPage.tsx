import { History } from "history";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import { signIn as signInAction } from "../../actions/authentication/authenticationActions";
import ISignInAction from "../../actions/authentication/ISignInAction";
import IStoreState from "../../store/IStoreState";
import strings from "../../strings";

interface ISignUpPageProps extends RouteComponentProps<any> {
  signIn: (history: History) => ISignInAction;
}

class SignUpPage extends React.Component<ISignUpPageProps> {
  constructor(props: ISignUpPageProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <div className="row">
        <div className="col-12">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleClick}
          >
            {strings.signUpPage.signUp}
          </button>
        </div>
      </div>
    );
  }

  private handleClick() {
    this.props.signIn(this.props.history);
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
  return {
    signIn: bindActionCreators(signInAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
