import * as React from 'react';
import {
    InfiniteLoader,
    Cells,
    CellsTitle,
    Cell,
    CellBody,
    CellFooter,
} from '../../../build/es';
import Page from '../../component/page';

interface InfiniteStates {
    items: Array<number>;
}
class InfiniteDemo extends React.Component<any, InfiniteStates> {
    constructor(props: any) {
        super(props);

        this.state = {
            items: [...Array(20).keys()],
        };
    }

    render() {
        return (
            <InfiniteLoader
                onLoadMore={(resolve, finish) => {
                    //mock request
                    setTimeout(() => {
                        if (this.state.items.length > 22) {
                            finish();
                        } else {
                            this.setState(
                                (prevState) => ({
                                    items: prevState.items.concat([
                                        prevState.items.length,
                                    ]),
                                }),
                                () => resolve(),
                            );
                        }
                    }, 1000);
                }}
            >
                <Page
                    className="infinite"
                    title="Infinite Loader"
                    subTitle="滚动加载"
                >
                    <CellsTitle>List with 22 Max</CellsTitle>
                    <Cells>
                        {this.state.items.map((item, i) => {
                            return (
                                <Cell href="#!" key={i} access>
                                    <CellBody>{item}</CellBody>
                                    <CellFooter />
                                </Cell>
                            );
                        })}
                    </Cells>
                </Page>
            </InfiniteLoader>
        );
    }
}

export default InfiniteDemo;
