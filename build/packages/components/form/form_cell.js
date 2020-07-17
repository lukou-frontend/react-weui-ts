import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import './touch_fix.less';
export default class FormCell extends React.Component {
    render() {
        const { className, children, radio, checkbox, vcode, warn, select, selectPos, ...others } = this.props;
        const cellDomProps = Object.assign({}, others);
        delete cellDomProps.switch;
        const cls = classNames({
            'weui-cell': true,
            'weui-cell_vcode': vcode,
            'weui-cell_warn': warn,
            'weui-cell_switch': this.props.switch,
            'weui-cell_select': select,
            'weui-cell_select-before': selectPos === 'before',
            'weui-cell_select-after': selectPos === 'after',
            'weui-check__label': radio || checkbox,
            [className]: className
        });
        if (radio || checkbox) {
            return (React.createElement("label", Object.assign({ className: cls }, cellDomProps), children));
        }
        else {
            return (React.createElement("div", Object.assign({ className: cls }, cellDomProps), children));
        }
    }
}
FormCell.propTypes = {
    /**
     * if cell use for vcode
     *
     */
    vcode: PropTypes.bool,
    /**
     * display warn style of cell
     *
     */
    warn: PropTypes.bool,
    /**
     * if cell use for radio
     *
     */
    radio: PropTypes.bool,
    /**
     * if cell use for checkbox
     *
     */
    checkbox: PropTypes.bool,
    /**
     * if cell use for switch checkbox
     *
     */
    'switch': PropTypes.bool,
    /**
     * if cell use for select
     *
     */
    select: PropTypes.bool,
    /**
     * select position, options: before, after
     *
     */
    selectPos: PropTypes.string,
};
FormCell.defaultProps = {
    vcode: false,
    warn: false,
    radio: false,
    checkbox: false,
    select: false,
    switch: false,
    selectPos: undefined
};
;
