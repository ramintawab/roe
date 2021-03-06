import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {
  Modal,
  ModalBody,
  ModalCloseIcon,
  ModalFooter,
  ModalHeader,
  ModalRenderer,
} from '../src/ts/';

describe('Modal', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <Modal onClickOutside={jest.fn()}>
        <ModalCloseIcon>x</ModalCloseIcon>
        <ModalHeader>
          <h1>Header</h1>
        </ModalHeader>
        <p>Content</p>
        <ModalFooter>
          <p>Footer</p>
        </ModalFooter>
      </Modal>
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <Modal onClickOutside={jest.fn()} className="my-class" />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take a scrollable prop and use it as a class name', () => {
    const tree = renderer.create(
      <Modal onClickOutside={jest.fn()} scrollable />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should take a small prop and use it as a class name', () => {
    const tree = renderer.create(<Modal onClickOutside={jest.fn()} small />);

    expect(tree).toMatchSnapshot();
  });

  it('should take a large prop and use it as a class name', () => {
    const tree = renderer.create(<Modal onClickOutside={jest.fn()} large />);

    expect(tree).toMatchSnapshot();
  });

  it('should take a fill prop and use it as a class name', () => {
    const tree = renderer.create(<Modal onClickOutside={jest.fn()} fill />);

    expect(tree).toMatchSnapshot();
  });

  it('should take a component prop and use it as the modal component', () => {
    const tree = renderer.create(
      <Modal onClickOutside={jest.fn()} component="p" />
    );

    expect(tree).toMatchSnapshot();
  });
});

describe('ModalCloseIcon', () => {
  it('should take regular element attributes', () => {
    const tree = renderer.create(<ModalCloseIcon className="my-class" />);

    expect(tree).toMatchSnapshot();
  });
});

describe('ModalBody', () => {
  it('should take regular element attributes', () => {
    const tree = renderer.create(<ModalBody className="my-class" />);

    expect(tree).toMatchSnapshot();
  });
});

describe('ModalHeader', () => {
  it('should take regular element attributes', () => {
    const tree = renderer.create(<ModalHeader className="my-class" />);

    expect(tree).toMatchSnapshot();
  });
});

describe('ModalFooter', () => {
  it('should take regular element attributes', () => {
    const tree = renderer.create(<ModalFooter className="my-class" />);

    expect(tree).toMatchSnapshot();
  });
});

describe('ModalRenderer', () => {
  it('should render some modals', () => {
    const modals = [
      <Modal key={0} onClickOutside={jest.fn()}>
        <p>Modal</p>
      </Modal>,
    ];

    const tree = renderer.create(<ModalRenderer modals={modals} />);

    expect(tree).toMatchSnapshot();
  });
});
