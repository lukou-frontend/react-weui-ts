import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * foot link wrapper for link
 *
 */
interface FooterLinkProps {
  className?: any,
  children?: React.ReactNode,
  href: string | undefined
}
const FooterLink = (props: FooterLinkProps) => {
    const { className, children, href, ...others } = props;
    const cls = classNames({
        'weui-footer__link': true,
        [className]: className
    });

    return (
        <a className={cls} {...others} href={href}>
            {children}
        </a>
    );
};

export default FooterLink;