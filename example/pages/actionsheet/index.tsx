import * as React from 'react';
import { Button, ActionSheet } from '../../../build/es';
import Page from '../../component/page';

const ActionSheetDemo = () => {
    const [iosShow, setIosShow] = React.useState(false);
    const [androidShow, setAndroidShow] = React.useState(false);
    const hide = () => {
        setIosShow(false);
        setAndroidShow(false);
    };
    const [menus] = React.useState([
        {
            label: 'Option 1',
            onClick: () => {},
        },
        {
            label: 'Option 2',
            onClick: () => {},
        },
    ]);
    const [actions] = React.useState([
        {
            label: 'Cancel',
            onClick: hide.bind(this),
        },
    ]);

    return (
        <Page
            className="actionsheet"
            title="ActionSheet"
            subTitle="弹出式菜单"
            spacing
        >
            <Button onClick={() => setIosShow(true)} type="default">
                IOS ActionSheet
            </Button>
            <ActionSheet
                menus={menus}
                actions={actions}
                show={iosShow}
                type="ios"
                onRequestClose={() => setIosShow(false)}
            />

            <br />
            <Button onClick={() => setAndroidShow(true)} type="default">
                Android ActionSheet
            </Button>
            <ActionSheet
                menus={menus}
                actions={actions}
                show={androidShow}
                type="android"
                onRequestClose={() => setAndroidShow(false)}
            />
        </Page>
    );
};
export default ActionSheetDemo;
