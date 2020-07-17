//1.0.0 components
import * as React from 'react';
import classNames from '../../utils/classnames';
const PreviewBody = (props) => {
    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-form-preview__bd': true,
        [className]: className
    });
    return (React.createElement("div", Object.assign({ className: cls }, others), children));
};
export default PreviewBody;
