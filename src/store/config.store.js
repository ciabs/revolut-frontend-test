import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import DevTools from '../components/DevTools/DevTools';
import rootReducer from '../reducers/index.reducer';

const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk, reduxImmutableStateInvariant()),
    DevTools.instrument()
  )
);

export default configureStore;
