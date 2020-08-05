import * as React from 'react';
import PropTypes from 'prop-types';
interface ButtonAreaProps {
    direction: 'veritical' | 'horizontal';
    className?: string;
    children: React.ReactNode;
}
declare function ButtonArea(props: ButtonAreaProps): JSX.Element;
declare namespace ButtonArea {
    var propTypes: {
        /**
         * 'veritical'|'horizontal'
         *
         */
        direction: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        direction: string;
    };
}
export default ButtonArea;
