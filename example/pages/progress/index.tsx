/**
 * Created by jf on 15/12/10.
 */
import React, { useState, useEffect } from 'react';
import { Button, Progress } from '../../../build/es';
import Page from '../../component/page';

const ProgressDemo = () => {
    const [value, setValue] = useState(0);
    const [timer, setTimer] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const upload = () => {
        setIsUploading(true);
        setValue((value + 1) % 100);
        setTimer(setTimeout(upload, 20));
    };

    const pause = () => {
        setIsUploading(false);
    };

    useEffect(() => {
        timer && clearInterval(timer);
    }, []);

    return (
        <Page className="progress" title="Progress" subTitle="进度条" spacing>
            <Progress value={isUploading ? value : 0} onClick={pause} />
            <br />
            <Progress value={isUploading ? value : 45} onClick={pause} />
            <br />
            <Progress value={isUploading ? value : 75} onClick={pause} />
            <br />
            <Button onClick={() => upload()} disabled={isUploading}>
                上传
            </Button>
        </Page>
    );
};
export default ProgressDemo;
