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
import LoadMore from '../loadmore';
import './infiniteloader.less';

var InfiniteLoader = /*#__PURE__*/function (_React$Component) {
  _inherits(InfiniteLoader, _React$Component);

  var _super = _createSuper(InfiniteLoader);

  function InfiniteLoader(props) {
    var _this;

    _classCallCheck(this, InfiniteLoader);

    _this = _super.call(this, props);
    _this.state = {
      loading: false,
      finish: false,
      scrollTimer: null
    };
    _this.scrollHandle = _this.scrollHandle.bind(_assertThisInitialized(_this));
    _this.resolveLoading = _this.resolveLoading.bind(_assertThisInitialized(_this));
    _this.finish = _this.finish.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InfiniteLoader, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.resetStatus) {
        this.reset();
      }

      if (nextProps.resolveStatus) {
        this.resolveLoading();
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        loading: false,
        finish: false
      });
    }
  }, {
    key: "finish",
    value: function finish() {
      this.setState({
        loading: false,
        finish: true
      });
    }
  }, {
    key: "resolveLoading",
    value: function resolveLoading() {
      this.setState({
        loading: false,
        finish: false
      });
    }
  }, {
    key: "scrollHandle",
    value: function scrollHandle(e) {
      var _this2 = this;

      if (this.props.onScroll) this.props.onScroll(e);
      if (this.state.loading || this.state.finish || this.props.disable || e.target.scrollTop === 0) return; //setup for scrollend event

      clearTimeout(this.state.scrollTimer);
      this.setState({
        scrollTimer: setTimeout(function () {
          if (_this2.props.onScrollEnd) _this2.props.onScrollEnd();
        }, 150)
      });
      var target = e.target;
      var scrollPercent = Math.floor((target.scrollTop + target.clientHeight) / target.scrollHeight * 100);

      if (scrollPercent > this.props.triggerPercent) {
        this.setState({
          loading: true
        });
        this.props.onLoadMore(this.resolveLoading, this.finish);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          className = _a.className,
          height = _a.height,
          triggerPercent = _a.triggerPercent,
          disable = _a.disable,
          resetStatus = _a.resetStatus,
          resolveStatus = _a.resolveStatus,
          loaderLoadingIcon = _a.loaderLoadingIcon,
          loaderDefaultIcon = _a.loaderDefaultIcon,
          onScrollEnd = _a.onScrollEnd,
          onScroll = _a.onScroll,
          onLoadMore = _a.onLoadMore,
          domProps = __rest(_a, ["children", "className", "height", "triggerPercent", "disable", "resetStatus", "resolveStatus", "loaderLoadingIcon", "loaderDefaultIcon", "onScrollEnd", "onScroll", "onLoadMore"]);

      var clx = classNames('react-weui-infiniteloader', className);
      var containerStyle = {
        height: height
      };
      var contentStyle = {
        overflow: disable ? 'hidden' : 'scroll'
      };
      var loaderStyle = {
        display: this.state.loading || this.state.finish ? 'block' : 'none'
      };
      return /*#__PURE__*/React.createElement("div", _extends({
        className: clx,
        style: containerStyle,
        onScroll: this.scrollHandle
      }, domProps), /*#__PURE__*/React.createElement("div", {
        className: "react-weui-infiniteloader__content",
        style: contentStyle
      }, children, /*#__PURE__*/React.createElement("div", {
        style: loaderStyle
      }, this.state.finish ? loaderDefaultIcon : this.state.loading ? loaderLoadingIcon : false)));
    }
  }]);

  return InfiniteLoader;
}(React.Component);

InfiniteLoader.propTypes = {
  /**
   * height for the container, use string like '10px', default for '100vh'
   *
   */
  height: PropTypes.string,

  /**
   * element(icon) for default loader when there is no more content
   *
   */
  loaderDefaultIcon: PropTypes.object,

  /**
   * element(icon) for loading loader
   *
   */
  loaderLoadingIcon: PropTypes.object,

  /**
   * percentage of scrollTop to trigger loading
   *
   */
  triggerPercent: PropTypes.number,

  /**
   * callback when user scroll the content, pass event
   *
   */
  onScroll: PropTypes.func,

  /**
   * callback when user did not scroll for 150ms
   *
   */
  onScrollEnd: PropTypes.func,

  /**
   * callback when it's requesting for more content, pass resolve function and finish function
   *
   */
  onLoadMore: PropTypes.func,

  /**
   * disable the loader
   *
   */
  disable: PropTypes.bool,

  /**
   * reset the finish status
   */
  resetStatus: PropTypes.bool,
  resolveStatus: PropTypes.bool
};
InfiniteLoader.defaultProps = {
  height: '100vh',
  triggerPercent: 75,
  loaderLoadingIcon: /*#__PURE__*/React.createElement(LoadMore, {
    loading: true
  }, " Loading... "),
  loaderDefaultIcon: /*#__PURE__*/React.createElement(LoadMore, {
    showLine: true
  }, " No Data"),
  disable: false,
  resetStatus: false,
  resolveStatus: false
};
export default InfiniteLoader;