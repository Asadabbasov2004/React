import React from 'react';
import "../css/Gallery.css";
import ContainerGallery from '../Components/Gallerycomponents/containerGallery';
import HeaderGallery from '../Components/Gallerycomponents/headerGallery';
const Gallery = () => {
    return (
        <div className='Gallerypage'>
            <HeaderGallery/>
            <ContainerGallery/>
        </div>
    );
}


export default Gallery;
