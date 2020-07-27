import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Icon from '../icon';
const Progress = (props) => {
    const { className = '', showCancel, value, onClick, ...others } = props;
    const cls = classNames({
        'weui-progress': true,
        [className]: className
    });
    let pgWdith = value > 100 ? 100 : value < 0 ? 0 : value;
    return (React.createElement("div", Object.assign({ className: cls }, others),
        React.createElement("div", { className: "weui-progress__bar" },
            React.createElement("div", { className: "weui-progress__inner-bar", style: { width: `${pgWdith}%` } })),
        showCancel ?
            React.createElement("a", { href: "javascript:;", className: "weui-progress__opr", onClick: e => { if (onClick)
                    onClick(e); } },
                React.createElement(Icon, { value: "cancel" }))
            : false));
};
Progress.propTypes = {
    /**
     * value of the bar
     *
     */
    value: PropTypes.number,
    /**
     * enable cancel button
     *
     */
    showCancel: PropTypes.bool
};
Progress.defaultProps = {
    value: 0,
    showCancel: true
};
export default Progress;
