import * as React from 'react';
import { Msg, Footer, FooterLinks, FooterLink, FooterText } from '../../../build/es';
import Page from '../../component/page';

const FailFooter = () => (
  <Footer>
    <FooterLinks>
      <FooterLink href="#">Footer Link</FooterLink>
    </FooterLinks>
    <FooterText>
      Copyright © 2008-2016 weui.io
        </FooterText>
  </Footer>
);

type FileMsgProps = {
  history: {
    goBack: () => void
  }
}

const FailMsg = (props: FileMsgProps) => (
  <Page className="msg_warn">
    <Msg
      type="warn"
      title="Action Fail"
      description="We fail to received your feedback"
      buttons={[{
        type: 'primary',
        label: 'Ok',
        onClick: props.history.goBack
      }, {
        type: 'default',
        label: 'Cancel',
        onClick: props.history.goBack
      }]}
      footer={FailFooter}
    />
  </Page>
);

export default FailMsg;