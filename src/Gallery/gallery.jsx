import React from 'react'
import './gallery.css'
import GalleryImage1 from '../assets/gallery-1.png';
import GalleryImage2 from '../assets/gallery-2.png';
import GalleryImage3 from '../assets/gallery-3.png';
import GalleryImage4 from '../assets/gallery-4.png';
import BtnArrow from '../assets/white-arrow.png';

function Gallery() {
  return (
    <div>
      <div className="gallery">
            <img src={GalleryImage1} alt="" />
            <img src={GalleryImage2} alt="" />
            <img src={GalleryImage3} alt="" />
            <img src={GalleryImage4} alt="" />
      </div>
      <div className="button-div">
            <button className='gallery-button'>See more here<img src={BtnArrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Gallery