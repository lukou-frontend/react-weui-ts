import * as React from 'react';
import classNames from '../../utils/classnames';

interface PreviewButtonProps {
  className?: string,
  primary: boolean,
  children: React.ReactNode,
  onClick?: () => void
  [key: string]: any
}
const PreviewButton = (props: PreviewButtonProps) => {
    const { className = '', primary, children, ...others } = props;
    const cls = classNames({
        'weui-form-preview__btn': true,
        'weui-form-preview__btn_default': !primary,
        'weui-form-preview__btn_primary': primary,
        [className]: className
    });

    return (
        <a className={cls} {...others}>
            {children}
        </a>
    );
};

PreviewButton.defaultProps = {
    primary: false
};

export default PreviewButton;
