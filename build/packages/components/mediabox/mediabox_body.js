/*
 * @Author: 刘佑祥
 * @LastEditors: 刘佑祥
 * @LastEditTime: 2020-07-16 18:05:53
 */
import * as React from 'react';
import classNames from '../../utils/classnames';
export default class PanelBody extends React.Component {
    render() {
        const { children, className, ...others } = this.props;
        const cls = classNames({
            'weui-media-box__bd': true
        }, className);
        return (React.createElement("div", Object.assign({ className: cls }, others), children));
    }
}
;
