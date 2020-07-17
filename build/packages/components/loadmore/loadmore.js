/*
 * @Author: 刘佑祥
 * @LastEditors: 刘佑祥
 * @LastEditTime: 2020-07-16 18:04:26
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Icon from '../icon';
const LoadMore = (props) => {
    const { className, children, loading, showLine, showDot, ...others } = props;
    const cls = classNames({
        'weui-loadmore': true,
        'weui-loadmore_line': showLine,
        'weui-loadmore_dot': showDot,
        [className]: className
    });
    return (React.createElement("div", Object.assign({ className: cls }, others),
        loading ? React.createElement(Icon, { value: 'loading' }) : false,
        React.createElement("span", { className: "weui-loadmore__tips" }, children)));
};
LoadMore.propTypes = {
    /**
     * display laoding spinner
     *
     */
    loading: PropTypes.bool,
    /**
     * display side lines
     *
     */
    showLine: PropTypes.bool,
    /**
     * display dot in the center
     *
     */
    showDot: PropTypes.bool
};
LoadMore.defaultProps = {
    loading: false,
    showLine: false,
    showDot: false
};
export default LoadMore;
