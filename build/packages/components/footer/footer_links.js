import * as React from 'react';
import classNames from '../../utils/classnames';
const FooterLinks = (props) => {
    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-footer__links': true,
        [className]: className
    });
    return (React.createElement("p", Object.assign({ className: cls }, others), children));
};
export default FooterLinks;
