import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ConvertTo from './ConvertTo';

describe('ConvertTo', () => {
  const props = {
    balance: {
      GBP: 15.00,
      EUR: 10,
      USD: 30,
      lastExchange: {}
    },
    rates: {},
    toCurrency: 'EUR',
    toValue: 12,
    fromCurrency: 'GBP',
    handleToCurrencyChange: jest.fn(),
    handleToValueChange: jest.fn(),
    handleExchange: jest.fn(),
    isExchangeButtonDisabled: false
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MuiThemeProvider>
        <ConvertTo {...props} />
      </MuiThemeProvider>
      , div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <MuiThemeProvider>
        <ConvertTo {...props} />
      </MuiThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
