import * as React from 'react';
import { Picker, CityPicker, Form, FormCell, CellBody, CellHeader, Label, Input } from '../../../build/es';
import Page from '../../component/page';
import cnCity from './cnCity';

const PickerDemo = () => {
  const [picker_show, setPicker_show] = React.useState(false)
  const [picker_value, setPicker_value] = React.useState('')
  const [picker_group] = React.useState([
    {
      items: [
        {
          label: 'Item1'
        },
        {
          label: 'Item2 (Disabled)',
          disabled: true
        },
        {
          label: 'Item3'
        },
        {
          label: 'Item4'
        },
        {
          label: 'Item5'
        }
      ]
    }
  ])
  const [city_show, setCity_show] = React.useState(false)
  const [city_value, setCity_value] = React.useState('')

  return (
    <Page className="picker" title="Picker" subTitle="多列选择器" >
      <Form>
        <FormCell>
          <CellHeader>
            <Label>City</Label>
          </CellHeader>
          <CellBody>
            <Input type="text"
              value={city_value}
              onClick={(e: Event) => {
                e.preventDefault();
                setCity_show(true)
              }}
              placeholder="Chose Your City"
              readOnly={true}
            />
          </CellBody>
        </FormCell>
      </Form>

      <CityPicker
        data={cnCity}
        onCancel={() => setCity_show(false)}
        onChange={(text: string) => { setCity_show(false), setCity_value(text) }}
        show={city_show}
      />



      <Form>
        <FormCell>
          <CellHeader>
            <Label>Direct Picker</Label>
          </CellHeader>
          <CellBody>
            <Input
              type="text"
              onClick={(e: Event) => {
                e.preventDefault();
                setPicker_show(true)
              }}
              placeholder="Pick a item"
              value={picker_value}
              readOnly={true}
            />
          </CellBody>
        </FormCell>
      </Form>

      <Picker
        onChange={(selected: any[]) => {
          let value = '';
          selected.forEach((s: any, i: any) => {
            value = picker_group[i]['items'][s].label;
          });
          setPicker_show(false)
          setPicker_value(value)
        }}
        groups={picker_group}
        show={picker_show}
        onCancel={() => setPicker_show(false)}
      />

      <br />

    </Page>
  );
};
export default PickerDemo;