import React, { Component } from 'react'
import {
  Gallery,
  GalleryDelete,
  Uploader,
  Form,
  Cell,
  CellBody,
} from '../../../build/es';
interface States {
  gallery1: any,
  gallery2: any,
  demoFiles: Array<any>,
  imageFiles: Array<any>,
  currentVideo: string,
  allVideo: Array<any>
  maxsize: number,
  maxsize2: number
}
class UploaderDemo extends Component<any, States> {
  constructor(props: any) {
    super(props)

    this.state = {
      gallery1: false,
      gallery2: false,
      demoFiles: [],
      imageFiles: [],
      currentVideo: '',
      allVideo: [],
      maxsize: 3,
      maxsize2: 4,
    }
  }

  renderGallery1() {
    if (!this.state.gallery1) return false

    return (
      <Gallery
        src={this.state.allVideo}
        show
        defaultIndex={this.state.gallery1.id}
        onClick={(e: any) => {
          //avoid click background item
          e.preventDefault()
          e.stopPropagation()
          this.setState({ gallery1: false })
        }}
        isVideo={true}
      >
        <GalleryDelete
          onClick={(_e: Event, id: number) => {
            this.setState({
              demoFiles: this.state.demoFiles.filter((_e: Event, i: number) => i !== id),
              gallery1: this.state.demoFiles.length <= 1 ? true : false,
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
        onClick={(e: Event) => {
          //avoid click background item
          e.preventDefault()
          e.stopPropagation()
          this.setState({ gallery2: false })
        }}
      >
        <GalleryDelete
          onClick={(_e: Event, id: number) => {
            this.setState({
              imageFiles: this.state.imageFiles.filter((_e: Event, i: number) => i !== id),
              gallery2: this.state.imageFiles.length <= 1 ? true : false,
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
                    let newFiles = [...this.state.demoFiles, { url: file.data }]
                    this.setState({
                      demoFiles: newFiles,
                    })
                  }}
                  onFileClick={(_e: Event, file: any, i: number) => {
                    console.log('本视频src：' + this.state.allVideo[i])
                    this.setState({
                      gallery1: {
                        url: file.url,
                        id: i,
                      },
                    })
                  }}
                  lang={{
                    maxError: (maxCount) => `Max ${maxCount} Videos allow`,
                  }}
                  maxsize={this.state.maxsize2}
                  onOversize={(_size: number) => {
                    alert(`视频太大了！`)
                  }}
                  type={'video'}
                  onDelete={(_file: any, id: number) => {
                    this.setState({
                      demoFiles: this.state.demoFiles.filter(
                        (_e: Event, i: number) => i !== id
                      ),
                      allVideo: this.state.allVideo.filter((_e: Event, i: number) => i !== id),
                    })
                  }}
                  showAddInput={this.state.maxsize2 > this.state.demoFiles.length}
                  size={'normal'}
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
          上传图片
          {this.renderGallery2()}
          <Form>
            <Cell>
              <CellBody>
                <Uploader
                  maxCount={6}
                  files={this.state.imageFiles}
                  onError={(msg) => alert(msg)}
                  onChange={(file: any, _e: Event) => {
                    let newFiles = [
                      ...this.state.imageFiles,
                      { url: file.data },
                    ]
                    this.setState({
                      imageFiles: newFiles,
                    })
                  }}
                  onFileClick={(_e: Event, file: any, i: number) => {
                    this.setState({
                      gallery2: {
                        url: file.url,
                        id: i,
                      },
                    })
                  }}
                  lang={{
                    maxError: (maxCount) => `Max ${maxCount} images allow`,
                  }}
                  maxsize={this.state.maxsize}
                  onOversize={(_size: number) => {
                    alert(`图片太大了！`)
                  }}
                  onDelete={(_file: any, id) => {
                    this.setState({
                      imageFiles: this.state.imageFiles.filter(
                        (_e: Event, i: number) => i !== id
                      ),
                    })
                  }}
                  size={'large'}
                  showAddInput={
                    this.state.maxsize > this.state.imageFiles.length
                  }
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
