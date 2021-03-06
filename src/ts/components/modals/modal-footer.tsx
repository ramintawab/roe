import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export type ModalFooterProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Footer for `Modal`s to contain submit buttons, link or sub-text.
 * See the [Modal](#modal) section for a full example.
 */
export class ModalFooter extends PureComponent<ModalFooterProps, {}> {
  public render() {
    const {
      className,
      children,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component
        {...remainingProps}
        className={classNames('modal-footer', className)}
      >
        {children}
      </Component>
    );
  }
}

export default ModalFooter;
