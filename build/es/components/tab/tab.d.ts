import * as React from 'react';
import PropTypes from 'prop-types';
import { ClassValue } from '../../utils/classnames';
/**
 *  Weui Tab component, can be auto mount items or mannually display items
 *
 */
interface TabProps {
    defaultIndex?: number;
    type: string;
    onChange?: (index: number) => void;
    className?: ClassValue;
    children: React.ReactElement[];
    [key: string]: any;
}
export default class Tab extends React.Component<TabProps> {
    static propTypes: {
        /**
         * layout of the tab, auto mount components when set to `navbar` or `tabbar`
         *
         */
        type: PropTypes.Requireable<string>;
        /**
         * default select index
         *
         */
        defaultIndex: PropTypes.Requireable<number>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        type: string;
        defaultIndex: number;
    };
    state: {
        index: number | undefined;
    };
    handleHeaderClick(idx: number): void;
    parseChild(childrenInput: React.ReactElement[]): {
        ChildHeaders: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>[];
        ChildContents: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>[];
    };
    renderBar(type: string, children: React.ReactElement[], cls: string): false | JSX.Element;
    render(): false | JSX.Element;
}
export {};
