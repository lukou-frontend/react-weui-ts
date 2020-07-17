import * as React from 'react';
/**
 * Content of Panel
 *
 */
interface PanelBodyProps {
    className?: any;
    children: React.ReactNode;
}
export default class PanelBody extends React.Component<PanelBodyProps> {
    render(): JSX.Element;
}
export {};
