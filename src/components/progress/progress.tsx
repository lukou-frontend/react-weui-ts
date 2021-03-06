import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Icon from '../icon';

/**
 *  progress bar
 *
 */
interface ProgressProps {
    className?: string;
    showCancel: boolean;
    value: number;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
const Progress = (props: ProgressProps) => {
    const { className = '', showCancel, value, onClick, ...others } = props;
    const cls = classNames({
        'weui-progress': true,
        [className]: className,
    });

    const pgWdith = value > 100 ? 100 : value < 0 ? 0 : value;

    return (
        <div className={cls} {...others}>
            <div className="weui-progress__bar">
                <div
                    className="weui-progress__inner-bar"
                    style={{ width: `${pgWdith}%` }}
                />
            </div>

            {showCancel ? (
                <a
                    href="#!"
                    className="weui-progress__opr"
                    onClick={(e) => {
                        if (onClick) onClick(e);
                    }}
                >
                    <Icon value="cancel" />
                </a>
            ) : (
                false
            )}
        </div>
    );
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
    showCancel: PropTypes.bool,
};

Progress.defaultProps = {
    value: 0,
    showCancel: true,
};

export default Progress;
