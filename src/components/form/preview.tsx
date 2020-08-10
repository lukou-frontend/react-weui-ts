//1.0.0 components

import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * Preview Wrapper consists of `PreviewHeader`, `PreviewBody`, `PreviewFooter`, `PreviewItem`
 *
 */
interface PreviewProps {
  className?: any,
  children?: React.ReactNode,
  style?: React.CSSProperties,
  [key: string]: any
}
const Preview = (props: PreviewProps) => {

    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-form-preview': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            { children }
        </div>
    );
};

export default Preview;