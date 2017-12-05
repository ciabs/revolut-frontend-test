import {combineReducers} from 'redux';

import rates from './rates.reducer';
import currency from './currency.reducer';

const rootReducer = combineReducers({
  rates,
  currency
});

export default rootReducer;
