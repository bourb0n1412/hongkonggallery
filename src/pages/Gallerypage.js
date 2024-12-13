import React, { useRef } from 'react';
import '../styles/Gallerypage.css';
import imageData from '../assets/imageData';

const importAll = (r) => r.keys().map((key) => ({
    src: r(key),
    filename: key.split('/').pop(),
}));

const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/)).map((image) => ({
    ...image,
    info: imageData[image.filename] || 'No description available',
}));

const GalleryPage = () => {
    const galleryRef = useRef(null);

    return (
        <div className="gallery-container">
            <h1 className="gallery-title">HK Gallery</h1>
            <div ref={galleryRef} className="gallery">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image.src} alt={`Gallery image ${index + 1}`} className="gallery-img" />
                        <div className="gallery-info">
                            <p>{image.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;
