import * as React from 'react';
import {
    Footer,
    FooterText,
    FooterLinks,
    FooterLink
} from '../../../build/es';
import Page from '../../component/page';


const FooterDemo = () => (
    <Page className="footer" title="Footer" subTitle="页脚" spacing>
        <Footer>
            <FooterText>Copyright &copy; 2008-2016 weui.io</FooterText>
        </Footer>
        <br/><br/>
        <Footer>
            <FooterLinks>
                <FooterLink href="#!">Link</FooterLink>
            </FooterLinks>
            <FooterText>Copyright &copy; 2008-2016 weui.io</FooterText>
        </Footer>
        <br/><br/>
        <Footer>
            <FooterLinks>
                <FooterLink href="#!">Link</FooterLink>
                <FooterLink href="#!">Link</FooterLink>
            </FooterLinks>
            <FooterText>Copyright &copy; 2008-2016 weui.io</FooterText>
        </Footer>
    </Page>
);

export default FooterDemo;