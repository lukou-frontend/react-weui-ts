import * as React from 'react';
import classNames from '../../utils/classnames';
import Icon from '../icon';
const GalleryDelete = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'weui-gallery__del': true,
        [className]: className
    });
    return (React.createElement("a", Object.assign({ className: cls }, others),
        React.createElement(Icon, { value: "delete", className: "weui-icon_gallery-delete" })));
};
export default GalleryDelete;
