import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * Panel Object, consists of `PanelHeader`, `PanelBody` and `PanelFooter`
 *
 */
interface PanelProps {
    access?: boolean;
    className?: any;
    children: React.ReactNode;
}
export default class Panel extends React.Component<PanelProps> {
    static propTypes: {
        /**
         * deprecated property from 0.4.x
         *
         */
        access: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        access: boolean;
    };
    render(): JSX.Element;
}
export {};
