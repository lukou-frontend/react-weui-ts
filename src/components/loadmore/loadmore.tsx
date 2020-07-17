/*
 * @Author: 刘佑祥
 * @LastEditors: 刘佑祥
 * @LastEditTime: 2020-07-16 18:04:26
 */ 
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Icon from '../icon';

/**
 * Loadmore Indicators.
 *
 */
interface LoadMoreProps {
  className?: any,
  loading?: boolean,
  showLine?: boolean,
  showDot?: boolean,
  children: React.ReactNode
}
const LoadMore = (props: LoadMoreProps) => {

    const { className, children, loading, showLine, showDot, ...others } = props;
    const cls = classNames({
        'weui-loadmore': true,
        'weui-loadmore_line': showLine,
        'weui-loadmore_dot': showDot,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            { loading ? <Icon value='loading' /> : false }
            <span className="weui-loadmore__tips">
            { children }
            </span>
        </div>
    );
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
    loading: false as LoadMoreProps['loading'],
    showLine: false as LoadMoreProps['showLine'],
    showDot: false as LoadMoreProps['showDot']
};

export default LoadMore;
