import * as React from 'react';
import { Button, ActionSheet } from '../../../build/es';
import Page from '../../component/page';

const ActionSheetDemo = () => {
  const [ios_show, setIos_show] = React.useState(false)
  const [android_show, setAndroid_show] = React.useState(false)
  const hide = () => {
    setIos_show(false)
    setAndroid_show(false)
  }
  const [menus] = React.useState([{
    label: 'Option 1',
    onClick: () => {}
  }, {
    label: 'Option 2',
    onClick: () => {}
  }])
  const [actions] = React.useState([
    {
      label: 'Cancel',
      onClick: hide.bind(this)
    }
  ])

  return (
    <Page className="actionsheet" title="ActionSheet" subTitle="弹出式菜单" spacing>
      <Button onClick={() => setIos_show(true)} type="default">IOS ActionSheet</Button>
      <ActionSheet
        menus={menus}
        actions={actions}
        show={ios_show}
        type="ios"
        onRequestClose={() => setIos_show(false)}
      />

      <br />
      <Button onClick={() => setAndroid_show(true)} type="default">Android ActionSheet</Button>
      <ActionSheet
        menus={menus}
        actions={actions}
        show={android_show}
        type="android"
        onRequestClose={() => setAndroid_show(false)}
      />
    </Page>
  );
};
export default ActionSheetDemo
