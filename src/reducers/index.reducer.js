import {combineReducers} from 'redux';

import rates from './rates.reducer';
import active from './active.reducer';
import balance from './balance.reducer';

const rootReducer = combineReducers({
  rates,
  active,
  balance
});

export default rootReducer;
