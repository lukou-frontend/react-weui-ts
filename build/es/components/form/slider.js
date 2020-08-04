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
import ReactDOM from 'react-dom';
import classNames from '../../utils/classnames';

var Slider = /*#__PURE__*/function (_React$Component) {
  _inherits(Slider, _React$Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value ? _this.props.value : _this.props.defaultValue ? _this.props.defaultValue : 0,
      controlled: typeof _this.props.value !== 'undefined',
      totalWidth: 0,
      touching: false,
      ogX: 0,
      touchId: undefined,
      percent: _this.props.value ? _this.props.value / (_this.props.max - _this.props.min) * 100 : _this.props.defaultValue ? _this.props.defaultValue / (_this.props.max - _this.props.min) * 100 : 0,
      animating: false
    };
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    _this.handleTouchMove = _this.handleTouchMove.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    _this.updateValue = _this.updateValue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.value === 0) this.updateValue();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.controlled) {
        if (nextProps.value <= this.props.max && nextProps.value >= this.props.min) {
          var percent = nextProps.value / (this.props.max - this.props.min) * 100;
          this.setState({
            value: nextProps.value,
            percent: percent
          });
        }
      }
    }
  }, {
    key: "updateValue",
    value: function updateValue() {
      var _this2 = this;

      var snap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var value = 0;
      var percent = this.state.percent,
          _this$props = this.props,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step,
          onChange = _this$props.onChange,
          steps = (max - min) / step,
          perPercent = 100 / steps;

      if (percent === 100) {
        value = max;
      } else if (percent === 0) {
        value = min;
      } else {
        for (var i = 0; i < steps; i++) {
          //over 50 margin than next
          if (percent > i * perPercent && percent <= (i + 1) * perPercent) {
            value = percent - i * perPercent > perPercent / 2 ? (i + 1) * step + min : i * step + min;
          }
        }
      }

      if (value !== this.state.value) {
        this.setState({
          value: value
        });
        if (onChange) onChange(value);
      }

      if (snap) {
        this.setState({
          percent: value === min ? 0 : value === max ? 100 : (value - min) / step * perPercent,
          animating: true
        }, function () {
          return _this2.setState({
            animating: false
          });
        });
      }
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      if (this.state.touching || this.props.disabled) return;
      var barDOM = ReactDOM.findDOMNode(this.refs.bar);
      this.setState({
        touching: true,
        touchId: e.targetTouches[0].identifier,
        totalWidth: barDOM.clientWidth,
        ogX: e.targetTouches[0].pageX,
        ogPercent: this.state.percent
      });
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      var _this3 = this;

      if (!this.state.touching || this.props.disabled) return;
      if (e.targetTouches[0].identifier !== this.state.touchId) return;
      if (typeof this.state.ogPercent === 'undefined') return;
      var pageX = e.targetTouches[0].pageX;
      var diffX = pageX - this.state.ogX;
      var percent = diffX / this.state.totalWidth * 100 + this.state.ogPercent;
      percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;
      this.setState({
        percent: percent
      }, function () {
        return _this3.updateValue();
      });
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd() {
      if (!this.state.touching || this.props.disabled) return;

      if (this.props.snapToValue) {
        this.updateValue(true);
      }

      this.setState({
        touching: false,
        ogX: 0,
        touchId: undefined,
        ogPercent: 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          className = _a.className,
          max = _a.max,
          min = _a.min,
          step = _a.step,
          showValue = _a.showValue,
          value = _a.value,
          disabled = _a.disabled,
          defaultValue = _a.defaultValue,
          onChange = _a.onChange,
          snapToValue = _a.snapToValue,
          domProps = __rest(_a, ["className", "max", "min", "step", "showValue", "value", "disabled", "defaultValue", "onChange", "snapToValue"]);

      var cls = classNames('weui-slider-box', className);
      var trackStyles = {
        width: "".concat(this.state.percent, "%")
      };
      var handlerStyles = {
        left: "".concat(this.state.percent, "%"),
        transition: this.state.animating ? 'transform .3s' : 'none',
        touchAction: 'none'
      };
      return /*#__PURE__*/React.createElement("div", {
        className: cls
      }, /*#__PURE__*/React.createElement("div", _extends({
        className: "weui-slider"
      }, domProps), /*#__PURE__*/React.createElement("div", {
        className: "weui-slider__inner",
        ref: "bar"
      }, /*#__PURE__*/React.createElement("div", {
        style: trackStyles,
        className: "weui-slider__track"
      }), /*#__PURE__*/React.createElement("div", {
        style: handlerStyles,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        className: "weui-slider__handler"
      }))), showValue ? /*#__PURE__*/React.createElement("div", {
        className: "weui-slider-box__value"
      }, this.state.value) : false);
    }
  }]);

  return Slider;
}(React.Component);

Slider.propTypes = {
  /**
   * max value of the slider
   *
   */
  max: PropTypes.number,

  /**
   * min value of the slider
   *
   */
  min: PropTypes.number,

  /**
   * the offset between two number in the slider
   *
   */
  step: PropTypes.number,

  /**
   * display the value indicator
   *
   */
  showValue: PropTypes.bool,

  /**
   * whether input is disabled
   *
   */
  disabled: PropTypes.bool,

  /**
   * slider value when use as controll element
   *
   */
  value: PropTypes.number,

  /**
   * slider value when use as non-controll element, use with onChange
   *
   */
  defaultValue: PropTypes.number,

  /**
   * callback when slider value change, pass value and event instance
   *
   */
  onChange: PropTypes.func,

  /**
   * callback when slider value change, pass value and event instance
   *
   */
  snapToValue: PropTypes.bool
};
Slider.defaultProps = {
  max: 100,
  min: 0,
  step: 1,
  showValue: true,
  disabled: false,
  defaultValue: 0,
  snapToValue: true
};
export default Slider;