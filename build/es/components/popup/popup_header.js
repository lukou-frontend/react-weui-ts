import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

var PopupHeader = function PopupHeader(props) {
  var left = props.left,
      right = props.right,
      leftOnClick = props.leftOnClick,
      rightOnClick = props.rightOnClick,
      className = props.className,
      style = props.style;
  var cls = classNames('weui-popup__hd', className);
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: style
  }, /*#__PURE__*/React.createElement("a", {
    className: "weui-popup__action",
    onClick: leftOnClick
  }, left), /*#__PURE__*/React.createElement("a", {
    className: "weui-popup__action",
    onClick: rightOnClick
  }, right));
};

PopupHeader.propTypes = {
  /**
   * left button label
   *
   */
  left: PropTypes.string,

  /**
   * right button label
   *
   */
  right: PropTypes.string,

  /**
   * left button onclick
   *
   */
  leftOnClick: PropTypes.func,

  /**
   * right button onclick
   *
   */
  rightOnClick: PropTypes.func
};
PopupHeader.defaultProps = {
  left: '',
  right: ''
};
export default PopupHeader;