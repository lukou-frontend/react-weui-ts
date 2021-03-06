/*
 * @Author: 刘佑祥
 * @LastEditors: 刘佑祥
 * @LastEditTime: 2020-07-16 18:05:53
 */
import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * Content of Mediabox
 *
 */
interface PanelBodyProps {
    className?: any;
    children: React.ReactNode;
}
export default function PanelBody(props: PanelBodyProps) {
    const { children, className, ...others } = props;
    const cls = classNames(
        {
            'weui-media-box__bd': true,
        },
        className,
    );

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
}
