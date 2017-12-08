import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Rates from './Rates';

describe('Rates', () => {
  const props = {
    rates: {},
    fromCurrency: 'EUR',
    toCurrency: 'GBP',
    isLoading: false
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Rates {...props} />,
      div
    );
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Rates {...props} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
