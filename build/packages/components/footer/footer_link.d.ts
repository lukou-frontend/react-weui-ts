import * as React from 'react';
/**
 * foot link wrapper for link
 *
 */
interface FooterLinkProps {
    className?: any;
    children?: React.ReactNode;
    href: string | undefined;
}
declare const FooterLink: (props: FooterLinkProps) => JSX.Element;
export default FooterLink;
