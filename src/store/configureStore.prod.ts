import { createStore } from "redux";
// import { createStore, applyMiddleware } from 'redux';
import rootReducer from "../reducers/rootReducer";
// import thunk from 'redux-thunk';

// export default function configureStore(initialState) {
// 	return createStore(
// 		rootReducer,
// 		initialState,
// 		applyMiddleware(thunk)
// 	);
// }

export default function configureStore() {
  return createStore(rootReducer);
}
