import * as React from 'react';
/**
 * Header of Panel
 *
 */
interface PanelHeaderProps {
    className?: any;
    children: React.ReactNode;
}
export default class PanelHeader extends React.Component<PanelHeaderProps> {
    render(): JSX.Element;
}
export {};
