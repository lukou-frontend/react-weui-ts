import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _createSuper from "@babel/runtime/helpers/createSuper";
import * as React from 'react';
import classNames from '../../utils/classnames';

var ButtonArea = /*#__PURE__*/function (_React$Component) {
  _inherits(ButtonArea, _React$Component);

  var _super = _createSuper(ButtonArea);

  function ButtonArea() {
    _classCallCheck(this, ButtonArea);

    return _super.apply(this, arguments);
  }

  _createClass(ButtonArea, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          direction = _this$props.direction,
          children = _this$props.children,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className;
      var cls = classNames(_defineProperty({
        'weui-btn-area': true,
        'weui-btn-area_inline': direction === 'horizontal'
      }, className, className));
      return /*#__PURE__*/React.createElement("div", {
        className: cls
      }, children);
    }
  }]);

  return ButtonArea;
}(React.Component);

ButtonArea.defaultProps = {
  direction: 'vertical'
};
;
export default ButtonArea;