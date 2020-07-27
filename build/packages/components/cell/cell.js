/*
 * @Author: 刘佑祥
 * @LastEditors: 刘佑祥
 * @LastEditTime: 2020-07-16 17:10:05
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
const Cell = (props) => {
    const { className, children, access, href, link, component, htmlFor, ...others } = props;
    const DefaultComponent = href ? 'a' : htmlFor ? 'label' : 'div';
    var CellComponent = component ? component : DefaultComponent;
    const cls = classNames({
        'weui-cell': true,
        'weui-cell_access': access,
        'weui-cell_link': link,
        [className]: className
    });
    return (React.createElement(CellComponent, Object.assign({ className: cls, href: href, htmlFor: htmlFor }, others), children));
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
    access: false,
    link: false,
};
export default Cell;
