'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Evenly distribute flex items
 *
 */
//1.0.0 components

var FlexItem = function FlexItem(props) {
    var Component = props.Component,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['Component', 'children']);

    return _react2.default.createElement(
        Component,
        (0, _extends3.default)({ className: 'weui-flex__item' }, others),
        children
    );
};

FlexItem.propTypes = {
    /**
     * pass component to replace the component but maintaing style
     *
     */
    Component: _propTypes2.default.node
};

FlexItem.defaultProps = {
    Component: 'div'
};

exports.default = FlexItem;
module.exports = exports['default'];