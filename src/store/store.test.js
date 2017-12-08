import { createStore } from 'redux';

import * as ActionTypes from '../actions/types';
import initialState from '../reducers/initial.state';
import rootReducer from '../reducers/index.reducer';

describe('Loading', () => {
  it('should get the correct loading.rates state when `SET_RATES_LOADING` action is dispatched', () => {
    // arrange
    const store = createStore(rootReducer, initialState);

    // act
    const action = { type: ActionTypes.SET_RATES_LOADING, isLoading: true};
    store.dispatch(action);

    // assert
    const actual = store.getState();

    expect(actual.loading.rates).toEqual(true);
  });
});

describe('Modal', () => {
  it('should get the correct modal.success state when `SHOW_SUCCESS_MODAL` action is dispatched', () => {
    // arrange
    const store = createStore(rootReducer, initialState);

    // act
    const action = { type: ActionTypes.SHOW_SUCCESS_MODAL, show: true};
    store.dispatch(action);

    // assert
    const actual = store.getState();

    expect(actual.modal.success).toEqual(true);
  });
});

describe('Rates', () => {
  it('should get the correct rates state when `GET_RATES` action is dispatched', () => {
    // arrange
    const store = createStore(rootReducer, initialState);

    // act
    const action = { type: ActionTypes.GET_RATES, rates: {
      GPB: 10,
      EUR: 1,
      USD: 4
    }};
    store.dispatch(action);

    // assert
    const actual = store.getState();

    expect(actual.rates).toEqual({
      GPB: 10,
      EUR: 1,
      USD: 4
    });
  });
});

describe('Errors', () => {
  it('should get the correct error.rates state when `SET_RATES_ERROR` action is dispatched', () => {
    // arrange
    const store = createStore(rootReducer, initialState);

    // act
    const action = { type: ActionTypes.SET_RATES_ERROR, error: 'error'};
    store.dispatch(action);

    // assert
    const actual = store.getState();

    expect(actual.errors.rates).toEqual('error');
  });
});

describe('Exchange', () => {
  it('should get the correct balance state when `EXCHANGE` action is dispatched', () => {
    // arrange
    const store = createStore(rootReducer, initialState);

    // act
    const active = {
        fromCurrency: 'GBP',
        fromValue: 10,
        toCurrency: 'EUR',
        toValue: 11.36
      };
    const rates = {
        base: 'GBP',
          date: '2017-12-07',
          rates: {
          EUR: 1.1355,
          USD: 1.3383
        }
      };
    const action = { type: ActionTypes.EXCHANGE, active, rates};
    store.dispatch(action);

    // assert
    const actual = store.getState();

    expect(actual.balance).toEqual({
      EUR: 11.355,
      GBP: 5,
      USD: 0,
      lastExchange: {
        fromCurrency: 'GBP',
        fromValue: 10,
        toCurrency: 'EUR',
        toValue: 11.355
      }
    });
  });
});
