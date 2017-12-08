import reducer from './active.reducer'
import * as types from '../actions/types'

describe('active reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      fromCurrency: 'GBP',
      fromValue: '',
      toCurrency: 'EUR',
      toValue: ''
    })
  });

  it('should handle SET_FROM_VALUE', () => {
    expect(
      reducer({toCurrency: 'EUR'},
        {
          type: types.SET_FROM_VALUE,
          rates: {
            base: 'GBP',
            date: '2017-12-07',
            rates: {
              EUR: 1.1355,
              USD: 1.3383
            }
          },
          fromValue: 1
        }
      )
    ).toEqual({
      fromValue: 1,
      toCurrency: 'EUR',
      toValue: 1.1355
    });
  });
});
