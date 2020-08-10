import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 * Media Object, Typically use with `Panel` to display pictures and text, consists of `MediaBoxBody`, `MediaBoxDescription`, `MediaBoxHeader`
 *
 */
interface MediaBoxProps {
    className?: any;
    type?: string;
    href?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}
export default function MediaBox(props: MediaBoxProps) {
    const { children, type, className, ...others } = props;
    const Component = props.href ? 'a' : 'div';
    const cls = classNames(
        {
            'weui-media-box': true,
            'weui-media-box_appmsg': type === 'appmsg',
            'weui-media-box_text': type === 'text',
            'weui-media-box_small-appmsg': type === 'small_appmsg',
        },
        className,
    );

    return (
        <Component className={cls} {...others}>
            {children}
        </Component>
    );
}
MediaBox.propTypes = {
    /**
     * The layout of media box, Options: appmsg/text/small_appmsg
     *
     */
    type: PropTypes.string,
};

MediaBox.defaultProps = {
    type: 'text' as MediaBoxProps['type'],
};
