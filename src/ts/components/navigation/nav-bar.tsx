import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import * as ReactDOM from 'react-dom';
import store from '../../store';
import { ComponentProps } from '../../types';
import { getScrollOffset } from '../../utils';

export interface NavBarProps extends ComponentProps, HTMLProps<HTMLElement> {
  /**
   * Fix the navbar to the top of the screen
   */
  fixed?: boolean;
  /**
   * Hide the navbar when scrolling down, but display when scrolling up
   */
  shy?: boolean;
  /**
   * Remove NavBar shadow
   */
  noShadow?: boolean;
}

export interface NavBarState {
  hidden: boolean;
}

export class NavBar extends PureComponent<NavBarProps, NavBarState> {
  private previousScrollY: number;
  private mountTime: number | undefined;

  public constructor(props: NavBarProps) {
    super(props);

    this.previousScrollY = getScrollOffset().y;

    this.state = {
      hidden: false,
    };
  }

  public componentDidMount() {
    this.notifyAppRoot(this.props);
    this.toggleShyListeners(this.props);
    this.toggleResizeListeners(this.props);

    this.mountTime = new Date().getTime();
  }

  public componentDidUpdate(prevProps: NavBarProps) {
    if (Boolean(this.props.shy) !== Boolean(prevProps.shy)) {
      this.toggleShyListeners(this.props);
    }

    if (
      Boolean(this.props.fixed) !== Boolean(prevProps.fixed) ||
      Boolean(this.props.shy) !== Boolean(prevProps.shy)
    ) {
      this.toggleResizeListeners(this.props);
    }

    this.notifyAppRoot(this.props);
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.hideOrShowNavBar);
    window.removeEventListener('resize', this.hideOrShowNavBar);
    window.removeEventListener('resize', this.updateAppRoot);
    this.notifyAppRoot({ fixed: false });
  }

  public render() {
    const {
      children,
      className,
      fixed,
      shy,
      noShadow,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    const { hidden } = this.state;

    const myClassNames = [
      'nav-bar',
      fixed || shy ? 'fixed' : null,
      shy ? 'shy' : null,
      hidden ? 'hidden' : null,
      noShadow ? 'no-shadow' : null,
      className,
    ];

    return (
      <Component {...remainingProps} className={classNames(myClassNames)}>
        {children}
      </Component>
    );
  }

  private notifyAppRoot(props: NavBarProps) {
    const { fixed, shy } = props;
    const element = ReactDOM.findDOMNode(this);

    store.setState({
      hasFixedNavBar: Boolean(fixed || shy),
      navBarHeight:
        element && element instanceof HTMLElement
          ? element.getBoundingClientRect().height
          : undefined,
    });
  }

  private updateAppRoot = () => {
    this.notifyAppRoot(this.props);
  };

  private toggleResizeListeners(props: NavBarProps) {
    const { fixed, shy } = props;

    if (fixed || shy) {
      window.addEventListener('resize', this.updateAppRoot);
    } else {
      window.removeEventListener('resize', this.updateAppRoot);
    }
  }

  private toggleShyListeners(props: NavBarProps) {
    const { shy } = props;

    if (shy) {
      window.addEventListener('scroll', this.hideOrShowNavBar);
      window.addEventListener('resize', this.hideOrShowNavBar);
    } else {
      window.removeEventListener('scroll', this.hideOrShowNavBar);
      window.removeEventListener('resize', this.hideOrShowNavBar);
    }
  }

  private hideOrShowNavBar = () => {
    const { y } = getScrollOffset();

    if (
      typeof this.mountTime === 'undefined' ||
      new Date().getTime() < this.mountTime + 250
    ) {
      this.previousScrollY = y;
      return;
    }

    const element = ReactDOM.findDOMNode(this);

    if (element && element instanceof HTMLElement) {
      const { height } = element.getBoundingClientRect();

      if (y > this.previousScrollY + height / 2 && y > height) {
        this.setState({
          hidden: true,
        });

        this.previousScrollY = y;
      } else if (y < this.previousScrollY - height / 2) {
        this.setState({
          hidden: false,
        });

        this.previousScrollY = y;
      }
    }
  };
}

export default NavBar;
