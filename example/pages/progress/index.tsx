/**
 * Created by jf on 15/12/10.
 */
import * as React from 'react';
import { Button, Progress } from '../../../build/es';
import Page from '../../component/page';

const ProgressDemo = () => {
  let [value, setValue] = React.useState(0)
  const [timer, setTimer] = React.useState(null)
  const [isUploading, setIsUploading] = React.useState(false)
  const upload = () => {
    setIsUploading(true)
    setValue(++value % 100)
    setTimer(setTimeout(upload.bind(this), 20))
  }

  const pause = () => {
    setIsUploading(false)
  }

  React.useEffect(() => {
    timer && clearInterval(timer);
  }, [])

  return (
    <Page className="progress" title="Progress" subTitle="进度条" spacing>
      <Progress value={isUploading ? value : 0} onClick={pause.bind(this)} />
      <br />
      <Progress value={isUploading ? value : 45} onClick={pause.bind(this)} />
      <br />
      <Progress value={isUploading ? value : 75} onClick={pause.bind(this)} />
      <br />
      <Button onClick={() => upload()} disabled={isUploading}>上传</Button>
    </Page>
  );
};
export default ProgressDemo
