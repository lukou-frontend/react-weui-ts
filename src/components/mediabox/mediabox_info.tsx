import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import MediaBoxInfoMeta from './mediabox_info_meta';

/**
 * Info Items for MediaBox
 *
 */
interface Data {
    extra: boolean;
    label: string;
}
interface MediaBoxInfoProps {
    className?: any;
    data: Array<Data>;
    children: React.ReactNode;
}
export default class MediaBoxInfo extends React.Component<MediaBoxInfoProps> {
    static propTypes = {
        /**
         * automatically include Metas, object array of metas, property required: `extra`, `label`
         *
         */
        data: PropTypes.array,
    };

    static defaultProps = {
        data: [] as MediaBoxInfoProps['data'],
    };

    renderData() {
        const { data } = this.props;
        return data.map((meta, i: number) => {
            return (
                <MediaBoxInfoMeta key={i} extra={meta.extra}>
                    {meta.label}
                </MediaBoxInfoMeta>
            );
        });
    }

    render() {
        const { children, data, className, ...others } = this.props;
        const cls = classNames(
            {
                'weui-media-box__info': true,
            },
            className,
        );

        return (
            <ul className={cls} {...others}>
                {data.length > 0 ? this.renderData() : children}
            </ul>
        );
    }
}
