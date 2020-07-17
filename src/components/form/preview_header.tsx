/*
 * @Author: 刘佑祥
 * @LastEditors: 刘佑祥
 * @LastEditTime: 2020-07-16 17:49:23
 */
import * as React from 'react';
import classNames from '../../utils/classnames';
interface PreviewHeader {
  className?: any,
  children?: React.ReactNode
}
const PreviewHeader = (props: PreviewHeader) => {

    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-form-preview__hd': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            { children }
        </div>
    );
};

export default PreviewHeader;