//1.0.0 components

import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * Footer of Preview, consists of actions
 *
 */
interface PreviewFooterProps {
  className?: any,
  children?: React.ReactNode
}
const PreviewFooter = (props: PreviewFooterProps) => {

    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-form-preview__ft': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            { children }
        </div>
    );
};

export default PreviewFooter;