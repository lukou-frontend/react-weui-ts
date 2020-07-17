//1.0.0 components
import * as React from 'react';
import PropTypes from 'prop-types';
const FlexItem = (props) => {
    const { component, children, ...others } = props;
    const Component = component;
    return (React.createElement(Component, Object.assign({ className: "weui-flex__item" }, others), children));
};
FlexItem.propTypes = {
    /**
     * pass component to replace the component but maintaing style
     *
     */
    component: PropTypes.node
};
FlexItem.defaultProps = {
    component: 'div'
};
export default FlexItem;
