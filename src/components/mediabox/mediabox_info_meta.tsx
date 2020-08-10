import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 * Meta Item for `MeidaBoxInfo`
 *
 */
interface MediaBoxInfoMetaProps {
    className?: any;
    extra?: boolean;
    children?: React.ReactNode;
}
export default function MediaBoxInfoMeta(props: MediaBoxInfoMetaProps) {
    const { children, extra, className, ...others } = props;
    const cls = classNames(
        {
            'weui-media-box__info__meta': true,
            'weui-media-box__info__meta_extra': extra,
        },
        className,
    );

    return (
        <li className={cls} {...others}>
            {children}
        </li>
    );
}
MediaBoxInfoMeta.propTypes = {
    /**
     * add left margin to indicate extra
     *
     */
    extra: PropTypes.bool,
};

MediaBoxInfoMeta.defaultProps = {
    extra: false,
};
