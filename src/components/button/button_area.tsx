import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

interface ButtonAreaProps {
    direction: 'veritical' | 'horizontal';
    className?: string;
    children: React.ReactNode;
}
function ButtonArea(props: ButtonAreaProps) {
    const { direction, children, className = '' } = props;
    const cls = classNames({
        'weui-btn-area': true,
        'weui-btn-area_inline': direction === 'horizontal',
        [className]: className,
    });

    return <div className={cls}>{children}</div>;
}
ButtonArea.propTypes = {
    /**
     * 'veritical'|'horizontal'
     *
     */
    direction: PropTypes.string,
};
ButtonArea.defaultProps = {
    direction: 'vertical',
};

export default ButtonArea;
