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
import MediaBoxInfoMeta from './mediabox_info_meta';

var MediaBoxInfo = /*#__PURE__*/function (_React$Component) {
  _inherits(MediaBoxInfo, _React$Component);

  var _super = _createSuper(MediaBoxInfo);

  function MediaBoxInfo() {
    _classCallCheck(this, MediaBoxInfo);

    return _super.apply(this, arguments);
  }

  _createClass(MediaBoxInfo, [{
    key: "renderData",
    value: function renderData() {
      var data = this.props.data;
      return data.map(function (meta, i) {
        return /*#__PURE__*/React.createElement(MediaBoxInfoMeta, {
          key: i,
          extra: meta.extra
        }, meta.label);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          data = _a.data,
          className = _a.className,
          others = __rest(_a, ["children", "data", "className"]);

      var cls = classNames({
        'weui-media-box__info': true
      }, className);
      return /*#__PURE__*/React.createElement("ul", _extends({
        className: cls
      }, others), data.length > 0 ? this.renderData() : children);
    }
  }]);

  return MediaBoxInfo;
}(React.Component);

export { MediaBoxInfo as default };
MediaBoxInfo.propTypes = {
  /**
   * automatically include Metas, object array of metas, property required: `extra`, `label`
   *
   */
  data: PropTypes.array
};
MediaBoxInfo.defaultProps = {
  data: []
};