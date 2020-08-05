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
import Icon from '../icon';
import LoadMore from '../loadmore';
import './ptr.less';

var PullToRefresh = /*#__PURE__*/function (_React$Component) {
  _inherits(PullToRefresh, _React$Component);

  var _super = _createSuper(PullToRefresh);

  function PullToRefresh(props) {
    var _this;

    _classCallCheck(this, PullToRefresh);

    _this = _super.call(this, props);
    _this.contentRef = /*#__PURE__*/React.createRef();
    _this.state = {
      pullPercent: 0,
      touching: false,
      ogY: 0,
      touchId: -1,
      animating: false,
      loading: false,
      initScrollTop: 0
    };
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    _this.handleTouchMove = _this.handleTouchMove.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    _this.resolveRefresh = _this.resolveRefresh.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PullToRefresh, [{
    key: "resolveRefresh",
    value: function resolveRefresh() {
      var _this2 = this;

      this.setState({
        loading: false,
        animating: true,
        pullPercent: 0
      }, function () {
        setTimeout(function () {
          return _this2.setState({
            animating: false
          });
        }, 500);
      });
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      if (this.state.touching || this.state.loading || this.props.disable) return;
      var $content = this.contentRef.current;
      this.setState(function (prevState) {
        return {
          touching: true,
          touchId: e.targetTouches[0].identifier,
          animating: false,
          initScrollTop: $content.scrollTop,
          ogY: prevState.pullPercent === 0 ? e.targetTouches[0].pageY : e.targetTouches[0].pageY - prevState.pullPercent
        };
      });
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      if (!this.state.touching || this.state.loading || this.props.disable) return;
      if (e.targetTouches[0].identifier !== this.state.touchId) return;
      var pageY = e.targetTouches[0].pageY; // eslint-disable-next-line react/no-access-state-in-setstate

      var diffY = pageY - this.state.ogY; //if it's scroll

      if (diffY < 0) return; //if it's not at top

      var $content = this.contentRef.current;
      if ($content.scrollTop > 0) return;
      diffY = diffY - this.state.initScrollTop > 100 ? 100 : diffY - this.state.initScrollTop;
      this.setState({
        pullPercent: diffY
      });
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd() {
      var _this3 = this;

      if (!this.state.touching || this.state.loading || this.props.disable) return;
      var pullPercent = this.state.pullPercent;
      var loading = false;

      if (pullPercent === 100) {
        loading = true;
      } else {
        pullPercent = 0;
      }

      this.setState({
        touching: false,
        ogY: 0,
        touchId: -1,
        initScrollTop: 0,
        animating: loading,
        pullPercent: pullPercent,
        loading: loading
      }, function () {
        //triger after ui change
        if (loading) _this3.props.onRefresh(_this3.resolveRefresh);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          className = _a.className,
          children = _a.children,
          height = _a.height,
          loaderHeight = _a.loaderHeight,
          loaderDefaultIcon = _a.loaderDefaultIcon,
          loaderLoadingIcon = _a.loaderLoadingIcon,
          onRefresh = _a.onRefresh,
          disable = _a.disable,
          domProps = __rest(_a, ["className", "children", "height", "loaderHeight", "loaderDefaultIcon", "loaderLoadingIcon", "onRefresh", "disable"]);

      var cls = classNames('react-weui-ptr', className);
      var containerStyle = {
        height: height
      };
      var loaderStyle = {
        //transform: `translate(0, ${this.state.pullPercent / 2}px)`,
        height: loaderHeight,
        marginTop: "".concat(-loaderHeight + this.state.pullPercent / (100 / loaderHeight), "px"),
        transition: this.state.animating ? 'all .5s' : 'none'
      };
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls,
        style: containerStyle
      }, domProps), /*#__PURE__*/React.createElement("div", {
        className: "react-weui-ptr__loader",
        style: loaderStyle
      }, this.state.loading ? loaderLoadingIcon : loaderDefaultIcon(this.state.pullPercent)), /*#__PURE__*/React.createElement("div", {
        className: "react-weui-ptr__content",
        style: {
          touchAction: 'none'
        },
        ref: this.contentRef,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd
      }, children));
    }
  }]);

  return PullToRefresh;
}(React.Component);

PullToRefresh.propTypes = {
  /**
   * height for the container, use string like '10px', default for '100%'
   *
   */
  height: PropTypes.string,

  /**
   * height for the loader
   *
   */
  loaderHeight: PropTypes.number,

  /**
   * element(icon) for default loader, function require, pass in pulldown progress
   *
   */
  loaderDefaultIcon: PropTypes.func,

  /**
   * element(icon) for loading loader
   *
   */
  loaderLoadingIcon: PropTypes.any,

  /**
   * callback when refresh is request, pass resolve function
   *
   */
  onRefresh: PropTypes.func,

  /**
   * disable the loader
   *
   */
  disable: PropTypes.bool
};
PullToRefresh.defaultProps = {
  height: '100%',
  loaderHeight: 100,
  loaderDefaultIcon: function loaderDefaultIcon(progress) {
    var style = {
      transform: "rotate(-".concat(progress !== 100 ? progress * 1.8 : 0, "deg)"),
      color: progress !== 100 ? '#5f5f5f' : '#1AAD19'
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: '5px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      value: progress !== 100 ? 'download' : 'success',
      style: style
    }));
  },
  loaderLoadingIcon: /*#__PURE__*/React.createElement(LoadMore, {
    loading: true
  }),
  onRefresh: function onRefresh(resolve) {
    return setTimeout(function () {
      return resolve();
    }, 1000);
  },
  disable: false
};
export default PullToRefresh;