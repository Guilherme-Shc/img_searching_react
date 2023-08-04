import ImageShow from './ImageShow';

import './ImageList.css'

function ImageList({images}){
    const renderedImages = images.map((images) => {
        return <ImageShow key={images.id} images={images}/>;
    });

    return(<div className='image-list'> {renderedImages}</div>)
}

export default ImageList;