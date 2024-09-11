import React from 'react';
import '../styles/Gallerypage.css';
import img1 from '../assets/images/HK_Flag.png'
import img2 from '../assets/images/acghk.png'
import img3 from '../assets/images/bluelock.png'

const images = [
    { src: img1, info: 'Infos zum Bild 1' },
    { src: img1, info: 'Infos zum Bild 2' },
    { src: img2, info: 'Infos zum Bild 3' },
    { src: img3, info: 'Infos zum Bild 4' },
    { src: 'path/to/image5.jpg', info: 'Infos zum Bild 5' },

  ];
  
  const Gallerypage = () => {
    return (
      <div className="gallery-container">
        <div className="gallery-header">
          <h1 className="gallery-title">HK Gallery</h1>
        </div>
  
        <div className="gallery-wrapper">
          <button className="scroll-button left-0" onClick={() => scrollGallery(-300)}>◀</button>
          <div className="gallery-content">
            {images.map((image, index) => (
              <div key={index} className={`gallery-item gallery-item-${index}`}>
                <img src={image.src} alt={`Gallery image ${index + 1}`} />
                <p className="image-info">{image.info}</p>
              </div>
            ))}
          </div>
          <button className="scroll-button right-0" onClick={() => scrollGallery(300)}>▶</button>
        </div>
      </div>
    );
  };
  
  function scrollGallery(amount) {
    const gallery = document.querySelector('.gallery-content');
    gallery.scrollBy({ left: amount, behavior: 'smooth' });
  }

export default Gallerypage;
