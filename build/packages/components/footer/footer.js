import * as React from 'react';
import classNames from '../../utils/classnames';
const Footer = (props) => {
    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-footer': true,
        [className]: className
    });
    return (React.createElement("div", Object.assign({ className: cls }, others), children));
};
export default Footer;
