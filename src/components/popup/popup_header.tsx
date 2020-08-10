import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 *  Sample Popup header for Popup
 *
 */
interface PopupHeaderProps {
    left: string;
    right: string;
    leftOnClick: () => void;
    rightOnClick: () => void;
    style?: React.CSSProperties;
    className?: any;
}
const PopupHeader = (props: PopupHeaderProps) => {
    const { left, right, leftOnClick, rightOnClick, className, style } = props;
    const cls = classNames('weui-popup__hd', className);
    return (
        <div className={cls} style={style}>
            <a className="weui-popup__action" onClick={leftOnClick}>
                {left}
            </a>
            <a className="weui-popup__action" onClick={rightOnClick}>
                {right}
            </a>
        </div>
    );
};

PopupHeader.propTypes = {
    /**
     * left button label
     *
     */
    left: PropTypes.string,
    /**
     * right button label
     *
     */
    right: PropTypes.string,
    /**
     * left button onclick
     *
     */
    leftOnClick: PropTypes.func,
    /**
     * right button onclick
     *
     */
    rightOnClick: PropTypes.func,
};

PopupHeader.defaultProps = {
    left: '',
    right: '',
};

export default PopupHeader;
