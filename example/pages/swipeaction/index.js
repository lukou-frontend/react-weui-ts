import * as React from 'react';
import {
  SwipeAction,
  Cells,
  CellsTitle,
  Cell,
  CellHeader,
  CellBody
} from '../../../build/es';
import Page from '../../component/page';

let styles = {
  list: {
    height: '45px',
    lineHeight: '45px',
    textIndent: '1em',
  }
};

class SwipeActionDemo extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: '#f5f5f5' }}>
        <span style={{fontSize: '12px', marginLeft: '16px'}}>该组件只支持Touch事件，请使用移动模式/设备打开此页。</span>
        <SwipeAction
          style={{ backgroundColor: 'gray', marginBottom: '10px' }}
          autoClose
          right={[
            {
              text: 'Cancel',
              onPress: () => console.log('cancel'),
              style: { backgroundColor: '#ddd', color: 'white' },
            },
            {
              text: 'Delete',
              onPress: () => console.log('delete'),
              style: { backgroundColor: '#F4333C', color: 'white' },
            },
          ]}
          left={[
            {
              text: 'Reply',
              onPress: () => console.log('reply'),
              style: { backgroundColor: '#108ee9', color: 'white' },
            },
            {
              text: 'Cancel',
              onPress: () => console.log('cancel'),
              style: { backgroundColor: '#ddd', color: 'white' },
            },
          ]}
          onOpen={() => console.log('global open')}
          onClose={() => console.log('global close')}
        >
         <div style={styles.list}>
          Have left and right buttons
         </div>
        </SwipeAction>
        <SwipeAction
          style={{ backgroundColor: 'gray', marginBottom: '10px' }}
          autoClose
          right={[
            {
              text: 'Cancel',
              onPress: () => console.log('cancel'),
              style: { backgroundColor: '#ddd', color: 'white' },
            },
            {
              text: 'Delete',
              onPress: () => console.log('delete'),
              style: { backgroundColor: '#F4333C', color: 'white' },
            },
          ]}
          onOpen={() => console.log('global open')}
          onClose={() => console.log('global close')}
        >
         <div style={styles.list}>
          Only right buttons
         </div>
        </SwipeAction>
        <SwipeAction
          style={{ backgroundColor: 'gray' }}
          autoClose
          left={[
            {
              text: 'Reply',
              onPress: () => console.log('reply'),
              style: { backgroundColor: '#108ee9', color: 'white' },
            },
            {
              text: 'Cancel',
              onPress: () => console.log('cancel'),
              style: { backgroundColor: '#ddd', color: 'white' },
            },
          ]}
          onOpen={() => console.log('global open')}
          onClose={() => console.log('global close')}
        >
         <div style={styles.list}>
          Only left buttons
         </div>
        </SwipeAction>
      </div>
    );
  }
}

export default SwipeActionDemo;