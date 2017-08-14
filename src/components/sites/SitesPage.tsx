// import * as React from "react";
// import { bindActionCreators } from "redux";
// import State from "../../store/State";
// import exampleActions from "../../actions/example/exampleActions";
// import { connect } from "react-redux";

// interface SitePagesProps {
//   msg: string;
// }

// class HomePage extends React.Component<SitePagesProps> {
//   public render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <h1>Home</h1>
//             <div>
//               <p>Message is:</p>
//               <p>
//                 {this.props.msg}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state: State) {
//   return {
//     msg: state.example
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(exampleActions, dispatch);
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
