import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Balance from './Balance';

describe('Balance', () => {
  const props = {
    balance: {
      EUR: 5
    },
    currency: 'EUR'
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Balance {...props} />,
      div
    );
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Balance {...props} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
