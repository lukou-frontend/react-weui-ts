import React, { Component } from 'react'
import {
    Gallery,
    GalleryDelete,
    Uploader,
    Form,
    Cell,
    CellBody,
    Page,
} from 'react-weui'

class UploaderDemo extends Component {
    componentDidMount() {
        document
            .querySelector('.weui-uploader__input')
            .addEventListener('click', () => {
                if (window.confirm('你确定上传图片吗？')) {
                    this.setState({
                        accepted: 'image',
                    })
                    return true
                } else {
                    this.setState({
                        accepted: 'video',
                    })
                    return true
                }
            })
    }
    constructor(props) {
        super(props)

        this.state = {
            gallery: false,
            demoFiles: [],
            type: 'image',
            currentVideo: '',
            allVideo: [],
        }
    }

    renderGallery() {
        if (!this.state.gallery) return false

        let srcs = this.state.demoFiles.map((file) => file.url)

        return (
            <Gallery
                src={srcs}
                show
                defaultIndex={this.state.gallery.id}
                onClick={(e) => {
                    //avoid click background item
                    e.preventDefault()
                    e.stopPropagation()
                    this.setState({ gallery: false })
                }}
            >
                <GalleryDelete
                    onClick={(e, id) => {
                        this.setState({
                            demoFiles: this.state.demoFiles.filter(
                                (e, i) => i !== id
                            ),
                            gallery:
                                this.state.demoFiles.length <= 1 ? true : false,
                        })
                    }}
                />
            </Gallery>
        )
    }

    render() {
        return (
            <Page
                className="cell"
                title="Uploader"
                subTitle="上传组件，一般配合Gallery使用"
            >
                {this.renderGallery()}
                <Form>
                    <Cell>
                        <CellBody>
                            <Uploader
                                title="Image Uploader"
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
                                    console.log('本视频src：' + this.state.allVideo[i])
                                    this.setState({
                                        gallery: {
                                            url: file.url,
                                            id: i,
                                        },
                                    })
                                }}
                                lang={{
                                    maxError: (maxCount) =>
                                        `Max ${maxCount} images allow`,
                                }}
                                maxsize={3}
                                onOversize={(size) => {
                                    alert(
                                        `文件是${size / 1024 / 1024}M,太大了！`
                                    )
                                }}
                                type={this.state.accepted}
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
            </Page>
        )
    }
}

export default UploaderDemo
