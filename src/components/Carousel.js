// src/components/Carousel.js
import React, { useContext } from 'react';
import Slider from 'react-slick';
import SchoolContext from '../context/SchoolContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
  const { schoolData } = useContext(SchoolContext);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {schoolData.carousels.photos.map((photo, index) => (
        <div key={index} className="carousel-slide w-[500px] h-[500px]">
          <img src={photo.src} alt={photo.description} className=' w-full h-full object-cover rounded-3xl' />
          <h2 className='text-3xl text-center font-black'>{photo.description}</h2>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;


// {schoolData.gallery.photos.map((photo, index) => (
//   <div key={index} className="carousel-slide w-[500px] h-[500px]">
//     <img src={photo.src} alt={photo.description} className=' w-full h-full object-cover rounded-3xl' />
//     <h2 className='text-3xl text-center font-black'>{photo.description}</h2>
//   </div>
// ))}
