import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

interface PreviewButtonProps {
    className?: string;
    primary: boolean;
    children: React.ReactNode;
    [key: string]: any;
}
const PreviewButton = (props: PreviewButtonProps) => {
    const { className = '', primary, children, ...others } = props;
    const cls = classNames({
        'weui-form-preview__btn': true,
        'weui-form-preview__btn_default': !primary,
        'weui-form-preview__btn_primary': primary,
        [className]: className,
    });

    return (
        <a className={cls} {...others}>
            {children}
        </a>
    );
};
PreviewButton.propTypes = {
    /**
     * 默认default，可选：true false
     *
     */
    primary: PropTypes.bool,
};
PreviewButton.defaultProps = {
    primary: false,
};

export default PreviewButton;
