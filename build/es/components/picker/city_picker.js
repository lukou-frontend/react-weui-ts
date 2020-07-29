import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _createSuper from "@babel/runtime/helpers/createSuper";
import * as React from 'react';
import PropTypes from 'prop-types';
import Picker from './picker';

var CityPicker = /*#__PURE__*/function (_React$Component) {
  _inherits(CityPicker, _React$Component);

  var _super = _createSuper(CityPicker);

  function CityPicker(props) {
    var _this;

    _classCallCheck(this, CityPicker);

    _this = _super.call(this, props);
    var _this$props = _this.props,
        data = _this$props.data,
        selected = _this$props.selected,
        dataMap = _this$props.dataMap;

    var _this$parseData = _this.parseData(data, dataMap.items, selected),
        groups = _this$parseData.groups,
        newselected = _this$parseData.newselected;

    _this.state = {
      groups: groups,
      selected: newselected,
      picker_show: false,
      text: ''
    }; //console.log(this.state.groups)

    _this.updateGroup = _this.updateGroup.bind(_assertThisInitialized(_this));
    _this.parseData = _this.parseData.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  } //@return array of group with options


  _createClass(CityPicker, [{
    key: "parseData",
    value: function parseData(data, subKey) {
      var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var group = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var newselected = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
      var _selected = 0;

      if (Array.isArray(selected) && selected.length > 0) {
        var _selectedClone = selected.slice(0);

        _selected = _selectedClone.shift();
        selected = _selectedClone;
      }

      if (typeof data[_selected] === 'undefined') {
        _selected = 0;
      }

      newselected.push(_selected);
      var item = data[_selected];

      var _group = JSON.parse(JSON.stringify(data));

      _group.forEach(function (g) {
        return delete g[subKey];
      });

      group.push({
        items: _group,
        mapKeys: {
          label: this.props.dataMap.id
        }
      });

      if (typeof item[subKey] !== 'undefined' && Array.isArray(item[subKey])) {
        return this.parseData(item[subKey], subKey, selected, group, newselected);
      } else {
        return {
          groups: group,
          newselected: newselected
        };
      }
    }
  }, {
    key: "updateDataBySelected",
    value: function updateDataBySelected(selected, cb) {
      var _this2 = this;

      var _this$props2 = this.props,
          data = _this$props2.data,
          dataMap = _this$props2.dataMap; //validate if item exists

      var _this$parseData2 = this.parseData(data, dataMap.items, selected),
          groups = _this$parseData2.groups,
          newselected = _this$parseData2.newselected;

      var text = '';

      try {
        groups.forEach(function (group, _i) {
          text += "".concat(group['items'][selected[_i]][_this2.props.dataMap.id], " ");
        });
      } catch (err) {
        //wait
        text = this.state.text;
      }

      this.setState({
        groups: groups,
        text: text,
        selected: newselected
      }, function () {
        return cb();
      });
    }
  }, {
    key: "updateGroup",
    value: function updateGroup(selected, picker) {
      var _this3 = this;

      this.updateDataBySelected(selected, function () {
        //update picker
        picker.setState({
          selected: _this3.state.selected
        });
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(selected) {
      var _this4 = this;

      //handle unchange
      if (selected === this.state.selected) {
        this.updateDataBySelected(selected, function () {
          if (_this4.props.onChange) _this4.props.onChange(_this4.state.text);
        });
      }

      if (this.props.onChange) this.props.onChange(this.state.text);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Picker, {
        show: this.props.show,
        onGroupChange: this.updateGroup,
        onChange: this.handleChange,
        defaultSelect: this.state.selected,
        groups: this.state.groups,
        onCancel: this.props.onCancel,
        lang: this.props.lang
      });
    }
  }]);

  return CityPicker;
}(React.Component);

CityPicker.propTypes = {
  /**
   * Array of item trees, consists property for label and subitems
   *
   */
  data: PropTypes.array.isRequired,

  /**
   * keys for data provide, `id` to indicate property name for label, `items` to indicate property name for subitems
   *
   */
  dataMap: PropTypes.object,

  /**
   * currently selected item
   *
   */
  selected: PropTypes.array,

  /**
   * display the component
   *
   */
  show: PropTypes.bool,

  /**
   * language object consists of `leftBtn` and `rightBtn`
   *
   */
  lang: PropTypes.object
};
CityPicker.defaultProps = {
  data: [],
  dataMap: {
    id: 'name',
    items: 'sub'
  },
  selected: [],
  show: false,
  lang: {
    leftBtn: '取消',
    rightBtn: '确定'
  }
};
export default CityPicker;