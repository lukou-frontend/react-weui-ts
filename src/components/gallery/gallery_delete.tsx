import * as React from 'react';
import classNames from '../../utils/classnames';
import Icon from '../icon';

/**
 * Wrapper for Gallery Delete Button
 *
 */
interface GalleryDeleteProps {
  className?: any,
  onClick?: (e:Event, i: number) => void
}
const GalleryDelete = (props: GalleryDeleteProps) => {
    const { className, onClick, ...others } = props;
    const cls = classNames({
        'weui-gallery__del': true,
        [className]: className
    });

    return (
        <a className={cls} {...others}>
            <Icon onClick={onClick} value="delete" className="weui-icon_gallery-delete" />
        </a>
    );
};

export default GalleryDelete;

