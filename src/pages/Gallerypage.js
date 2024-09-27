import React, { useEffect, useRef } from 'react';
import '../styles/Gallerypage.css';
import img1 from '../assets/images/HK_Flag.png';
import img2 from '../assets/images/acghk.png';
import img3 from '../assets/images/bluelock.png';
import img4 from '../assets/images/hkambience1.jpg';
import img5 from '../assets/images/hkambience2.jpg';


const images = [
    { src: img1, info: 'Explore the Vibrant Culture of Hong Kong' },
    { src: img2, info: 'ACGHK 2024' },
    { src: img3, info: 'Bluelock: The Ultimate Soccer Challenge' },
    { src: img4, info: 'Explore the Vibrant Culture of Hong Kong' },
    { src: img5, info: 'View from above' },
    { src: img3, info: 'Bluelock: The Ultimate Soccer Challenge' }
];

const GalleryPage = () => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (galleryRef.current) {
                galleryRef.current.scrollBy({ left: 0.3, behavior: 'smooth' });
            }
        }, 20);
        return () => clearInterval(scrollInterval);
    }, []);

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
