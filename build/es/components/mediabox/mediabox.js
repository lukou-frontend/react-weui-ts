import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
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

var MediaBox = /*#__PURE__*/function (_React$Component) {
  _inherits(MediaBox, _React$Component);

  var _super = _createSuper(MediaBox);

  function MediaBox() {
    _classCallCheck(this, MediaBox);

    return _super.apply(this, arguments);
  }

  _createClass(MediaBox, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          type = _a.type,
          className = _a.className,
          others = __rest(_a, ["children", "type", "className"]);

      var Component = this.props.href ? 'a' : 'div';
      var cls = classNames({
        'weui-media-box': true,
        'weui-media-box_appmsg': type === 'appmsg',
        'weui-media-box_text': type === 'text',
        'weui-media-box_small-appmsg': type === 'small_appmsg'
      }, className);
      return /*#__PURE__*/React.createElement(Component, _extends({
        className: cls
      }, others), children);
    }
  }]);

  return MediaBox;
}(React.Component);

export { MediaBox as default };
MediaBox.propTypes = {
  /**
   * The layout of media box, Options: appmsg/text/small_appmsg
   *
   */
  type: PropTypes.string
};
MediaBox.defaultProps = {
  type: 'text'
};
;