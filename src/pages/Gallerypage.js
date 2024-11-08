import React, { useEffect, useRef } from 'react';
import '../styles/Gallerypage.css';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.png';
import img4 from '../assets/images/4.png';
import img5 from '../assets/images/5.png';
import img6 from '../assets/images/6.png';
import img7 from '../assets/images/7.png';
import img8 from '../assets/images/8.png';
import img9 from '../assets/images/9.png';
import img10 from '../assets/images/10.png';
import img11 from '../assets/images/11.png';
import img12 from '../assets/images/12.png';
import img13 from '../assets/images/13.png';
import img14 from '../assets/images/14.png';
import img15 from '../assets/images/15.png';
import img16 from '../assets/images/16.png';
import img17 from '../assets/images/17.png';
import img18 from '../assets/images/18.png';
import img19 from '../assets/images/19.png';
import img20 from '../assets/images/20.png';
import img21 from '../assets/images/21.png';
import img22 from '../assets/images/22.png';
import img23 from '../assets/images/23.png';
import img24 from '../assets/images/24.png';

const images = [
    { src: img2, info: 'ACGHK Anime Convention 2024' },
    { src: img3, info: 'Bluelock: The Ultimate Soccer Challenge' },
    { src: img4, info: 'Ambience of Hong Kong 1' },
    { src: img5, info: 'Ambience of Hong Kong 2' },
    { src: img6, info: 'Nina Hotel Tsuen Wan West' },
    { src: img7, info: 'Hong Kong Times Square' },
    { src: img8, info: 'Avenue of Stars - Bruce Lee Statue' },
    { src: img9, info: 'Victoria Peak View' },
    { src: img10, info: 'Night Market in Mong Kok' },
    { src: img11, info: 'Traditional Food Stall' },
    { src: img12, info: 'Street Art in Central Hong Kong' },
    { src: img13, info: 'Harbor View at Sunset' },
    { src: img14, info: 'Old Tram in Hong Kong' },
    { src: img15, info: 'Temple Street Night Market' },
    { src: img16, info: 'Modern Skyscrapers' },
    { src: img17, info: 'Kowloon Park Flamingos' },
    { src: img18, info: 'Repulse Bay Beach' },
    { src: img19, info: 'Lan Kwai Fong Nightlife' },
    { src: img20, info: 'Tai O Fishing Village' },
    { src: img21, info: 'Hong Kong Disneyland Entrance' },
    { src: img22, info: 'Dragon’s Back Hiking Trail' },
    { src: img23, info: 'Big Buddha on Lantau Island' },
    { src: img24, info: 'Hong Kong Skyline at Night' },
];

const GalleryPage = () => {
    const galleryRef = useRef(null);
    const scrollSpeed = 0.5;

    // Erstelle eine erweiterte Liste mit Kopien der ersten und letzten Bilder
    const extendedImages = [
        images[images.length - 1], // Letztes Bild als erstes
        ...images,
        images[0], // Erstes Bild als letztes
    ];

    useEffect(() => {
        const handleScroll = () => {
            const gallery = galleryRef.current;
            if (!gallery) return;

            // Prüfen, ob das Ende erreicht ist
            if (gallery.scrollLeft <= 0) {
                // Zurück zum letzten echten Bild scrollen
                gallery.scrollLeft = gallery.scrollWidth - gallery.clientWidth * 2;
            } else if (
                gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth
            ) {
                // Zurück zum ersten echten Bild scrollen
                gallery.scrollLeft = gallery.clientWidth;
            }
        };

        const scrollInterval = setInterval(() => {
            if (galleryRef.current) {
                galleryRef.current.scrollBy({ left: scrollSpeed, behavior: 'smooth' });
            }
        }, 20);

        galleryRef.current.addEventListener('scroll', handleScroll);

        return () => {
            clearInterval(scrollInterval);
            galleryRef.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="gallery-container">
            <h1 className="gallery-title">HK Gallery</h1>
            <div ref={galleryRef} className="gallery">
                {extendedImages.map((image, index) => (
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
