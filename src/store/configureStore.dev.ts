import { applyMiddleware, createStore } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "../reducers/rootReducer";
import IStoreState from "./IStoreState";
// import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore<IStoreState>(
    rootReducer,
    // applyMiddleware(thunk)
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
