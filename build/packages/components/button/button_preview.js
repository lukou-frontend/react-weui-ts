import * as React from 'react';
import classNames from '../../utils/classnames';
const PreviewButton = (props) => {
    const { className = '', primary, children, ...others } = props;
    const cls = classNames({
        'weui-form-preview__btn': true,
        'weui-form-preview__btn_default': !primary,
        'weui-form-preview__btn_primary': primary,
        [className]: className
    });
    return (React.createElement("a", Object.assign({ className: cls }, others), children));
};
PreviewButton.defaultProps = {
    primary: false
};
export default PreviewButton;
