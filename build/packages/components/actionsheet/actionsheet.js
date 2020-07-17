import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Mask from '../mask/index';
import './actionsheet.less';
class ActionSheet extends React.Component {
    constructor(props) {
        super(props);
        this.handleMaskClick = this.handleMaskClick.bind(this);
    }
    renderMenuItem() {
        return this.props.menus.map((menu, idx) => {
            const { label, className = '', ...others } = menu;
            const cls = classNames({
                'weui-actionsheet__cell': true,
                [className]: className
            });
            return (React.createElement("div", Object.assign({ key: idx }, others, { className: cls }), label));
        });
    }
    renderActions() {
        return this.props.actions.map((action, idx) => {
            const { label, className = '', ...others } = action;
            const cls = classNames({
                'weui-actionsheet__cell': true,
                [className]: className
            });
            return (React.createElement("div", Object.assign({ key: idx }, others, { className: cls }), label));
        });
    }
    handleMaskClick(e) {
        if (this.props.onRequestClose)
            this.props.onRequestClose(e);
    }
    render() {
        const { show, type, onRequestClose, menus, actions, ...others } = this.props;
        const cls = classNames({
            'weui-actionsheet': true,
            'weui-actionsheet_toggle': show
        });
        let styleType = type ? type : 'ios';
        return (React.createElement("div", { className: styleType === 'android' ? 'weui-skin_android' : '' },
            React.createElement(Mask, { style: { display: show ? 'block' : 'none' }, onClick: this.handleMaskClick }),
            React.createElement("div", Object.assign({ className: cls }, others),
                React.createElement("div", { className: "weui-actionsheet__menu" }, this.renderMenuItem()),
                React.createElement("div", { className: "weui-actionsheet__action" }, this.renderActions()))));
    }
}
ActionSheet.propTypes = {
    /**
     * Array of Objects for menus, `label` property is Required
     *
     */
    menus: PropTypes.array,
    /**
     * Array of Objects for actions, `label` property is Required
     *
     */
    actions: PropTypes.array,
    /**
     * To display ActionSheet
     *
     */
    show: PropTypes.bool,
    /**
     * Function triggers when user click on the mask
     *
     */
    onRequestClose: PropTypes.func,
    /**
     * style: ios/android
     */
    type: PropTypes.string,
};
ActionSheet.defaultProps = {
    type: '',
    menus: [],
    actions: [],
    show: false,
};
;
export default ActionSheet;
