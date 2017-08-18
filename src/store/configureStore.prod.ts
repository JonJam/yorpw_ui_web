import { createStore } from "redux";
// import { createStore, applyMiddleware } from 'redux';
import rootReducer from "../reducers/rootReducer";
import IStoreState from "./IStoreState";
// import thunk from 'redux-thunk';

// export default function configureStore(initialState) {
// 	return createStore(
// 		rootReducer,
// 		initialState,
// 		applyMiddleware(thunk)
// 	);
// }

export default function configureStore() {
  return createStore<IStoreState>(rootReducer);
}
