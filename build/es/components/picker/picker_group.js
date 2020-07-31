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
import classNames from '../../utils/classnames';

var PickerGroup = /*#__PURE__*/function (_React$Component) {
  _inherits(PickerGroup, _React$Component);

  var _super = _createSuper(PickerGroup);

  function PickerGroup(props) {
    var _this;

    _classCallCheck(this, PickerGroup);

    _this = _super.call(this, props);
    _this.state = {
      touching: false,
      ogY: 0,
      ogTranslate: 0,
      touchId: undefined,
      translate: 0,
      totalHeight: 0,
      selected: 0,
      animating: _this.props.animation
    };
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    _this.handleTouchMove = _this.handleTouchMove.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    _this.updateSelected = _this.updateSelected.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PickerGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.adjustPosition(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.adjustPosition(nextProps);
    }
  }, {
    key: "adjustPosition",
    value: function adjustPosition(props) {
      var _this2 = this;

      var items = props.items,
          itemHeight = props.itemHeight,
          indicatorTop = props.indicatorTop,
          defaultIndex = props.defaultIndex;
      var totalHeight = items.length * itemHeight;
      var translate = totalHeight <= indicatorTop ? indicatorTop : 0;

      if (defaultIndex > -1) {
        if (translate === 0) {
          var upperCount = Math.floor(indicatorTop / itemHeight);

          if (defaultIndex > upperCount) {
            //over
            var overCount = defaultIndex - upperCount;
            translate -= overCount * itemHeight;
          } else if (defaultIndex === upperCount) {
            translate = 0;
          } else {
            //less
            translate += Math.abs(upperCount - defaultIndex) * itemHeight;
          } //if(props.groupIndex == 2) console.log(defaultIndex,translate, upperCount)

        } else {
          //total item less than indicator height
          translate -= itemHeight * defaultIndex;
        }
      }

      this.setState({
        selected: defaultIndex,
        ogTranslate: translate,
        totalHeight: totalHeight,
        translate: translate
      }, function () {
        return defaultIndex > -1 ? _this2.updateSelected(false) : _this2.updateSelected();
      });
    }
  }, {
    key: "updateSelected",
    value: function updateSelected() {
      var _this3 = this;

      var propagate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var _this$props = this.props,
          items = _this$props.items,
          itemHeight = _this$props.itemHeight,
          indicatorTop = _this$props.indicatorTop,
          indicatorHeight = _this$props.indicatorHeight,
          onChange = _this$props.onChange,
          groupIndex = _this$props.groupIndex;
      var selected = 0;
      items.forEach(function (item, i) {
        //console.log(i, this.state.translate, (this.state.translate + (itemHeight * i)), indicatorTop, this.state.translate + (itemHeight * i) + itemHeight , indicatorTop + indicatorHeight)
        if (!item.disabled && _this3.state.translate + itemHeight * i >= indicatorTop && _this3.state.translate + itemHeight * i + itemHeight <= indicatorTop + indicatorHeight) {
          selected = i;
        }
      });
      if (onChange && propagate) onChange(items[selected], selected, groupIndex);
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      e.stopPropagation();
      if (this.state.touching || this.props.items.length <= 1) return;
      this.setState({
        touching: true,
        ogTranslate: this.state.translate,
        touchId: e.targetTouches[0].identifier,
        ogY: this.state.translate === 0 ? e.targetTouches[0].pageY : e.targetTouches[0].pageY - this.state.translate,
        animating: false
      });
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      e.stopPropagation();
      if (!this.state.touching || this.props.items.length <= 1) return;
      if (e.targetTouches[0].identifier !== this.state.touchId) return;
      var pageY = e.targetTouches[0].pageY;
      var diffY = pageY - this.state.ogY;
      this.setState({
        translate: diffY
      });
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd() {
      var _this4 = this;

      if (!this.state.touching || this.props.items.length <= 1) return;
      var _this$props2 = this.props,
          indicatorTop = _this$props2.indicatorTop,
          indicatorHeight = _this$props2.indicatorHeight,
          itemHeight = _this$props2.itemHeight;
      var translate = this.state.translate;

      if (Math.abs(translate - this.state.ogTranslate) < itemHeight * .51) {
        translate = this.state.ogTranslate;
      } else if (translate > indicatorTop) {
        //top boundry
        translate = indicatorTop;
      } else if (translate + this.state.totalHeight < indicatorTop + indicatorHeight) {
        //bottom
        translate = indicatorTop + indicatorHeight - this.state.totalHeight;
      } else {
        //pass single item range but not exceed boundry
        var step = 0,
            adjust = 0;
        var diff = (translate - this.state.ogTranslate) / itemHeight;

        if (Math.abs(diff) < 1) {
          step = diff > 0 ? 1 : -1;
        } else {
          adjust = Math.abs(diff % 1 * 100) > 50 ? 1 : 0;
          step = diff > 0 ? Math.floor(diff) + adjust : Math.ceil(diff) - adjust;
        }

        translate = this.state.ogTranslate + step * itemHeight;
      }

      this.setState({
        touching: false,
        ogY: 0,
        touchId: undefined,
        ogTranslate: 0,
        animating: true,
        translate: translate
      }, function () {
        return _this4.updateSelected();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _a = this.props,
          items = _a.items,
          className = _a.className,
          height = _a.height,
          itemHeight = _a.itemHeight,
          indicatorTop = _a.indicatorTop,
          indicatorHeight = _a.indicatorHeight,
          onChange = _a.onChange,
          aniamtion = _a.aniamtion,
          groupIndex = _a.groupIndex,
          defaultIndex = _a.defaultIndex,
          mapKeys = _a.mapKeys,
          others = __rest(_a, ["items", "className", "height", "itemHeight", "indicatorTop", "indicatorHeight", "onChange", "aniamtion", "groupIndex", "defaultIndex", "mapKeys"]);

      var cls = classNames('weui-picker__group', className);
      var styles = {
        'transform': "translate(0, ".concat(this.state.translate, "px)"),
        'transition': this.state.animating ? 'transform .3s' : 'none'
      };
      return /*#__PURE__*/React.createElement("div", _extends({
        style: {
          touchAction: 'none'
        },
        className: cls
      }, others, {
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd
      }), /*#__PURE__*/React.createElement("div", {
        className: "weui-picker__mask"
      }), /*#__PURE__*/React.createElement("div", {
        className: "weui-picker__indicator"
      }), /*#__PURE__*/React.createElement("div", {
        className: "weui-picker__content",
        style: styles,
        ref: "content"
      }, items.map(function (item, j) {
        var label = item[_this5.props.mapKeys.label];
        var itemCls = classNames('weui-picker__item', {
          'weui-picker__item_disabled': item.disabled
        });
        return /*#__PURE__*/React.createElement("div", {
          key: j,
          className: itemCls
        }, label);
      })));
    }
  }]);

  return PickerGroup;
}(React.Component);

PickerGroup.propTypes = {
  height: PropTypes.number,
  itemHeight: PropTypes.number,
  indicatorTop: PropTypes.number,
  indicatorHeight: PropTypes.number,
  onChange: PropTypes.func,
  aniamtion: PropTypes.bool,
  groupIndex: PropTypes.number,
  defaultIndex: PropTypes.number
};
PickerGroup.defaultProps = {
  height: 238,
  itemHeight: 25 + 9,
  indicatorTop: 102,
  indicatorHeight: 34,
  aniamtion: true,
  groupIndex: -1,
  defaultIndex: -1,
  mapKeys: {
    label: 'label'
  }
};
export default PickerGroup;