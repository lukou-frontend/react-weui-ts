import * as React from 'react';
import {useState} from 'react'
import { Button, ActionSheet } from '../../../build/es';
import Page from '../../component/page';

const ActionSheetDemo = () => {
  const [ios_show, setios_show] = useState(false)
  const [android_show, setandroid_show] = useState(false)
  const hide = () => {
    setios_show(false)
    setandroid_show(false)
  }
  const [menus] = useState([{
    label: 'Option 1',
    onClick: () => { }
  }, {
    label: 'Option 2',
    onClick: () => { }
  }])
  const [actions] = useState([
    {
      label: 'Cancel',
      onClick: hide.bind(this)
    }
  ])

  return (
      <Page className="actionsheet" title="ActionSheet" subTitle="弹出式菜单" spacing>
        <Button type="default" onClick={() => setios_show(true)}>IOS ActionSheet</Button>
        <ActionSheet
          menus={menus}
          actions={actions}
          show={ios_show}
          type="ios"
          onRequestClose={() => setios_show(false)}
        />

        <br />

        <Button type="default" onClick={ () => setandroid_show(true) }>Android ActionSheet</Button>
        <ActionSheet
          menus={menus}
          actions={actions}
          show={android_show}
          type="android"
          onRequestClose={ () => setandroid_show(false)}
        />
      </Page>
  );
};
export default ActionSheetDemo
