import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CurrencySelect from './CurrencySelect';

describe('CurrencySelect', () => {
  const props = {
    name: 'fromValue',
    value: '0.15',
    onChange: jest.fn(),
    isDisabled: false,
    balance: {
      GBP: 15.00,
      EUR: 0,
      USD: 0,
      lastExchange: {}
    }
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MuiThemeProvider>
        <CurrencySelect {...props} />
      </MuiThemeProvider>,
      div
    );
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <MuiThemeProvider>
        <CurrencySelect {...props} />
      </MuiThemeProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
