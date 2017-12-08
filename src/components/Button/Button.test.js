import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button', () => {
  const props = {
    isDisabled: false,
    onClick: jest.fn(),
    children: 'hello world'
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Button {...props} />,
      div
    );
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Button {...props} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
