import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ValueInput from './ValueInput';

describe('ValueInput', () => {
  const props = {
    name: 'fromValue',
    value: 0.15,
    onChange: jest.fn(),
    disabled: false,
    isFromValue: true
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ValueInput {...props} />,
      div
    );
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <ValueInput {...props} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
