/*
 * @Author: 刘佑祥
 * @LastEditors: 刘佑祥
 * @LastEditTime: 2020-07-16 10:21:38
 */
import * as React from 'react';
import classNames from '../../utils/classnames';
export default class Article extends React.Component {
    render() {
        const { className, children, ...others } = this.props;
        const cls = classNames({
            'weui-article': true,
            [className]: className
        });
        return (React.createElement("article", Object.assign({ className: cls }, others), children));
    }
}
