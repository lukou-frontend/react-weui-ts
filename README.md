<!--
 * @Author: 刘佑祥
 * @LastEditors: 刘佑祥
 * @LastEditTime: 2020-07-16 10:37:49
-->
# React-WeUI

基于weui封装的react移动端组件库

## Docs

- [使用文档](http://qiuyu.coupon.lukou.com/react-weui/docs)
- [demo](http://qiuyu.coupon.lukou.com/react-weui)

## Installation

With [npm](http://npmjs.com/):

如果未安装react

```
npm install --save react react-dom
npm install --save weui@1.1.0 react-weui
```

如果已经安装react

```
npm install weui@1.1.0 react-weui --save
```

With browser (CDN by [unpkg](http://unpkg.com/))

Javacript
```
https://unpkg.com/react-weui@1.1.2
```

CSS
```
https://unpkg.com/react-weui@1.1.1/build/dist/react-weui.css
```
## 举例

文档里面有例子，这里简单介绍下怎么使用组件
```javascript
// app.js

import * as React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-weui';
//import styles
import 'weui';
// 由于代码里引用了less文件，可以不用引下面的css
// import 'react-weui/build/dist/react-weui.css';

const App = () => <Button>hello wechat</Button>;

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```

## 构建
`npm run compile`

## 构建文档
`npm run compile:doc`

## 发布文档
`npm run deploy:doc`
