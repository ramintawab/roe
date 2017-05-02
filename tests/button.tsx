import { expect } from 'chai';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Button } from '../src/ts/';

describe('Button', () => {

  it('should match snapshot', () => {
    const tree = renderer.create(
      <Button />
    );

    expect(tree).to.matchSnapshot();
  });

  it('should take an optional fluid prop', () => {
    const tree = renderer.create(
      <Button large />
    );

    expect(tree).to.matchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(
      <Button className="my-class" />
    );

    expect(tree).to.matchSnapshot();
  });

  it('should use a type prop as a class name', () => {
    const tree = renderer.create(
      <Button type="primary" />
    );

    expect(tree).to.matchSnapshot();
  });

  it('should use a block prop (boolean) as a class name', () => {
    const tree = renderer.create(
      <Button block />
    );

    expect(tree).to.matchSnapshot();
  });

});
