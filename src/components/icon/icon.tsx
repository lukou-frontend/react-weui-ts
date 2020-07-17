import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import deprecationWarning from '../../utils/deprecationWarning';

interface deprecateValue {
  [key: string]: string
}
const deprecateValue:deprecateValue = {
    'safe_success': 'safe-success',
    'safe_warn': 'safe-warn',
    'success_circle': 'success-circle',
    'success_no_circle': 'success-no-circle',
    'waiting_circle': 'waiting-circle',
    'info_circle': 'info-circle'
};

/**
 * WeUI Icons
 *
 */
interface IconProps {
  size?: 'small' | 'large',
  value: string,
  className?: any,
  primary?: any,
  [key: string]: any
}
class Icon extends React.Component<IconProps> {
    static propTypes = {
        /**
         * types of [weui icons](https://github.com/weui/weui/wiki/Icon)
         *
         */
        value: PropTypes.string,
        /**
         * size of icon, options: small/large
         *
         */
        size: PropTypes.string
    };

    static defaultProps = {
        value: 'success' as IconProps['value'],
        size: 'small' as IconProps['size']
    };

    render() {
        const {value, size, className, primary, ...others} = this.props;

        if (Object.keys(deprecateValue).indexOf(value) !== -1){
            deprecationWarning(`Icon ${value}`, `Icon ${deprecateValue[value]}`, null);
        }

        const cls = classNames({
            ['weui-icon-' + value]: value !== 'loading',
            'weui-icon_msg': size === 'large' && !primary,
            'weui-icon_msg-primary': size === 'large' && primary,
            'weui-loading': value === 'loading',
            [className]: className
        });

        return (
            <i {...others} className={cls} />
        );
    }
}

export default Icon;
