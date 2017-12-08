import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {Error} from './Error';

describe('Error', () => {
  const props = {
    error: null
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Error {...props} />,
      div
    );
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Error {...props} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
