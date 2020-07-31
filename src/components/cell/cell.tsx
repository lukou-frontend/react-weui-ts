/*
 * @Author: 刘佑祥
 * @LastEditors: 刘佑祥
 * @LastEditTime: 2020-07-31 17:16:23
 */
import * as React from 'react';
import PropTypes from 'prop-types'
import classNames from '../../utils/classnames';

/**
 * Cell consist of `CellBody`, `CellHeader` and `CellFooter` for flexible reason
 *
 */
type IReactComponent<P = any> =
  | React.FC<P>
  | React.ComponentClass<P>
  | React.ClassicComponentClass<P>;

interface CellProps {
  access?: boolean,
  className?: any,
  link?: boolean,
  htmlFor?: string,
  href?: string,
  component?: IReactComponent,
  children?: React.ReactNode,
  [key: string]: any
}
export default class Cell extends React.Component<CellProps, any> {
  static propTypes = {
    /**
     * if cell should have arrow or link
     *
     */
    access: PropTypes.bool,
    /**
     * if this cell body is link
     *
     */
    link: PropTypes.bool,
    /**
     * pass in an component to replace Cell but apply same style
     *
     */
    component: PropTypes.func
  };

  static defaultProps = {
    access: false as CellProps['access'],
    link: false as CellProps['link'],
  };
  constructor(props: CellProps) {
    super(props)
  }
  render() {
    const { className, children, access, href, link, component, htmlFor, ...others } = this.props;
    const DefaultComponent = href ? 'a' : htmlFor ? 'label' : 'div';
    var CellComponent = component ? component : DefaultComponent;

    const cls = classNames({
      'weui-cell': true,
      'weui-cell_access': access,
      'weui-cell_link': link,
      [className]: className
    });
    return (
      <CellComponent
        className={cls}
        href={href}
        htmlFor={htmlFor}
        {...others}
      >
        {children}
      </CellComponent>
    );
  }

};
