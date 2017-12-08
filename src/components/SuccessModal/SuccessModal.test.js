import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SuccessModal from './SuccessModal';

describe('SuccessModal', () => {
  const props = {
    lastExchange: {},
    handleHideModal: jest.fn()
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <SuccessModal {...props} />,
      div
    );
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <SuccessModal {...props} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
