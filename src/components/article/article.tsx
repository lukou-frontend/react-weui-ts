/*
 * @Author: 刘佑祥
 * @LastEditors: 刘佑祥
 * @LastEditTime: 2020-08-03 14:45:05
 */
import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * Use to format WeUI style contents
 *
 */
interface ArticalProps {
    className?: any;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export default function Article(props: ArticalProps) {
    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-article': true,
        [className]: className,
    });
    return (
        <article className={cls} {...others}>
            {children}
        </article>
    );
}
