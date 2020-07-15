import React from 'react';
import classNames from '../../utils/classnames';

interface IProps {
  className: string,
  primary: boolean,
  children: React.ReactNode
}
const PreviewButton = (props: IProps) => {
    const { className, primary, children, ...others } = props;
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
