import * as React from 'react';
import { Slider, CellsTitle, Button, ButtonArea } from '../../../build/es';
import Page from '../../component/page';

const SliderDemo = () => {
  const [controlValue, setControlValue] = React.useState(50)
  return (
    <Page className="slider" title="Slider" subTitle="滑块" spacing>
      <CellsTitle>Basic Example</CellsTitle>
      <Slider
        min={1}
        max={5}
        step={1}
        onChange={(value: number) => console.log(value)}
      />

      <CellsTitle>Disabled Example</CellsTitle>
      <Slider
        disabled
        onChange={(value: number) => console.log(value)}
      />

      <CellsTitle>Controlled Example</CellsTitle>

      <Slider
        max={100}
        step={2}
        value={controlValue}
        onChange={(value: number) => setControlValue(value)}
      />

      <ButtonArea>
        <Button
          size="small"
          onClick={() => {
            if (controlValue >= 10) setControlValue(controlValue - 10);
          }}>
          - 10
                    </Button>
        <Button
          style={{ marginLeft: '10px' }}
          size="small"
          onClick={() => {
            if (controlValue <= 90) setControlValue(controlValue + 10)
          }}>
          + 10
                    </Button>
      </ButtonArea>

      <br />

      <CellsTitle>No snap & No show value</CellsTitle>
      <Slider
        snapToValue={false}
        showValue={false}
      />
    </Page>
  );
};

export default SliderDemo; 
