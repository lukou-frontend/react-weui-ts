import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import deprecationWarning from '../../utils/deprecationWarning';

interface DeprecateValue {
    [key: string]: string;
}
const deprecateValue: DeprecateValue = {
    safe_success: 'safe-success',
    safe_warn: 'safe-warn',
    success_circle: 'success-circle',
    success_no_circle: 'success-no-circle',
    waiting_circle: 'waiting-circle',
    info_circle: 'info-circle',
};

/**
 * WeUI Icons
 *
 */
export type SizeType = 'small' | 'large';
interface IconProps {
    size?: SizeType;
    value: string;
    className?: any;
    primary?: any;
    [key: string]: any;
}
function Icon(props: IconProps) {
    const { value, size, className, primary, ...others } = props;
    if (Object.keys(deprecateValue).indexOf(value) !== -1) {
        deprecationWarning(
            `Icon ${value}`,
            `Icon ${deprecateValue[value]}`,
            null,
        );
    }

    const cls = classNames({
        [`weui-icon-${value}`]: value !== 'loading',
        'weui-icon_msg': size === 'large' && !primary,
        'weui-icon_msg-primary': size === 'large' && primary,
        'weui-loading': value === 'loading',
        [className]: className,
    });

    return <i {...others} className={cls} />;
}
Icon.propTypes = {
    /**
     * types of [weui icons](https://github.com/weui/weui/wiki/Icon)
     *
     */
    value: PropTypes.string,
    /**
     * size of icon, options: small/large
     *
     */
    size: PropTypes.string,
};

Icon.defaultProps = {
    value: 'success' as IconProps['value'],
    size: 'small' as IconProps['size'],
};

export default Icon;
