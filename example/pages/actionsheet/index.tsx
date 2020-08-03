import * as React from 'react';
import {Button, ActionSheet} from '../../../build/es';
import Page from '../../component/page';

export default class ActionSheetDemo extends React.Component {

    state = {
        ios_show: false,
        android_show: false,
        menus: [{
            label: 'Option 1',
            onClick: ()=> {}
        }, {
            label: 'Option 2',
            onClick: ()=> {}
        }],
        actions: [
            {
                label: 'Cancel',
                onClick: this.hide.bind(this)
            }
        ]
    };

    hide(){
        this.setState({
            auto_show: false,
            ios_show: false,
            android_show: false,
        });
    }

    render() {
        return (
            <Page className="actionsheet" title="ActionSheet" subTitle="弹出式菜单" spacing>
               {/* onClick={() =>this.setState({ios_show: true})} */}
                <Button type="default">IOS ActionSheet</Button>
                <ActionSheet
                    menus={this.state.menus}
                    actions={this.state.actions}
                    show={this.state.ios_show}
                    type="ios"
                    onRequestClose={() =>this.setState({ios_show: false})}
                />

                <br/>
                {/* onClick={() =>this.setState({android_show: true})} */}
                <Button type="default">Android ActionSheet</Button>
                <ActionSheet
                    menus={this.state.menus}
                    actions={this.state.actions}
                    show={this.state.android_show}
                    type="android"
                    onRequestClose={() =>this.setState({android_show: false})}
                />
            </Page>
        );
    }
};