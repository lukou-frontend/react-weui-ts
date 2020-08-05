import * as React from 'react';
import PropTypes from 'prop-types';
interface PreviewButtonProps {
    className?: string;
    primary: boolean;
    children: React.ReactNode;
    [key: string]: any;
}
declare const PreviewButton: {
    (props: PreviewButtonProps): JSX.Element;
    propTypes: {
        /**
         * 默认default，可选：true false
         *
         */
        primary: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        primary: boolean;
    };
};
export default PreviewButton;
