/*
 * @Author: 刘佑祥
 * @LastEditors: 刘佑祥
 * @LastEditTime: 2020-08-03 14:30:18
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
<<<<<<< HEAD
  onClick?: () => void,
  [key: string]: any
=======
  onClick?: React.MouseEventHandler<HTMLElement>,
  style?: React.CSSProperties,
>>>>>>> cb04d572b814b626a65c9c2e3fe8db6eb459ebd6
}
const Cell = (props: CellProps) => {
  const { className, children, access, href, link, component, htmlFor, onClick, ...others } = props;
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
      onClick={onClick}
      {...others}
    >
      {children}
    </CellComponent>
  );
};

Cell.propTypes = {
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

Cell.defaultProps = {
  access: false as CellProps['access'],
  link: false as CellProps['link'],
};

export default Cell;
