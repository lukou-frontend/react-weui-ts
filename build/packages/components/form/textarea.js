import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
export default class TextArea extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            textCounter: this.props.defaultValue ? this.props.defaultValue.length : 0
        };
    }
    handleChange(e) {
        this.setState({ textCounter: e.target.value.length });
        //forward event to props if any
        if (this.props.onChange)
            this.props.onChange(e);
    }
    render() {
        const { className, children, showCounter, maxLength, onChange, ...others } = this.props;
        const cls = classNames({
            'weui-textarea': true,
            [className]: className
        });
        return (React.createElement("div", null,
            React.createElement("textarea", Object.assign({ className: cls, maxLength: maxLength, onChange: this.handleChange.bind(this) }, others), children),
            showCounter ?
                React.createElement("div", { className: "weui-textarea-counter" },
                    React.createElement("span", null, this.state.textCounter),
                    maxLength ? '/' + maxLength : false)
                : false));
    }
}
TextArea.propTypes = {
    /**
     * display word counter
     *
     */
    showCounter: PropTypes.bool,
    /**
     * max character allow for textarea
     *
     */
    maxLength: PropTypes.number,
    defaultValue: PropTypes.string,
};
TextArea.defaultProps = {
    showCounter: true,
    defaultValue: undefined
};
;
