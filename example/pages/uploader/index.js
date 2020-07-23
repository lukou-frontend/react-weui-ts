import React, { Component } from 'react'
import {
    Gallery,
    GalleryDelete,
    Uploader,
    Form,
    Cell,
    CellBody,
} from '../../../build/packages'

class UploaderDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gallery1: false,
            gallery2: false,
            demoFiles: [],
            imageFiles: [],
            currentVideo: '',
            allVideo: [],
        }
    }

    renderGallery1() {
        if (!this.state.gallery1) return false

        let srcs = this.state.demoFiles.map((file) => file.url)

        return (
            <Gallery
                src={srcs}
                show
                defaultIndex={this.state.gallery1.id}
                onClick={(e) => {
                    //avoid click background item
                    e.preventDefault()
                    e.stopPropagation()
                    this.setState({ gallery1: false })
                }}
            >
                <GalleryDelete
                    onClick={(e, id) => {
                        this.setState({
                            demoFiles: this.state.demoFiles.filter(
                                (e, i) => i !== id
                            ),
                            gallery1:
                                this.state.demoFiles.length <= 1 ? true : false,
                        })
                    }}
                />
            </Gallery>
        )
    }
    renderGallery2() {
        if (!this.state.gallery2) return false

        let srcs = this.state.imageFiles.map((file) => file.url)

        return (
            <Gallery
                src={srcs}
                show
                defaultIndex={this.state.gallery2.id}
                onClick={(e) => {
                    //avoid click background item
                    e.preventDefault()
                    e.stopPropagation()
                    this.setState({ gallery2: false })
                }}
            >
                <GalleryDelete
                    onClick={(e, id) => {
                        this.setState({
                            imageFiles: this.state.imageFiles.filter(
                                (e, i) => i !== id
                            ),
                            gallery2:
                                this.state.imageFiles.length <= 1
                                    ? true
                                    : false,
                        })
                    }}
                />
            </Gallery>
        )
    }

    render() {
        return (
            <div>
                <div>
                    {this.renderGallery1()}
                    <Form>
                        <Cell>
                            <CellBody>
                                <Uploader
                                    title="Video Uploader"
                                    maxCount={6}
                                    files={this.state.demoFiles}
                                    onError={(msg) => alert(msg)}
                                    onChange={(file, e) => {
                                        let newFiles = [
                                            ...this.state.demoFiles,
                                            { url: file.data },
                                        ]
                                        this.setState({
                                            demoFiles: newFiles,
                                        })
                                    }}
                                    onFileClick={(e, file, i) => {
                                        console.log(
                                            '本视频src：' +
                                                this.state.allVideo[i]
                                        )
                                        this.setState({
                                            gallery1: {
                                                url: file.url,
                                                id: i,
                                            },
                                        })
                                    }}
                                    lang={{
                                        maxError: (maxCount) =>
                                            `Max ${maxCount} Videos allow`,
                                    }}
                                    maxsize={10}
                                    onOversize={(size) => {
                                        alert(`视频太大了！`)
                                    }}
                                    type={'video'}
                                    onDelete={(file, id) => {
                                        this.setState({
                                            demoFiles: this.state.demoFiles.filter(
                                                (e, i) => i !== id
                                            ),
                                            allVideo: this.state.allVideo.filter(
                                                (e, i) => i !== id
                                            ),
                                        })
                                    }}
                                    currentVideo={(val) => {
                                        let data = [...this.state.allVideo, val]
                                        this.setState({
                                            allVideo: data,
                                        })
                                    }}
                                />
                            </CellBody>
                        </Cell>
                    </Form>
                </div>
                <div>
                    {this.renderGallery2()}
                    <Form>
                        <Cell>
                            <CellBody>
                                <Uploader
                                    title="Image Uploader"
                                    maxCount={6}
                                    files={this.state.imageFiles}
                                    onError={(msg) => alert(msg)}
                                    onChange={(file, e) => {
                                        let newFiles = [
                                            ...this.state.imageFiles,
                                            { url: file.data },
                                        ]
                                        this.setState({
                                            imageFiles: newFiles,
                                        })
                                    }}
                                    onFileClick={(e, file, i) => {
                                        this.setState({
                                            gallery2: {
                                                url: file.url,
                                                id: i,
                                            },
                                        })
                                    }}
                                    lang={{
                                        maxError: (maxCount) =>
                                            `Max ${maxCount} images allow`,
                                    }}
                                    maxsize={10}
                                    onOversize={(size) => {
                                        alert(`图片太大了！`)
                                    }}
                                    onDelete={(file, id) => {
                                        this.setState({
                                            imageFiles: this.state.imageFiles.filter(
                                                (e, i) => i !== id
                                            ),
                                        })
                                    }}
                                />
                            </CellBody>
                        </Cell>
                    </Form>
                </div>
            </div>
        )
    }
}

export default UploaderDemo
