import * as React from "react";
// import { connect } from "react-redux";
// import { bindActionCreators, Dispatch } from "redux";
import IGroup from "../../model/IGroup";
// import IStoreState from "../../store/IStoreState";

interface ISitePagesProps {
  groups: IGroup[];
  // sites: ISite[];
  // testCall: (message: string) => ITestCallAction;
  // testCallAsync: () => (dispatch: Dispatch<IStoreState>) => Promise<void>;
}

interface ISitePagesState {
  // doAsync: boolean;
}

// TODO Complete this.

class SitesPage extends React.Component<ISitePagesProps, ISitePagesState> {
  constructor(props: ISitePagesProps) {
    super(props);

    this.state = {
      // doAsync: false,
      // message: props.msg
    };
  }

  // componentDidMount

  public render() {
    return (
      // <div className="container">
      //   <div className="row">
      //     <div className="col">
      //       <h1>Home</h1>
      //       <div>
      //         <p>Message is:</p>
      //         <p>
      //           {this.props.msg}
      //         </p>
      //         <form onSubmit={this.handleSubmit}>
      //           <input
      //             type="checkbox"
      //             checked={this.state.doAsync}
      //             onChange={this.handleDoAsyncChange}
      //           />
      //           <input
      //             type="text"
      //             value={this.state.message}
      //             onChange={this.handleTextChange}
      //           />
      //           <input type="submit" value="submit" />
      //         </form>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div />
    );
  }
}

// function mapStateToProps(state: IStoreState) {
//   return {
//     groups: state.groups
//   };
// }

// function mapDispatchToProps(dispatch: Dispatch<IStoreState>) {
//   return {
//     getGroups: bindActionCreators(getGroups, dispatch)
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SitesPage);

export default SitesPage;
