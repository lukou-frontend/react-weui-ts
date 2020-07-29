import _extends from "@babel/runtime/helpers/extends";
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
import PickerGroup from './picker_group';
import classNames from '../../utils/classnames';
import Mask from '../mask';

var Picker = /*#__PURE__*/function (_React$Component) {
  _inherits(Picker, _React$Component);

  var _super = _createSuper(Picker);

  function Picker(props) {
    var _this;

    _classCallCheck(this, Picker);

    _this = _super.call(this, props);
    _this.state = {
      selected: _this.props.defaultSelect ? _this.props.defaultSelect : Array(_this.props.groups.length).fill(-1),
      actions: _this.props.actions.length > 0 ? _this.props.actions : [{
        label: _this.props.lang.leftBtn,
        onClick: function onClick(e) {
          return _this.handleClose(function () {
            if (_this.props.onCancel) _this.props.onCancel(e);
          });
        }
      }, {
        label: _this.props.lang.rightBtn,
        onClick: function onClick() {
          return _this.handleChanges();
        }
      }],
      closing: false
    };
    _this.handleChanges = _this.handleChanges.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Picker, [{
    key: "handleChanges",
    value: function handleChanges() {
      var _this2 = this;

      this.handleClose(function () {
        if (_this2.props.onChange) _this2.props.onChange(_this2.state.selected, _this2);
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(item, i, groupIndex) {
      var _this3 = this;

      var selected = this.state.selected;
      selected[groupIndex] = i;
      this.setState({
        selected: selected
      }, function () {
        if (_this3.props.onGroupChange) _this3.props.onGroupChange(item, i, groupIndex, _this3.state.selected, _this3);
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose(cb) {
      var _this4 = this;

      this.setState({
        closing: true
      }, function () {
        return setTimeout(function () {
          _this4.setState({
            closing: false
          });

          cb();
        }, 300);
      });
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var elActions = this.state.actions.map(function (action, i) {
        var label = action.label,
            others = __rest(action, ["label"]);

        return /*#__PURE__*/React.createElement("a", _extends({}, others, {
          key: i,
          className: "weui-picker__action"
        }), " ", label);
      });
      return /*#__PURE__*/React.createElement("div", {
        className: "weui-picker__hd"
      }, elActions);
    }
  }, {
    key: "renderGroups",
    value: function renderGroups() {
      var _this5 = this;

      return this.props.groups.map(function (group, i) {
        return /*#__PURE__*/React.createElement(PickerGroup, _extends({
          key: i
        }, group, {
          onChange: _this5.handleChange,
          groupIndex: i,
          defaultIndex: _this5.state.selected[i]
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _a = this.props,
          className = _a.className,
          show = _a.show,
          actions = _a.actions,
          groups = _a.groups,
          defaultSelect = _a.defaultSelect,
          onGroupChange = _a.onGroupChange,
          onChange = _a.onChange,
          onCancel = _a.onCancel,
          lang = _a.lang,
          others = __rest(_a, ["className", "show", "actions", "groups", "defaultSelect", "onGroupChange", "onChange", "onCancel", "lang"]);

      var cls = classNames('weui-picker', {
        'weui-animate-slide-up': show && !this.state.closing,
        'weui-animate-slide-down': this.state.closing
      }, className);
      var maskCls = classNames({
        'weui-animate-fade-in': show && !this.state.closing,
        'weui-animate-fade-out': this.state.closing
      });
      return this.props.show ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Mask, {
        className: maskCls,
        onClick: function onClick(e) {
          return _this6.handleClose(function () {
            if (_this6.props.onCancel) _this6.props.onCancel(e);
          });
        }
      }), /*#__PURE__*/React.createElement("div", _extends({
        className: cls
      }, others), this.renderActions(), /*#__PURE__*/React.createElement("div", {
        className: "weui-picker__bd"
      }, this.renderGroups()))) : false;
    }
  }]);

  return Picker;
}(React.Component);

Picker.propTypes = {
  /**
   * consists of array of object(max 2) with property `label` and others pass into element
   *
   */
  actions: PropTypes.array,

  /**
   * array objects consists of groups for each scroll group
   *
   */
  groups: PropTypes.array,

  /**
   * default group index thats selected, if not provide, automatic chose the best fiting item when mounted
   *
   */
  defaultSelect: PropTypes.array,

  /**
   * trigger when individual group change, pass property(`item`, `item index in group`, `group index in groups`, `selected`, `picker instance`)
   *
   */
  onGroupChange: PropTypes.func,

  /**
   * on selected change, pass property `selected` for array of slected index to `groups`
   *
   */
  onChange: PropTypes.func,

  /**
   * excute when the popup about to close
   *
   */
  onCancel: PropTypes.func,

  /**
   * display the component
   *
   */
  show: PropTypes.bool,

  /**
   * language object consists of `leftBtn` and `rightBtn`
   *
   */
  lang: PropTypes.object
};
Picker.defaultProps = {
  actions: [],
  groups: [],
  show: false,
  lang: {
    leftBtn: 'Cancel',
    rightBtn: 'Ok'
  }
};
export default Picker;