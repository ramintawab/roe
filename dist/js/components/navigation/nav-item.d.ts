/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface NavItemProps extends ComponentProps, HTMLProps<HTMLElement> {
    /**
     * Apply an active class to the NavItem
     */
    active?: boolean;
}
/**
 * NavItems are used inside of a Nav. These already have basic hover styles applied.
 * You should **always** nest an `<a>` inside a NavItem. This is not part of the component so that you can use other
 * components in place of an `<a>`, such as a React Router link (which renders an `<a>` also).
 * These can have an active class applied to them to highlight the currently active page.
 * You may apply `button` and related classes to a NavItem e.g. for a logout button.
 * See the [Nav](#nav) section for a full example.
 */
export declare class NavItem extends PureComponent<NavItemProps, {}> {
    render(): JSX.Element;
}
export default NavItem;
