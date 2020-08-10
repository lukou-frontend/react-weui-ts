import React, { useState } from 'react';
import {
    Picker,
    CityPicker,
    Form,
    FormCell,
    CellBody,
    CellHeader,
    Label,
    Input,
} from '../../../build/es';
import Page from '../../component/page';
import cnCity from './cnCity';

const PickerDemo = () => {
    const [pickerShow, setPickerShow] = useState(false);
    const [pickerValue, setPickerValue] = useState('');
    const [pickerGroup] = useState([
        {
            items: [
                {
                    label: 'Item1',
                },
                {
                    label: 'Item2 (Disabled)',
                    disabled: true,
                },
                {
                    label: 'Item3',
                },
                {
                    label: 'Item4',
                },
                {
                    label: 'Item5',
                },
            ],
        },
    ]);
    const [cityShow, setCityShow] = useState(false);
    const [cityValue, setCityValue] = useState('');

    return (
        <Page className="picker" title="Picker" subTitle="多列选择器">
            <Form>
                <FormCell>
                    <CellHeader>
                        <Label>City</Label>
                    </CellHeader>
                    <CellBody>
                        <Input
                            type="text"
                            value={cityValue}
                            onClick={(e: Event) => {
                                e.preventDefault();
                                setCityShow(true);
                            }}
                            placeholder="Chose Your City"
                            readOnly
                        />
                    </CellBody>
                </FormCell>
            </Form>

            <CityPicker
                data={cnCity}
                onCancel={() => setCityShow(false)}
                onChange={(text: string) => {
                    setCityShow(false);
                    setCityValue(text);
                }}
                show={cityShow}
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
                                setPickerShow(true);
                            }}
                            placeholder="Pick a item"
                            value={pickerValue}
                            readOnly
                        />
                    </CellBody>
                </FormCell>
            </Form>

            <Picker
                onChange={(selected: any[]) => {
                    let value = '';
                    selected.forEach((s: any, i: any) => {
                        value = pickerGroup[i].items[s].label;
                    });
                    setPickerShow(false);
                    setPickerValue(value);
                }}
                groups={pickerGroup}
                show={pickerShow}
                onCancel={() => setPickerShow(false)}
            />

            <br />
        </Page>
    );
};
export default PickerDemo;
