//1.0.0 components

import * as React from 'react';
import PropTypes from 'prop-types';

/**
 * Evenly distribute flex items
 *
 */
interface FlexItemProps {
  component: string,
  children?: React.ReactNode
}
const FlexItem = (props: FlexItemProps) => {
    const { component, children, ...others } = props;
    const Component = component as any;
    return (
        <Component className="weui-flex__item" {...others}>
            { children }
        </Component>
    );
};

FlexItem.propTypes = {
    /**
     * pass component to replace the component but maintaing style
     *
     */
    component: PropTypes.node
};

FlexItem.defaultProps = {
    component: 'div' as FlexItemProps['component']
};

export default FlexItem;
