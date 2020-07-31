import * as React from 'react';
import { Button, Dialog } from '../../../build/es';
import Page from '../../component/page';

const DialogDemo: React.FC<any> = React.memo(
  React.forwardRef(() => {
    const [showIOS1, setshowIOS1] = React.useState(false)
    const [showIOS2, setshowIOS2] = React.useState(false)
    const [showAndroid1, setshowAndroid1] = React.useState(false)
    const [showAndroid2, setshowAndroid2] = React.useState(false)
    const hideDialog = () => {
      setshowIOS1(false)
      setshowIOS2(false)
      setshowAndroid1(false)
      setshowAndroid2(false)
    }
    const [style1] = React.useState({
      title: 'Heading',
      buttons: [
        {
          label: 'Ok',
          onClick: hideDialog.bind(this)
        }
      ]
    })
    const [style2] = React.useState({
      title: 'Heading',
      buttons: [
        {
          type: 'default',
          label: 'Cancel',
          onClick: hideDialog.bind(this)
        },
        {
          type: 'primary',
          label: 'Ok',
          onClick: hideDialog.bind(this)
        }
      ]
    })

    return (
      <Page className="dialog" title="Dialog" subTitle="对话框" spacing>
        <Button type="default" onClick={ () => setshowIOS1(true) } >iOS Style1</Button>
        <Button type="default" onClick={ () =>setshowIOS2(true) }>iOS Style2</Button>
        <Button type="default" onClick={ () =>setshowAndroid1(true) } >Android Style1</Button>
        <Button type="default" onClick={ () => setshowAndroid2(true) }>Android Style2</Button>

        <Dialog type="ios" title={style1.title} buttons={style1.buttons} show={ showIOS1 }>
          This is iOS Style 1
                </Dialog>
        <Dialog type="ios" title={style2.title} buttons={style2.buttons} show={ showIOS2 }>
          This is iOS Style 2
                </Dialog>

        <Dialog type="android" title={style1.title} buttons={style1.buttons} show={ showAndroid1 }>
          This is Android Style 1
                </Dialog>
        <Dialog type="android" title={style2.title} buttons={style2.buttons} show={ showAndroid2 }>
          This is Android Style 2
                </Dialog>
      </Page>
    );
  })
)
export default DialogDemo
