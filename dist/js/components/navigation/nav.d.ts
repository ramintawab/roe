/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface NavProps extends ComponentProps, HTMLProps<HTMLElement> {
}
/**
 * Used to group NavItems inside a NavBar or SideBar.
 * You should use the atomic display classes e.g. `"display-none md-display-block"`
 * to hide the nav and replace it with a menu button (for controlling the SideBar) on smaller screens.
 * The same Nav can be used in both a NavBar and SideBar, and will automatically style itself sensibly.
 */
export declare class Nav extends PureComponent<NavProps, {}> {
    render(): JSX.Element;
}
export default Nav;
