import React, { Component } from 'react';
import {
    Gallery,
    GalleryDelete,
    Uploader,
    Form,
    Cell,
    CellBody,
} from '../../../build/es';

interface States {
    gallery1: any;
    gallery2: any;
    demoFiles: Array<any>;
    imageFiles: Array<any>;
    allVideo: Array<any>;
    maxsize: number;
    maxsize2: number;
}
class UploaderDemo extends Component<any, States> {
    constructor(props: any) {
        super(props);

        this.state = {
            gallery1: false,
            gallery2: false,
            demoFiles: [],
            imageFiles: [],
            allVideo: [],
            maxsize: 3,
            maxsize2: 4,
        };
    }

    renderGallery1() {
        if (!this.state.gallery1) return false;

        return (
            <Gallery
                src={this.state.allVideo}
                show
                defaultIndex={this.state.gallery1.id}
                onClick={(e: any) => {
                    //avoid click background item
                    e.preventDefault();
                    e.stopPropagation();
                    this.setState({ gallery1: false });
                }}
                isVideo
            >
                <GalleryDelete
                    onClick={(_e: Event, id: number) => {
                        this.setState((prevState) => ({
                            demoFiles: prevState.demoFiles.filter(
                                (e: Event, i: number) => i !== id,
                            ),
                            gallery1: prevState.demoFiles.length <= 1,
                        }));
                    }}
                />
            </Gallery>
        );
    }

    renderGallery2() {
        if (!this.state.gallery2) return false;

        const srcs = this.state.imageFiles.map((file) => file.url);

        return (
            <Gallery
                src={srcs}
                show
                defaultIndex={this.state.gallery2.id}
                onClick={(e: Event) => {
                    //avoid click background item
                    e.preventDefault();
                    e.stopPropagation();
                    this.setState({ gallery2: false });
                }}
            >
                <GalleryDelete
                    onClick={(_e: Event, id: number) => {
                        this.setState((prevState) => ({
                            imageFiles: prevState.imageFiles.filter(
                                (e: Event, i: number) => i !== id,
                            ),
                            gallery2: prevState.imageFiles.length <= 1,
                        }));
                    }}
                />
            </Gallery>
        );
    }

    render() {
        return (
            <div>
                <div>
                    上传视频
                    {this.renderGallery1()}
                    <Form>
                        <Cell>
                            <CellBody>
                                <Uploader
                                    maxCount={6}
                                    files={this.state.demoFiles}
                                    onError={(msg) => alert(msg)}
                                    onChange={(file: any) => {
                                        this.setState((prevState) => ({
                                            demoFiles: [
                                                ...prevState.demoFiles,
                                                { url: file.data },
                                            ],
                                        }));
                                    }}
                                    onFileClick={(
                                        _e: Event,
                                        file: any,
                                        i: number,
                                    ) => {
                                        console.log(
                                            `本视频src：${this.state.allVideo[i]}`,
                                        );
                                        this.setState({
                                            gallery1: {
                                                url: file.url,
                                                id: i,
                                            },
                                        });
                                    }}
                                    lang={{
                                        maxError: (maxCount) =>
                                            `Max ${maxCount} Videos allow`,
                                    }}
                                    maxsize={this.state.maxsize2}
                                    onOversize={(size: number) => {
                                        alert(`视频太大了！${size}`);
                                    }}
                                    type="video"
                                    onDelete={(_file: any, id: number) => {
                                        this.setState((prevState) => ({
                                            demoFiles: prevState.demoFiles.filter(
                                                (_e: Event, i: number) =>
                                                    i !== id,
                                            ),
                                            allVideo: prevState.allVideo.filter(
                                                (_e: Event, i: number) =>
                                                    i !== id,
                                            ),
                                        }));
                                    }}
                                    showAddInput={
                                        this.state.maxsize2 >
                                        this.state.demoFiles.length
                                    }
                                    size="normal"
                                    currentVideo={(val) => {
                                        this.setState((prevState) => ({
                                            allVideo: [
                                                ...prevState.allVideo,
                                                val,
                                            ],
                                        }));
                                    }}
                                />
                            </CellBody>
                        </Cell>
                    </Form>
                </div>
                <div>
                    上传图片
                    {this.renderGallery2()}
                    <Form>
                        <Cell>
                            <CellBody>
                                <Uploader
                                    maxCount={6}
                                    files={this.state.imageFiles}
                                    onError={(msg) => alert(msg)}
                                    onChange={(file: any) => {
                                        this.setState((prevState) => ({
                                            imageFiles: [
                                                ...prevState.imageFiles,
                                                { url: file.data },
                                            ],
                                        }));
                                    }}
                                    onFileClick={(
                                        _e: Event,
                                        file: any,
                                        i: number,
                                    ) => {
                                        this.setState({
                                            gallery2: {
                                                url: file.url,
                                                id: i,
                                            },
                                        });
                                    }}
                                    lang={{
                                        maxError: (maxCount) =>
                                            `Max ${maxCount} images allow`,
                                    }}
                                    maxsize={this.state.maxsize}
                                    onOversize={(size: number) => {
                                        alert(`图片太大了！${size}`);
                                    }}
                                    onDelete={(_file: any, id) => {
                                        this.setState((prevState) => ({
                                            imageFiles: prevState.imageFiles.filter(
                                                (_e: Event, i: number) =>
                                                    i !== id,
                                            ),
                                        }));
                                    }}
                                    size="large"
                                    showAddInput={
                                        this.state.maxsize >
                                        this.state.imageFiles.length
                                    }
                                />
                            </CellBody>
                        </Cell>
                    </Form>
                </div>
            </div>
        );
    }
}

export default UploaderDemo;
