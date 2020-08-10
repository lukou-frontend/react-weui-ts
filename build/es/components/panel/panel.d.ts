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
    style?: React.CSSProperties;
    [key: string]: any;
}
declare function Panel(props: PanelProps): JSX.Element;
declare namespace Panel {
    var propTypes: {
        /**
         * deprecated property from 0.4.x
         *
         */
        access: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        access: boolean;
    };
}
export default Panel;
