import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Main} from './Main';

describe('Main', () => {
  const props = {
    rates: {},
    active: {
      fromValue: 1,
      fromCurrency: 'EUR',
      toValue: 2,
      toCurrency: 'GBP'
    },
    balance: {
      GBP: 15.00,
      EUR: 0,
      USD: 0
    },
    modal: {},
    setFromCurrencyFunc: jest.fn(),
    setFromValueFunc: jest.fn(),
    setToCurrencyFunc: jest.fn(),
    setToValueFunc: jest.fn(),
    exchangeFunc: jest.fn(),
    showSuccessModalFunc: jest.fn(),
    errors: {
      rates: null
    },
    loading: {
      rates: false
    }
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MuiThemeProvider>
        <Main {...props} />
      </MuiThemeProvider>,
      div
    );
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <MuiThemeProvider>
        <Main {...props} />
      </MuiThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
