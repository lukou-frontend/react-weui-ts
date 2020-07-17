import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * consists of `footer_links`, `footer_link` and `footer_text`
 *
 */
interface FooterProps {
  className?: any,
  children?: React.ReactNode
}
const Footer:React.FC<FooterProps> = (props) => {
    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-footer': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
};

export default Footer;