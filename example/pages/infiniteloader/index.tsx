import * as React from 'react';
import ReactDOM from 'react-dom';
import {
  InfiniteLoader,
  Cells,
  CellsTitle,
  Cell,
  CellBody,
  CellFooter
} from '../../../build/es';
import Page from '../../component/page';


const InfiniteDemo = () => {
  const [items, setItems] = React.useState([...Array(20).keys()])
  return (
    <InfiniteLoader
      onLoadMore={(resolve, finish) => {
        //mock request
        setTimeout(() => {
          if (items.length > 22) {
            finish();
          } else {
            setItems(items.concat([items.length])
          )}
        }, 1000);
      }}
    >
      <Page className="infinite" title="Infinite Loader" subTitle="滚动加载" >

        <CellsTitle>List with 22 Max</CellsTitle>
        <Cells>
          {
            this.state.items.map((item, i) => {
              return (
                <Cell href="javascript:;" key={i} access>
                  <CellBody>
                    {item}
                  </CellBody>
                  <CellFooter />
                </Cell>
              );
            })
          }
        </Cells>

      </Page>
    </InfiniteLoader>
  );
}

export default InfiniteDemo;