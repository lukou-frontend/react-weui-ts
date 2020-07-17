import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
export default class TabBodyItem extends React.Component {
    render() {
        const { children, className, active, ...others } = this.props;
        const cls = classNames({
            'weui-tab__bd-item': true
        }, className);
        return (React.createElement("div", Object.assign({ className: cls, style: { display: active ? 'block' : 'none' } }, others), children));
    }
}
TabBodyItem.propTypes = {
    /**
     * display this component
     *
     */
    active: PropTypes.bool
};
TabBodyItem.defaultProps = {
    active: false
};
