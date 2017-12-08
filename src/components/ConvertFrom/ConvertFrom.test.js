import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ConvertFrom from './ConvertFrom';

describe('ConvertFrom', () => {
  const props = {
    fromCurrency: 'GBP',
    balance: {
      GBP: 15.00,
      EUR: 10,
      USD: 30,
      lastExchange: {}
    },
    rates: {},
    fromValue: 12,
    toCurrency: 'EUR',
    handleFromCurrencyChange: jest.fn(),
    handleFromValueChange: jest.fn(),
    ratesError: null,
    ratesLoading: false
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MuiThemeProvider>
        <ConvertFrom {...props} />
      </MuiThemeProvider>
      , div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <MuiThemeProvider>
        <ConvertFrom {...props} />
      </MuiThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
