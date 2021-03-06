import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';

export type ContentBoxHeaderProps = ComponentProps & HTMLProps<HTMLElement>;

/**
 * Header for `ContentBox`s, used to display a content's title.
 * See the [ContentBox](#contentbox) section for a full example.
 */
export class ContentBoxHeader extends PureComponent<ContentBoxHeaderProps, {}> {
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
        className={classNames('content-box-header', className)}
      >
        {children}
      </Component>
    );
  }
}

export default ContentBoxHeader;
