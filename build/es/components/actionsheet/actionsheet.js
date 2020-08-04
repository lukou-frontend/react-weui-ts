import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _createSuper from "@babel/runtime/helpers/createSuper";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Mask from '../mask/index';
import './actionsheet.less';

var ActionSheet = /*#__PURE__*/function (_React$Component) {
  _inherits(ActionSheet, _React$Component);

  var _super = _createSuper(ActionSheet);

  function ActionSheet(props) {
    var _this;

    _classCallCheck(this, ActionSheet);

    _this = _super.call(this, props);
    _this.handleMaskClick = _this.handleMaskClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ActionSheet, [{
    key: "renderMenuItem",
    value: function renderMenuItem() {
      return this.props.menus.map(function (menu, idx) {
        var label = menu.label,
            _menu$className = menu.className,
            className = _menu$className === void 0 ? '' : _menu$className,
            others = __rest(menu, ["label", "className"]);

        var cls = classNames(_defineProperty({
          'weui-actionsheet__cell': true
        }, className, className));
        return /*#__PURE__*/React.createElement("div", _extends({
          key: idx
        }, others, {
          className: cls
        }), label);
      });
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      return this.props.actions.map(function (action, idx) {
        var label = action.label,
            _action$className = action.className,
            className = _action$className === void 0 ? '' : _action$className,
            others = __rest(action, ["label", "className"]);

        var cls = classNames(_defineProperty({
          'weui-actionsheet__cell': true
        }, className, className));
        return /*#__PURE__*/React.createElement("div", _extends({
          key: idx
        }, others, {
          className: cls
        }), label);
      });
    }
  }, {
    key: "handleMaskClick",
    value: function handleMaskClick(e) {
      if (this.props.onRequestClose) this.props.onRequestClose(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          show = _a.show,
          type = _a.type,
          onRequestClose = _a.onRequestClose,
          menus = _a.menus,
          actions = _a.actions,
          others = __rest(_a, ["show", "type", "onRequestClose", "menus", "actions"]);

      var cls = classNames({
        'weui-actionsheet': true,
        'weui-actionsheet_toggle': show
      });
      var styleType = type ? type : 'ios';
      return /*#__PURE__*/React.createElement("div", {
        className: styleType === 'android' ? 'weui-skin_android' : ''
      }, /*#__PURE__*/React.createElement(Mask, {
        style: {
          display: show ? 'block' : 'none'
        },
        onClick: this.handleMaskClick
      }), /*#__PURE__*/React.createElement("div", _extends({
        className: cls
      }, others), /*#__PURE__*/React.createElement("div", {
        className: "weui-actionsheet__menu"
      }, this.renderMenuItem()), /*#__PURE__*/React.createElement("div", {
        className: "weui-actionsheet__action"
      }, this.renderActions())));
    }
  }]);

  return ActionSheet;
}(React.Component);

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
  type: PropTypes.string
};
ActionSheet.defaultProps = {
  type: '',
  menus: [],
  actions: [],
  show: false
};
;
export default ActionSheet;