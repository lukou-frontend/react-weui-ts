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

var MediaBoxInfoMeta = /*#__PURE__*/function (_React$Component) {
  _inherits(MediaBoxInfoMeta, _React$Component);

  var _super = _createSuper(MediaBoxInfoMeta);

  function MediaBoxInfoMeta() {
    _classCallCheck(this, MediaBoxInfoMeta);

    return _super.apply(this, arguments);
  }

  _createClass(MediaBoxInfoMeta, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          extra = _a.extra,
          className = _a.className,
          others = __rest(_a, ["children", "extra", "className"]);

      var cls = classNames({
        'weui-media-box__info__meta': true,
        'weui-media-box__info__meta_extra': extra
      }, className);
      return /*#__PURE__*/React.createElement("li", _extends({
        className: cls
      }, others), children);
    }
  }]);

  return MediaBoxInfoMeta;
}(React.Component);

export { MediaBoxInfoMeta as default };
MediaBoxInfoMeta.propTypes = {
  /**
   * add left margin to indicate extra
   *
   */
  extra: PropTypes.bool
};
MediaBoxInfoMeta.defaultProps = {
  extra: false
};
;