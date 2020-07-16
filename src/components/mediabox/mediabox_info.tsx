import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import MediaBoxInfoMeta from './mediabox_info_meta';

/**
 * Info Items for MediaBox
 *
 */
interface Data {
  extra: string,
  label: string
}
interface MediaBoxInfoProps {
  className?: any,
  data: Array<Data>,
  children: React.ReactNode
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

    renderData(metas: any[]) {
        return metas.map((meta: { extra: boolean | undefined; label: React.ReactNode; }, i: string | number | undefined) => {
            return <MediaBoxInfoMeta key={i} extra={meta.extra}>{meta.label}</MediaBoxInfoMeta>;
        });
    }

    render() {
        const {children, data, className, ...others} = this.props;
        const cls = classNames({
            'weui-media-box__info': true
        }, className);

        return (
            <ul className={cls} {...others}>
                {data.length > 0 ? this.renderData(data) : children}
            </ul>
        );
    }
};
