import {combineReducers} from 'redux';

import rates from './rates.reducer';
import active from './active.reducer';
import balance from './balance.reducer';
import loading from './loading.reducer';
import errors from './errors.reducer';
import modal from './modal.reducer';

const rootReducer = combineReducers({
  rates,
  active,
  balance,
  loading,
  errors,
  modal
});

export default rootReducer;
