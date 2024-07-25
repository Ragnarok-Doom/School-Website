// src/components/AboutUs.js
import React, { useContext } from 'react';
import SchoolContext from '../context/SchoolContext';
import { FaLowVision } from "react-icons/fa";

function AboutUs() {
  const { schoolData } = useContext(SchoolContext);

  return (
    <>
      <div className='w-full h-[300px] md:h-[500px] relative overflow-hidden'>
        <img
          src='https://st2.depositphotos.com/32687418/47319/i/450/depositphotos_473198714-stock-photo-ranchi-jharkhand-india-june-2021.jpg'
          className='w-full h-full object-cover blur-sm'
          alt="School Background"
        />
        <h1 className="absolute text-white text-4xl md:text-6xl lg:text-8xl font-black top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          About Us
        </h1>
      </div>
      <section id='about-us' className='w-full h-auto flex flex-col relative bg-gray-100'>
        <div className='flex flex-col md:flex-row bg-blue-400 w-full h-auto md:h-[450px]'>
          <div className='w-full md:w-1/2 p-4 md:p-8'>
            <p className='text-white'>{schoolData.history}</p>
          </div>
          <div className='w-full md:w-1/2 h-full overflow-hidden'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBv3ky_rgjaSdfNm8k-65pw6eFbvWkQ60qyg&s'
              className='w-full h-full object-cover'
              alt="School History"
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row w-full h-auto'>
          <div className='w-full md:w-1/3 bg-blue-100 h-full flex flex-col gap-5 items-center p-4 md:p-8'>
            <h3 className='text-lg md:text-xl font-semibold'>1985 - 1995: The Early Years</h3>
            <p>{schoolData.hist1}</p>
          </div>
          <div className='w-full md:w-1/3 h-full flex items-center gap-5 flex-col p-4 md:p-8'>
            <h3 className='text-lg md:text-xl font-semibold'>1996 - 2005: Expansion and Growth</h3>
            <p>{schoolData.hist2}</p>
          </div>
          <div className='w-full md:w-1/3 bg-blue-700 h-full flex items-center gap-5 flex-col p-4 md:p-8'>
            <h3 className='text-lg md:text-xl font-semibold'>2006 - 2015: Embracing Technology</h3>
            <p>{schoolData.hist3}</p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row w-full h-auto'>
          <div className='w-full md:w-3/5 h-full overflow-hidden relative flex items-center gap-5 flex-col p-4 md:p-8'>
            <h3 className='text-lg md:text-xl font-semibold'>2016 - Present: Excellence and Innovation</h3>
            <p>{schoolData.hist4}</p>
          </div>  
          <div className='w-full md:w-2/5 h-full flex flex-col justify-center items-center p-4 md:p-8'>
            <h1 className='flex flex-col items-center text-xl md:text-2xl font-semibold'><FaLowVision className='w-5 h-5' />Vision</h1>
            <p className='text-center'>{schoolData.vision}</p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row w-full h-auto'>
          <div className='w-full md:w-3/5 h-full overflow-hidden relative flex items-center gap-5 flex-col p-4 md:p-8'>
            <h3 className='text-lg md:text-xl font-semibold'>Mission</h3>
            <p>{schoolData.mission}</p>
          </div>  
          <div className='w-full md:w-2/5 h-full flex flex-col justify-center items-center p-4 md:p-8'>
            <h1 className='flex flex-col items-center text-xl md:text-2xl font-semibold'>Principal's Message</h1>
            <p className='text-center'>{schoolData.principalMessage}</p>
          </div>
        </div>
        <div className='flex flex-wrap w-full h-auto'>
          {schoolData.infrastructure.map((item, index) => (
            <div
              key={index}
              className='group w-full sm:w-1/2 md:w-1/4 h-[300px] overflow-hidden relative'
            >
              <img
                src={['https://5.imimg.com/data5/DJ/PV/GLADMIN-64970456/computer-lab-class.png', 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaG9vbCUyMGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D', 'https://theeducationview.com/wp-content/uploads/2022/07/Library-A-School-Inside-a-School.jpg', 'https://i.dailymail.co.uk/i/pix/scaled/2014/07/25/article-2706021-1FFC95FF00000578-989_636x382.jpg'][index]}
                className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:brightness-50 group-hover:opacity-60'
                alt={`Infrastructure ${index + 1}`}
              />
              <h1 className='px-5 text-2xl md:text-3xl absolute inset-0 flex items-center justify-center text-white font-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                {item}
              </h1>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutUs;
