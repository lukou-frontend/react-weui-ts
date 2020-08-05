import * as React from 'react';
import Page from '../../component/page';
import { Gallery, GalleryDelete, Button } from '../../../build/es';

const imgSrc =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArIAAAGFBAMAAADzwA07AAAAIVBMVEXr6+vPz8/X19fp6ene3t7k5OTm5ubh4eHT09Pb29vR0dHqLrSfAAACyklEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGB27GdHaSiO4vgJ5e+s5lzAFlZ2Y1yWoIm6AjPJbItG3VJdmLiiOg9Aow8AybinK1/Tey9ldDttl+eTFC6w+4b+2luRNi2XcIJl8v/H6quHhf9BHiXnFlbGE6wep/D8+gm8Dp8CnEAeJePOBz4n7XKssi254gFWzEkVUWVb0uEeVklz7rxS2ZYM/PnfZ8zEz4atyrYkYOjn63emAPI5VLYtxczHe+HnbWxc7K9fVLYFxwjAIur5eVuGQLcgn6lsczkTYDNDOQb6Nma/oJWqbGMLV/EYIg6BAffIaG5iTlW2sSFXQDFGblzDAwqTIIi5VdmmRrZbYI/F3FXeDbj3uQ8q29SA1/ZYYcgtFkzeMAXQ50llmwo4RYcpRlwhj5DN4RShyjZWTHA1Bwa233Fm435w4onKNnY0yAwQ8BrFFGuezVS2sc0c6xBAPA04Rswz8+9Z7VBl61lwG48BrCd+IEQ33i36DB8eNKpsHUP+KPcAMuMvYgYXnFzS71S2jhF/8+D/mq+YIotwURh4GVOVraPHXy4dOsznfrNb3XUh9kv3nqhsHQEjlw5dFsa97qudAnK/RI8GKltLTANfkyEQlFECfOMBGDFKAaw5Vtl61lW1wifMaW7fMkpcZJr7u+fkTmXr2VRbgqM/+3slrZ+wPtP7A5WtZ8FTVfgA63VhYyZw3tGaJSrbkuDTe1Re3t1/hIiIiIiIiIiIiIj8ZQ8OBAAAAACA/F8bQVVVVVVVVVVVVVVVVVVVhT04EAAAAAAA8n9tBFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVpT04JAAAAAAQ9P+10RMAAAAAAAAAAAAAAADAArTtXKLPR7LcAAAAAElFTkSuQmCC';

const GalleryDemo = () => {
    const [showSingle, setshowSingle] = React.useState(false);
    const [showMultiple, setshowMultiple] = React.useState(false);
    const BackButtonStyle: React.CSSProperties = {
        display: 'inline-block',
        width: 'auto',
        color: 'white',
        border: 'none',
        position: 'absolute',
        top: '5px',
        left: '15px',
    };

    return (
        <Page
            className="gallery"
            title="Gallery"
            subTitle="画廊，可实现上传图片的展示或幻灯片播放"
        >
            <div style={{ padding: '0 15px' }}>
                <Button type="default" onClick={() => setshowSingle(true)}>
                    Show Single Image
                </Button>
                <Button type="default" onClick={() => setshowMultiple(true)}>
                    Show Multiple Images
                </Button>
            </div>

            <Gallery src={imgSrc} show={showSingle}>
                <Button
                    style={BackButtonStyle}
                    onClick={() => setshowSingle(false)}
                    plain
                >
                    Back
                </Button>
                <GalleryDelete
                    onClick={(e: Event, i: number) =>
                        alert(`click deleted id:${i}${e}`)
                    }
                />
            </Gallery>

            <Gallery src={[imgSrc, imgSrc, imgSrc]} show={showMultiple}>
                <Button
                    style={BackButtonStyle}
                    onClick={() => setshowMultiple(false)}
                    plain
                >
                    Back
                </Button>
                <GalleryDelete
                    onClick={(e: Event, i: number) =>
                        alert(`click deleted id:${i}${e}`)
                    }
                />
            </Gallery>
        </Page>
    );
};

export default GalleryDemo;
