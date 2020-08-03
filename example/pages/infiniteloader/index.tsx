import * as React from 'react';
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
      onLoadMore={(_resolve, finish) => {
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
            items.map((item: number, i: number) => {
              return (
                <Cell href="#!" key={i} access>
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