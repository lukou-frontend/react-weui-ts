/*
 * @Author: 刘佑祥
 * @LastEditors: 刘佑祥
 * @LastEditTime: 2020-07-16 17:23:52
 */
import * as React from 'react';
import classNames from '../../utils/classnames';
const CellsTitle = (props) => {
    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-cells__title': true,
        [className]: className
    });
    return (React.createElement("div", Object.assign({ className: cls }, others), children));
};
export default CellsTitle;
