import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * Description of MediaBox
 *
 */
interface MediaBoxDescriptionProps {
  className?: any
}
export default class MediaBoxDescription extends React.Component<MediaBoxDescriptionProps> {
    render() {
        const {children, className, ...others} = this.props;
        const cls = classNames({
            'weui-media-box__desc': true
        }, className);

        return (
            <p className={cls} {...others}>{children}</p>
        );
    }
};