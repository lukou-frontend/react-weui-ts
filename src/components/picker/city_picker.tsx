import * as React from 'react';
import PropTypes from 'prop-types';
import Picker from './picker';

/**
 *  An city pick component build on top of picker
 *
 */
declare type CityData = {
  label: string,
  subitems?: any
}
interface CityPickerProps {
  data: Array<CityData>,
  dataMap: {
    id: string,
    items: string
  },
  lang: {
    leftBtn: string,
    rightBtn: string
  },
  selected: Array<any>,
  show: boolean,
  onCancel: (e: any) => void,
  onChange: (text: string) => void
}
interface CityPickerStates {
  groups: Array<any>,
  selected: Array<CityData>,
  picker_show: boolean,
  text: string
}
class CityPicker extends React.Component<CityPickerProps, CityPickerStates> {

  static propTypes = {
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
    lang: PropTypes.object,
  }

  static defaultProps = {
    data: [],
    dataMap: { id: 'name', items: 'sub' },
    selected: [],
    show: false,
    lang: { leftBtn: '取消', rightBtn: '确定' }
  }

  constructor(props: CityPickerProps) {
    super(props);
    const { data, selected, dataMap } = this.props;
    const { groups, newselected } = this.parseData(data, dataMap.items, selected);
    this.state = {
      groups,
      selected: newselected,
      picker_show: false,
      text: ''
    };
    //console.log(this.state.groups)
    this.updateGroup = this.updateGroup.bind(this);
    this.parseData = this.parseData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //@return array of group with options
  parseData(data: Array<any>, subKey: any, selected: Array<any> = [], group: Array<any> = [], newselected: Array<any> = []): any {
    let _selected = 0;

    if (Array.isArray(selected) && selected.length > 0) {
      let _selectedClone = selected.slice(0);
      _selected = (_selectedClone.shift() as unknown as number);
      selected = _selectedClone;
    }

    if (typeof data[_selected] === 'undefined') {
      _selected = 0;
    }

    newselected.push(_selected);

    let item = data[_selected];

    var _group = JSON.parse(JSON.stringify(data));
    _group.forEach((g: any) => delete g[subKey]);
    group.push({ items: _group, mapKeys: { label: this.props.dataMap.id } });

    if (typeof item[subKey] !== 'undefined' && Array.isArray(item[subKey])) {
      return this.parseData(item[subKey], subKey, selected, group, newselected);
    } else {
      return { groups: group, newselected };
    }
  }

  updateDataBySelected(selected: any, cb: any) {
    const { data, dataMap } = this.props;
    //validate if item exists

    const { groups, newselected } = this.parseData(data, dataMap.items, selected);

    let text = '';
    try {
      groups.forEach((group: any, _i: any) => {
        text += `${group['items'][selected[_i]][this.props.dataMap.id]} `;
      });
    } catch (err) {
      //wait
      text = this.state.text;
    }

    this.setState({
      groups,
      text,
      selected: newselected
    }, () => cb());
  }


  updateGroup(item: any, i: any, groupIndex: any, selected: any, picker: any) {
    console.log(item, i, groupIndex, picker)
    this.updateDataBySelected(selected, () => {
      //update picker
      this.setState({
        selected: selected
      });
    });
  }

  handleChange(selected: Array<CityData>) {
    //handle unchange
    if (selected === this.state.selected) {
      this.updateDataBySelected(selected, () => {
        if (this.props.onChange) this.props.onChange(this.state.text);
      });
    }

    if (this.props.onChange) this.props.onChange(this.state.text);
  }

  render() {
    return (
      <Picker
        show={this.props.show}
        onGroupChange={this.updateGroup}
        onChange={this.handleChange}
        defaultSelect={this.state.selected}
        groups={this.state.groups}
        onCancel={this.props.onCancel}
        lang={this.props.lang}
      />
    );
  }
}

export default CityPicker;
