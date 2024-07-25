// src/components/Gallery.js
import React, { useState } from 'react';
import GalleryFilter from './GalleryFilter';

const galleryData = {
  photos: [
    { src: "https://c1.wallpaperflare.com/preview/492/907/716/school-class-school-children-bali.jpg", alt: 'Sports Day', type: 'event1' },
    { src: "https://dwpszirakpur.com/wp-content/uploads/2016/12/DSC_1577-1200x480.jpg", type: 'event2' },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRsWefidYsa4C9XQjRDqHrdzeeEVDFBC4_Q&s", alt: 'Cultural Fest', type: 'event1' },
    { src: "https://exambazaar-2020.s3.amazonaws.com/37fbfe1fd5c03ae582635016c2ddb677.jpg", alt: 'Cultural Fest', type: 'event1' },
    { src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwbGlicmFyaWVzfGVufDB8fDB8fHww", alt: 'Cultural Fest', type: 'event1' },
  ]
};

function Gallery() {
  const [filter, setFilter] = useState('all');

  const filteredPhotos = galleryData.photos.filter(photo => filter === 'all' || photo.type === filter);

  return (
    <>
    <div className='w-full h-[500px] relative overflow-hidden'>
        <img 
          src='https://images.unsplash.com/photo-1518998053901-5348d3961a04?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D' 
          className='w-full h-full object-cover blur-sm' 
          alt='Gallery Background' 
        />
        <h1 className="absolute text-white text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-black top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          Gallery
        </h1>
      </div>
    <div className="gallery container mx-auto p-4">
      <GalleryFilter onFilterChange={setFilter} />
      <div className="gallery-grid mt-4 flex flex-wrap">
        {filteredPhotos.map((photo, index) => (
          <img key={index} src={photo.src} alt={photo.alt} className="w-[50%] h-auto " />
        ))}
      </div>
    </div>
    </>
  );
}

export default Gallery;
