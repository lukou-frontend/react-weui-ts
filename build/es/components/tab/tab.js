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
import TabBody from './tab_body';
import TabBodyItem from './tab_body_item';
import NavBar from './navbar';
import NavBarItem from './navbar_item';
import TabBar from './tabbar';
import TabBarItem from './tabbar_item';

var Tab = /*#__PURE__*/function (_React$Component) {
  _inherits(Tab, _React$Component);

  var _super = _createSuper(Tab);

  function Tab() {
    var _this;

    _classCallCheck(this, Tab);

    _this = _super.apply(this, arguments);
    _this.state = {
      index: _this.props.defaultIndex
    };
    return _this;
  }

  _createClass(Tab, [{
    key: "handleHeaderClick",
    value: function handleHeaderClick(idx) {
      this.setState({
        index: idx
      });
      if (this.props.onChange) this.props.onChange(idx);
    }
  }, {
    key: "parseChild",
    value: function parseChild(childrenInput) {
      var ChildHeaders = [];
      var ChildContents = [];
      React.Children.map(childrenInput, function (child) {
        if (!child) return;
        var children = child.props.children;

        if (child.type === TabBarItem || child.type === NavBarItem) {
          ChildHeaders.push(child);
          if (children) ChildContents.push( /*#__PURE__*/React.createElement(TabBodyItem, {
            children: children
          }));
        } else if (child.type === TabBodyItem) {
          ChildContents.push(child);
        }
      });
      return {
        ChildHeaders: ChildHeaders,
        ChildContents: ChildContents
      };
    }
  }, {
    key: "renderBar",
    value: function renderBar(type, children, cls) {
      var _this2 = this;

      var _this$parseChild = this.parseChild(children),
          ChildHeaders = _this$parseChild.ChildHeaders,
          ChildContents = _this$parseChild.ChildContents;

      var _headers = ChildHeaders.map(function (item, idx) {
        return /*#__PURE__*/React.cloneElement(item, {
          key: idx,
          active: _this2.state.index === idx,
          onClick: _this2.handleHeaderClick.bind(_this2, idx, item)
        });
      });

      var _contents = ChildContents.map(function (item, idx) {
        return /*#__PURE__*/React.cloneElement(item, {
          key: idx,
          active: _this2.state.index === idx,
          tabIndex: idx
        });
      });

      if (type === 'tabbar') {
        return /*#__PURE__*/React.createElement("div", {
          className: cls
        }, /*#__PURE__*/React.createElement(TabBody, null, _contents), /*#__PURE__*/React.createElement(TabBar, null, _headers));
      } else if (type === 'navbar') {
        return /*#__PURE__*/React.createElement("div", {
          className: cls
        }, /*#__PURE__*/React.createElement(NavBar, null, _headers), /*#__PURE__*/React.createElement(TabBody, null, _contents));
      } else {
        return false;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          className = _a.className,
          type = _a.type,
          others = __rest(_a, ["children", "className", "type"]);

      var divProps = _extends({}, others);

      delete divProps.defaultIndex;
      delete divProps.onChange;
      var cls = classNames({
        'weui-tab': true
      }, className);

      if (type === 'normal') {
        return /*#__PURE__*/React.createElement("div", _extends({
          className: cls
        }, divProps), children);
      } else {
        return this.renderBar(type, children, cls);
      }
    }
  }]);

  return Tab;
}(React.Component);

export { Tab as default };
Tab.propTypes = {
  /**
   * layout of the tab, auto mount components when set to `navbar` or `tabbar`
   *
   */
  type: PropTypes.string,

  /**
   * default select index
   *
   */
  defaultIndex: PropTypes.number,
  onChange: PropTypes.func
};
Tab.defaultProps = {
  type: 'normal',
  defaultIndex: 0
};