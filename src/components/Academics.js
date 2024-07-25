// src/components/Academics.js
import React, { useContext } from 'react';
import SchoolContext from '../context/SchoolContext';

function Academics() {
  const { schoolData } = useContext(SchoolContext);

  return (
    <>
      <div className='w-full h-[40vh] relative overflow-hidden'>
        <img src='https://blog.universityconnection.in/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-19-at-18.31.27.jpeg' className='w-full h-full object-cover blur-sm' />
        <h1 className="absolute text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Academics</h1>
      </div>
      <section id='about-us' className='about-us w-full h-fit flex flex-col relative'>
        <div className='flex relative bg-blue-400 w-full h-[10vh] md:h-[15vh] justify-center items-center'>
          <div className='w-full'>
            <p className='p-5 text-center text-2xl md:text-3xl lg:text-4xl text-white'>Curriculum</p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row relative w-full h-auto md:h-[350px]'>
          <div className='w-full md:w-1/3 bg-blue-100 h-full flex flex-col gap-5 items-center p-8 md:p-16'>
            <h3 className='text-xl md:text-2xl'>Subjects for class 1 to 5</h3>
            <span>(Primary)</span>
            <p className='text-sm md:text-base'>{schoolData.curriculum.primary}</p>
          </div>
          <div className='w-full md:w-1/3 bg-blue-200 h-full flex flex-col gap-5 items-center p-8 md:p-16'>
            <h3 className='text-xl md:text-2xl'>Subjects for class 6 to 10</h3>
            <span>(Secondary)</span>
            <p className='text-sm md:text-base'>{schoolData.curriculum.secondary}</p>
          </div>
          <div className='w-full md:w-1/3 bg-blue-300 h-full flex flex-col gap-5 items-center p-8 md:p-16'>
            <h3 className='text-xl md:text-2xl'>Grades 11 and 12</h3>
            <span>(Senior Secondary)</span>
            <p className='text-sm md:text-base'><span className='text-lg md:text-2xl text-white'>Science : </span>{schoolData.curriculum.seniorSecondary.science}</p>
            <p className='text-sm md:text-base'><span className='text-lg md:text-2xl text-white'>Commerce : </span>{schoolData.curriculum.seniorSecondary.commerce}</p>
          </div>
        </div>
      </section>
      <div className='flex flex-col md:flex-row relative w-full h-auto'>
        <div className='w-full md:w-1/2 h-full overflow-hidden relative flex items-center gap-5 flex-col p-8 md:p-16'>
          <h3 className='text-xl md:text-2xl'>Teaching Methodologies</h3>
          <p className='text-sm md:text-base'>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
        </div>  
        <div className='w-full md:w-1/2 h-full overflow-hidden relative flex items-center gap-5 flex-col p-8 md:p-16'>
          <h3 className='text-xl md:text-2xl'>Educational Resources</h3>
          <p className='text-sm md:text-base'>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
        </div> 
      </div>
    </>
  );
}

export default Academics;
