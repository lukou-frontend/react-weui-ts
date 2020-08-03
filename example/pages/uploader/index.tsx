import * as React from 'react'
import {
  Gallery,
  GalleryDelete,
  Uploader,
  Form,
  Cell,
  CellBody,
} from '../../../build/es';
interface MyFile extends File {
  lastModifiedDate: Date;
  error?: any,
  url?: string,
  status: any,
  onClick?: () => void,
  video: string,
  data: string
}

const UploaderDemo = () => {
  const [gallery1, setGallery1] = React.useState(null)
  const [gallery2, setGallery2] = React.useState(null)
  const [demoFiles, setDemoFiles] = React.useState([])
  const [imageFiles, setImageFiles] = React.useState([])
  const [allVideo, setAllVideo] = React.useState([])
  const [maxsize] = React.useState(3)
  const [maxsize2] = React.useState(4)

  const renderGallery1 = () => {
    if (!gallery1) return false

    return (
      <Gallery
        src={allVideo}
        show
        onClick={(e: Event) => {
          //avoid click background item
          e.preventDefault()
          e.stopPropagation()
          setGallery1(false)
        }}
        isVideo={true}
      >
        <GalleryDelete
          onClick={(_e: Event, id: number) => {
            setDemoFiles(demoFiles.filter((_e: Event, i: number) => i !== id))
            setGallery1(demoFiles.length <= 1 ? true : false)
          }}
        />
      </Gallery>
    )
  }
  const renderGallery2 = () => {
    if (!gallery2) return false

    let srcs = imageFiles.map((file: any) => file.url)

    return (
      <Gallery
        src={srcs}
        show
        onClick={(e: any) => {
          //avoid click background item
          e.preventDefault()
          e.stopPropagation()
          setGallery2(false)
        }}
      >
        <GalleryDelete
          onClick={(_e: any, id: number) => {
            setImageFiles(imageFiles.filter((_e: Event, i: number) => i !== id))
            setGallery2(imageFiles.length <= 1 ? true : false)
          }}
        />
      </Gallery>
    )
  }

    return (
      <div>
        <div>
          上传视频
          {renderGallery1()}
          <Form>
            <Cell>
              <CellBody>
                <Uploader
                  maxCount={6}
                  files={demoFiles}
                  onError={(msg: string) => alert(msg)}
                  onChange={(file: MyFile) => {
                    let newFiles = [...demoFiles, { url: file.data }]
                    setDemoFiles(newFiles)
                  }}
                  onFileClick={(_e: any, file: MyFile, i: number) => {
                    console.log('本视频src：' + allVideo[i])
                    setGallery1({
                      url: file.url,
                      id: i,
                    })
                  }}
                  lang={{
                    maxError: (maxCount: number) => `Max ${maxCount} Videos allow`,
                  }}
                  maxsize={maxsize2}
                  onOversize={() => {
                    alert(`视频太大了！`)
                  }}
                  type={'video'}
                  onDelete={(_file: MyFile, id: number) => {
                    setDemoFiles(demoFiles.filter(
                        (_e: Event, i: number) => i !== id
                      ))
                      setAllVideo(allVideo.filter((_e: Event, i: number) => i !== id))
                  }}
                  showAddInput={maxsize2 > demoFiles.length}
                  size={'normal'}
                  currentVideo={(val: string) => {
                    let data = [...allVideo, val]
                    setAllVideo(data)
                  }}
                />
              </CellBody>
            </Cell>
          </Form>
        </div>
        <div>
          上传图片
          {renderGallery2()}
          <Form>
            <Cell>
              <CellBody>
                <Uploader
                  maxCount={6}
                  files={imageFiles}
                  onError={(msg: string) => alert(msg)}
                  onChange={(file: MyFile, _e: Event) => {
                    let newFiles = [
                      ...imageFiles,
                      { url: file.data },
                    ]
                    setImageFiles(newFiles)
                  }}
                  onFileClick={(_e: Event, file: MyFile, i: number) => {
                    console.log(file.url)
                    setGallery2({
                        url: file.url,
                        id: i,
                      })
                  }}
                  lang={{
                    maxError: (maxCount: number) => `Max ${maxCount} images allow`,
                  }}
                  maxsize={maxsize}
                  onOversize={() => {
                    alert(`图片太大了！`)
                  }}
                  onDelete={(_file: MyFile, id: number) => {
                    setImageFiles(imageFiles.filter(
                        (_e: any, i) => i !== id
                      ))
                  }}
                  size={'large'}
                  showAddInput={
                    maxsize > imageFiles.length
                  }
                />
              </CellBody>
            </Cell>
          </Form>
        </div>
      </div>
    )
}

export default UploaderDemo
