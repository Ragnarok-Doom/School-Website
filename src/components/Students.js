import React, { useContext } from 'react';
import SchoolContext from '../context/SchoolContext';

function Students() {
  const { schoolData } = useContext(SchoolContext);

  return (
    <>
      <div className='w-full h-[500px] relative overflow-hidden'>
        <img 
          src='https://www.vedantu.com/seo/content-images/95444fcf-ba1c-467b-85d5-e8d0fcb2c131.jpg' 
          className='w-full h-full object-cover blur-sm' 
          alt='Students Background' 
        />
        <h1 className="absolute text-white text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-black top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          Students
        </h1>
      </div>
      
      <section id='about-us' className='about-us w-full h-fit flex flex-col relative py-8'>
        <div className='flex flex-col md:flex-row bg-blue-200 text-white text-center'>
          <div className='w-full md:w-1/2 p-4 md:p-16'>
            <h1 className='text-xl md:text-2xl font-black mb-5'>Extracurricular Activities</h1>
            <p>{schoolData.students.life1}</p>
          </div>
          <div className='w-full md:w-1/2 p-4 md:p-16'>
            <h1 className='text-xl md:text-2xl font-black mb-5'>Clubs and Societies</h1>
            <p>{schoolData.students.life2}</p>
          </div>
        </div>
      </section>
      
      <div className='text-center w-full p-4 md:p-8'>
        <h1 className='text-2xl md:text-3xl font-black'>Achievements</h1>
      </div>
      
      <section id='about-us' className='about-us w-full h-fit flex flex-col relative py-8'>
        <div className='flex flex-col md:flex-row w-full'>
          <div className='w-full md:w-1/3 bg-blue-100 flex flex-col gap-5 items-center p-4 md:p-8'>
            <img 
              src='https://plus.unsplash.com/premium_photo-1677231559666-53bed9be43ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D' 
              className='w-36 h-36 md:w-40 md:h-40' 
              alt='Achievement 1' 
            />
            <p>{schoolData.students.achievements[0]}</p>
          </div>
          <div className='w-full md:w-1/3 bg-blue-100 flex flex-col gap-5 items-center p-4 md:p-8'>
            <img 
              src='https://static.vecteezy.com/system/resources/thumbnails/030/798/360/small_2x/beautiful-asian-girl-wearing-over-size-hoodie-in-casual-style-ai-generative-photo.jpg' 
              className='w-36 h-36 md:w-40 md:h-40' 
              alt='Achievement 2' 
            />
            <p>{schoolData.students.achievements[1]}</p>
          </div>
          <div className='w-full md:w-1/3 bg-blue-100 flex flex-col gap-5 items-center p-4 md:p-8'>
            <img 
              src='https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?cs=srgb&dl=pexels-fauxels-3184398.jpg&fm=jpg' 
              className='w-36 h-36 md:w-40 md:h-40' 
              alt='Achievement 3' 
            />
            <p>{schoolData.students.achievements[2]}</p>
          </div>
        </div>
      </section>
      
      <div className='text-center w-full p-4 md:p-8'>
        <h1 className='text-2xl md:text-3xl font-black'>Student Council</h1>
      </div>
      
      <section id='about-us' className='about-us w-full h-fit flex flex-col relative py-8'>
        <div className='flex flex-col md:flex-row w-full'>
          <div className='w-full md:w-1/3 bg-blue-100 flex flex-col gap-5 items-center p-4 md:p-8'>
            <img 
              src='https://genevaclassicalacademy.com/wp-content/uploads/2018/12/9-12-grade-boys-uniform-new.jpeg' 
              className='w-36 h-36 md:w-40 md:h-40' 
              alt='President' 
            />
            <p>President - {schoolData.students.council.president}</p>
          </div>
          <div className='w-full md:w-1/3 bg-blue-100 flex flex-col gap-5 items-center p-4 md:p-8'>
            <img 
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT192zTKeFKQ1jd5x0yv5fYobT_1fIoflM8GQ&s' 
              className='w-36 h-36 md:w-40 md:h-40' 
              alt='Vice President' 
            />
            <p>Vice President - {schoolData.students.council.vicePresident}</p>
          </div>
          <div className='w-full md:w-1/3 bg-blue-100 flex flex-col gap-5 items-center p-4 md:p-8'>
            <img 
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTH5tVMrfSQk5-YaI603L3iDKmaA-2XcfZxQ&s' 
              className='w-36 h-36 md:w-40 md:h-40' 
              alt='Secretary' 
            />
            <p>Secretary - {schoolData.students.council.secretary}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Students;
