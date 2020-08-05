import React, { useState } from 'react';
import {
    ButtonArea,
    Button,
    CellsTitle,
    CellsTips,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Form,
    FormCell,
    Icon,
    Input,
    Label,
    TextArea,
    Switch,
    Radio,
    Checkbox,
    Select,
    VCode,
    Agreement,
    Toptips,
} from '../../../build/es';
import Page from '../../component/page';
import vcodeSrc from './images/vcode.jpg';

const InputDemo = () => {
    const [showToptips, setShowToptips] = useState(false);
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    return (
        <Page className="input" title="Input" subTitle="表单输入">
            <CellsTitle>Radio</CellsTitle>
            <Form radio>
                <FormCell radio>
                    <CellBody>Option 1</CellBody>
                    <CellFooter>
                        <Radio name="radio1" value="1" defaultChecked />
                    </CellFooter>
                </FormCell>
                <FormCell radio>
                    <CellBody>Option 2</CellBody>
                    <CellFooter>
                        <Radio name="radio1" value="2" />
                    </CellFooter>
                </FormCell>
                <Cell link>
                    <CellBody>More</CellBody>
                </Cell>
            </Form>

            <CellsTitle>Checkbox</CellsTitle>
            <Form checkbox>
                <FormCell checkbox>
                    <CellHeader>
                        <Checkbox
                            onChange={(isChecked: boolean) => {
                                console.log(isChecked);
                            }}
                            name="checkbox1"
                            value="1"
                        />
                    </CellHeader>
                    <CellBody>Option 1</CellBody>
                </FormCell>
                <FormCell checkbox>
                    <CellHeader>
                        <Checkbox
                            onChange={(isChecked: boolean) => {
                                console.log(isChecked);
                            }}
                            name="checkbox2"
                            value="2"
                            defaultChecked
                        />
                    </CellHeader>
                    <CellBody>Option 2</CellBody>
                </FormCell>
                <Cell link>
                    <CellBody>More</CellBody>
                </Cell>
            </Form>

            <CellsTitle>Switch</CellsTitle>
            <Form>
                <FormCell switch>
                    <CellBody>Switch Label default</CellBody>
                    <CellFooter>
                        <Switch
                            checked={checked}
                            onChange={(e: any) => {
                                setChecked(e);
                            }}
                        />
                    </CellFooter>
                </FormCell>
                <FormCell switch>
                    <CellBody>Switch Label small</CellBody>
                    <CellFooter>
                        <Switch
                            size="small"
                            checked={checked2}
                            onChange={(e: any) => {
                                setChecked2(e);
                            }}
                        />
                    </CellFooter>
                </FormCell>
            </Form>

            <CellsTitle>Forms</CellsTitle>
            <Form>
                <FormCell>
                    <CellHeader>
                        <Label>QQ</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="tel" placeholder="Enter your qq#" />
                    </CellBody>
                </FormCell>
                <FormCell vcode>
                    <CellHeader>
                        <Label>Phone</Label>
                    </CellHeader>
                    <CellBody>
                        <Input
                            type="tel"
                            placeholder="Enter your cellphone #"
                        />
                    </CellBody>
                    <CellFooter>
                        <Button type="vcode">Send</Button>
                    </CellFooter>
                </FormCell>
                <FormCell>
                    <CellHeader>
                        <Label>Date</Label>
                    </CellHeader>
                    <CellBody>
                        <Input
                            type="date"
                            onChange={(e: React.ChangeEvent) => console.log(e)}
                        />
                    </CellBody>
                </FormCell>
                <FormCell>
                    <CellHeader>
                        <Label>Datetime</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="datetime-local" placeholder="" />
                    </CellBody>
                </FormCell>
                <FormCell vcode>
                    <CellHeader>
                        <Label>VCode</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="number" placeholder="Enter the code" />
                    </CellBody>
                    <CellFooter>
                        <VCode src={vcodeSrc} />
                    </CellFooter>
                </FormCell>
            </Form>
            <CellsTips>Form Footer Tips</CellsTips>

            <CellsTitle>Warnings</CellsTitle>
            <Form>
                <FormCell warn>
                    <CellHeader>
                        <Label>QQ</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="text" defaultValue="Oops..." />
                    </CellBody>
                    <CellFooter>
                        <Icon value="warn" />
                    </CellFooter>
                </FormCell>
            </Form>

            <CellsTitle>Textarea</CellsTitle>
            <Form>
                <FormCell>
                    <CellBody>
                        <TextArea
                            placeholder="Enter your comments"
                            rows={3}
                            maxLength={200}
                        />
                    </CellBody>
                </FormCell>
            </Form>

            <CellsTitle>选择</CellsTitle>
            <Form>
                <FormCell select selectPos="before">
                    <CellHeader>
                        <Select>
                            <option value="1">+86</option>
                            <option value="2">+80</option>
                            <option value="3">+84</option>
                            <option value="4">+87</option>
                        </Select>
                    </CellHeader>
                    <CellBody>
                        <Input type="tel" placeholder="Enter Phone" />
                    </CellBody>
                </FormCell>
            </Form>

            <CellsTitle>Selects</CellsTitle>
            <Form>
                <FormCell select>
                    <CellBody>
                        <Select defaultValue="1">
                            <option value="1">WeChat</option>
                            <option value="2">QQ</option>
                            <option value="3">Email</option>
                        </Select>
                    </CellBody>
                </FormCell>
                <FormCell select selectPos="after">
                    <CellHeader>
                        <Label>Country</Label>
                    </CellHeader>
                    <CellBody>
                        <Select
                            defaultValue="1"
                            data={[
                                {
                                    value: '1',
                                    label: 'China',
                                },
                                {
                                    value: '2',
                                    label: 'United States',
                                },
                                {
                                    value: '3',
                                    label: 'Germany',
                                },
                            ]}
                        />
                    </CellBody>
                </FormCell>
            </Form>
            <Agreement>
                &nbsp;&nbsp;I agree to the{' '}
                <a href="#!">WeUI Terms and Privacy</a>
            </Agreement>

            <ButtonArea>
                <Button
                    //button to display toptips
                    onClick={() => {
                        if (showToptips) return;
                        setShowToptips(!showToptips);
                        window.setTimeout(
                            () => setShowToptips(!showToptips),
                            2000,
                        );
                    }}
                >
                    OK
                </Button>
            </ButtonArea>

            <Toptips type="warn" show={showToptips}>
                Oops, something is wrong!
            </Toptips>
        </Page>
    );
};
export default InputDemo;
