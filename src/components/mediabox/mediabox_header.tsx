import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * Header of MediaBox, if detects Img tag inside content will automatically adds corresponding class
 *
 */
interface MediaBoxHeaderProps {
    className?: '';
}
export default class MediaBoxHeader extends React.Component<
    MediaBoxHeaderProps
> {
    render() {
        const { children, className, ...others } = this.props;
        const clz = classNames(
            {
                'weui-media-box__hd': true,
            },
            className,
        );

        const childrenWithProps = React.Children.map(
            children,
            (child: React.ReactElement) => {
                if (child.type === 'img' && !child.props.className) {
                    return React.cloneElement(child, {
                        className: 'weui-media-box__thumb',
                    });
                }
                return child;
            },
        );

        return (
            <div className={clz} {...others}>
                {childrenWithProps}
            </div>
        );
    }
}
