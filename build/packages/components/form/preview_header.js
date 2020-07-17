/*
 * @Author: 刘佑祥
 * @LastEditors: 刘佑祥
 * @LastEditTime: 2020-07-16 17:49:23
 */
import * as React from 'react';
import classNames from '../../utils/classnames';
const PreviewHeader = (props) => {
    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-form-preview__hd': true,
        [className]: className
    });
    return (React.createElement("div", Object.assign({ className: cls }, others), children));
};
export default PreviewHeader;
