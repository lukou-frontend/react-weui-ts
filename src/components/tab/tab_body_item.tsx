import * as React from 'react';
import PropTypes from 'prop-types';
import classNames, { ClassValue } from '../../utils/classnames';

/**
 * Content wrapper for each Tab Item
 */
interface TabBodyItemProps {
    active?: boolean;
    className?: ClassValue;
    children?: React.ReactNode;
}
export default function TabBodyItem(props: TabBodyItemProps) {
    const { children, className, active, ...others } = props;
    const cls = classNames(
        {
            'weui-tab__bd-item': true,
        },
        className,
    );

    return (
        <div
            className={cls}
            style={{ display: active ? 'block' : 'none' }}
            {...others}
        >
            {children}
        </div>
    );
}

TabBodyItem.propTypes = {
    /**
     * display this component
     *
     */
    active: PropTypes.bool,
};

TabBodyItem.defaultProps = {
    active: false,
};
