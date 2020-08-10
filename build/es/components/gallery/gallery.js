import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
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
import Swiper from '../swiper';

var Gallery = /*#__PURE__*/function (_React$Component) {
  _inherits(Gallery, _React$Component);

  var _super = _createSuper(Gallery);

  function Gallery(props) {
    var _this;

    _classCallCheck(this, Gallery);

    _this = _super.call(this, props);
    _this.state = {
      currentIndex: _this.props.defaultIndex
    };
    return _this;
  }

  _createClass(Gallery, [{
    key: "handleClick",
    value: function handleClick(func) {
      var _this2 = this;

      return function (e) {
        if (func) func(e, _this2.state.currentIndex);
      };
    }
  }, {
    key: "renderImages",
    value: function renderImages(imgs) {
      var _this3 = this;

      return /*#__PURE__*/React.createElement("div", {
        className: "weui-gallery__img"
      }, /*#__PURE__*/React.createElement(Swiper, {
        indicators: false,
        defaultIndex: this.props.defaultIndex,
        onChange: function onChange(next) {
          return _this3.setState({
            currentIndex: next
          });
        }
      }, imgs.map(function (img, i) {
        var imgStyle = {
          backgroundImage: "url(".concat(img, ")"),
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
        };
        return /*#__PURE__*/React.createElement("span", {
          key: i,
          style: imgStyle
        });
      })));
    }
  }, {
    key: "renderVideos",
    value: function renderVideos(videos) {
      var _this4 = this;

      return /*#__PURE__*/React.createElement("div", {
        className: "weui-gallery__img"
      }, /*#__PURE__*/React.createElement(Swiper, {
        indicators: false,
        defaultIndex: this.props.defaultIndex,
        onClick: this.props.onClick,
        onChange: function onChange(next) {
          return _this4.setState({
            currentIndex: next
          });
        }
      }, videos.map(function (video, i) {
        return /*#__PURE__*/React.createElement("video", {
          src: video,
          key: i,
          muted: true,
          autoPlay: true,
          loop: true
        });
      })));
    }
  }, {
    key: "renderOprs",
    value: function renderOprs() {
      var _this5 = this;

      if (Array.isArray(this.props.children)) {
        return this.props.children.map(function (child, i) {
          return /*#__PURE__*/React.cloneElement(child, {
            key: i,
            onClick: _this5.handleClick(child.props.onClick)
          });
        });
      }

      if (this.props.children) {
        return /*#__PURE__*/React.cloneElement(this.props.children, {
          onClick: this.handleClick(this.props.children.props.onClick)
        });
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          className = _a.className,
          show = _a.show,
          src = _a.src,
          defaultIndex = _a.defaultIndex,
          isVideo = _a.isVideo,
          others = __rest(_a, ["children", "className", "show", "src", "defaultIndex", "isVideo"]);

      var cls = classNames(_defineProperty({
        'weui-gallery': true
      }, className, className));
      var Swipe;

      if (Array.isArray(src) && !isVideo) {
        Swipe = this.renderImages(src);
      } else if (Array.isArray(src) && isVideo) {
        Swipe = this.renderVideos(src);
      } else {
        Swipe = /*#__PURE__*/React.createElement("span", {
          className: "weui-gallery__img",
          style: {
            backgroundImage: "url(".concat(src, ")")
          }
        });
      }

      if (!show) return false;
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls,
        style: {
          display: show ? 'block' : 'none'
        }
      }, others), Swipe, /*#__PURE__*/React.createElement("div", {
        className: "weui-gallery__opr"
      }, this.renderOprs()));
    }
  }]);

  return Gallery;
}(React.Component);

Gallery.propTypes = {
  /**
   * indicate whather the component is display
   *
   */
  show: PropTypes.bool,

  /**
   * image source, string for single element, array for multiple element
   *
   */
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  /**
   * indicate whather the component is display
   *
   */
  defaultIndex: PropTypes.number,

  /**
   * 是否为视频
   *
   */
  isVideo: PropTypes.bool,
  onClick: PropTypes.func
};
Gallery.defaultProps = {
  show: undefined,
  src: '',
  defaultIndex: 0,
  isVideo: false
};
export default Gallery;