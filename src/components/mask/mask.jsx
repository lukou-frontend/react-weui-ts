var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import classNames from '../../utils/classnames';
class Mask extends React.Component {
    render() {
        const _a = this.props, { transparent, className } = _a, others = __rest(_a, ["transparent", "className"]);
        const clz = classNames({
            'weui-mask': !transparent,
            'weui-mask_transparent': transparent
        }, className);
        return (<div className={clz} {...others}></div>);
    }
}
Mask.defaultProps = {
    transparent: false
};
export default Mask;
