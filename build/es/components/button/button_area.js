import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

function ButtonArea(props) {
  var direction = props.direction,
      children = props.children,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className;
  var cls = classNames(_defineProperty({
    'weui-btn-area': true,
    'weui-btn-area_inline': direction === 'horizontal'
  }, className, className));
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, children);
}

ButtonArea.propTypes = {
  /**
   * 'veritical'|'horizontal'
   *
   */
  direction: PropTypes.string
};
ButtonArea.defaultProps = {
  direction: 'vertical'
};
export default ButtonArea;