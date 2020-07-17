import * as React from 'react';
import classNames from '../../utils/classnames';
const FooterLink = (props) => {
    const { className, children, href, ...others } = props;
    const cls = classNames({
        'weui-footer__link': true,
        [className]: className
    });
    return (React.createElement("a", Object.assign({ className: cls }, others, { href: href }), children));
};
export default FooterLink;
