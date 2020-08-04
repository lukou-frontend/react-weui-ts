import * as React from 'react'
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Swiper from '../swiper';

/**
 * Full screen photo display
 *
 */
interface GalleryProps {
  defaultIndex: number,
  show?: boolean,
  src?: string | Array<any>,
  className?: any,
<<<<<<< HEAD
  children?: any,
  isVideo: boolean,
  onClick?: (e: any) => void
=======
  children?: React.ReactElement[],
  isVideo: boolean,
  onClick?: React.MouseEventHandler<HTMLElement>,
>>>>>>> cb04d572b814b626a65c9c2e3fe8db6eb459ebd6
}
interface GalleryStates {
  currentIndex: number
}
class Gallery extends React.Component<GalleryProps, GalleryStates> {
  static propTypes = {
    /**
     * indicate whather the component is display
     *
     */
    show: PropTypes.bool,
    /**
     * image source, string for single element, array for multiple element
     *
     */
    src: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]),
    /**
     * indicate whather the component is display
     *
     */
    defaultIndex: PropTypes.number,
    /**
     * 是否为视频
     *
     */
    isVideo: PropTypes.bool,

    onClick: PropTypes.func
  };

  static defaultProps = {
    show: undefined as GalleryProps['show'],
    src: '' as GalleryProps['src'],
    defaultIndex: 0 as GalleryProps['defaultIndex'],
    isVideo: false as GalleryProps['isVideo']
  }

  constructor(props: GalleryProps) {
    super(props);

    this.state = {
      currentIndex: this.props.defaultIndex
    };
  }

  handleClick(func: (arg0: any, arg1: number) => void) {
    return (e: any) => {
      if (func) func(e, this.state.currentIndex);
    };
  }

  renderImages(imgs: any[]) {
    return (
      <div className="weui-gallery__img">
        <Swiper
          indicators={false}
          defaultIndex={this.props.defaultIndex}
          onChange={(next: any) => this.setState({ currentIndex: next })}
        >
          {
            imgs.map((img: any, i: string | number | undefined) => {
              const imgStyle = {
                backgroundImage: `url(${img})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
              };
              return (
                <span key={i} style={imgStyle}></span>
              );
            })
          }
        </Swiper>
      </div>
    );
  }

  renderVideos(videos: any[]) {
    return (
      <div className="weui-gallery__img">
        <Swiper
          indicators={false}
          defaultIndex={this.props.defaultIndex}
          onClick={this.props.onClick}
          onChange={(next: any) => this.setState({ currentIndex: next })}
        >
          {
            videos.map((video: any, i: string | number | undefined) => {
              return (
                <video src={video} key={i} muted autoPlay loop></video>
              );
            })
          }
        </Swiper>
      </div>
    );
  }

  renderOprs() {
    if (Array.isArray(this.props.children)) {
      return this.props.children.map((child, i) => {
        return React.cloneElement((child), {
          key: i,
          onClick: this.handleClick(child.props.onClick)
        });
      });
    } else {
      if (this.props.children) {
        return React.cloneElement(this.props.children, {
          onClick: this.handleClick((this.props.children as React.ReactElement).props.onClick)
        });
      } else {
        return false;
      }
    }
  }

  render() {
    const { children, className, show, src, defaultIndex, isVideo, ...others } = this.props;
    const cls = classNames({
      'weui-gallery': true,
      [className]: className
    });
    let Swipe: any
    if (Array.isArray(src) && !isVideo) {
      Swipe = this.renderImages(src)
    } else if (Array.isArray(src) && isVideo) {
      Swipe = this.renderVideos(src)
    } else {
      Swipe = (
        <span className="weui-gallery__img" style={{ backgroundImage: `url(${src})` }}></span>
      )
    }
    if (!show) return false;

    return (
      <div className={cls} style={{ display: show ? 'block' : 'none' }} {...others}>
        {
          Swipe
        }

        <div className="weui-gallery__opr">
          {
            this.renderOprs()
          }
        </div>
      </div>
    );
  }
}

export default Gallery;
