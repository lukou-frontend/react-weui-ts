//1.0.0 components

import * as React from 'react';

/**
 * FlexItem Container
 *
 */
interface FlexProps {
  className?: any,
  children?: React.ReactNode
}
const Flex = (props: FlexProps) => (
    <div className="weui-flex" {...props}>
        { props.children }
    </div>
);

export default Flex;