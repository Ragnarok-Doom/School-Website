import React, { useContext } from 'react';
import SchoolContext from '../context/SchoolContext';

function Faculty() {
  const { schoolData } = useContext(SchoolContext);

  return (
    <>
      <div className='w-full h-[40vh] relative overflow-hidden'>
        <img 
          src='https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/b78c2cc6-5389-4056-9c5f-2662933e3d65/a-teacher-looks-to-chance-the-education-system-for-kids-in-wonderful-trailer-for-radical.jpg' 
          className='w-full h-full object-cover blur-sm' 
        />
        <h1 className="absolute text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Faculty</h1>
      </div>
      <section className='w-full h-full gap-5 p-5 md:p-10 flex flex-wrap justify-between'>
        {schoolData.faculty.map((member, index) => (
          <div key={index} className='w-full sm:w-[45%] md:w-[30%] lg:w-[22%] h-[450px] md:h-[500px] border rounded-[30px] overflow-hidden flex flex-col'>
            <div className='w-full h-[250px] md:h-[300px] relative bg-red-200 overflow-hidden'>
              <img 
                src={member.src} 
                alt={member.name} 
                className='w-full h-full object-cover'
              />
            </div>
            <div className='p-5 flex flex-col items-center text-center'>
              <h1 className='text-base md:text-lg'>{member.name}</h1>
              <h3 className='text-sm md:text-base'>({member.role})</h3>
              <p className='mt-3 text-sm md:text-base'>{member.experience}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Faculty;
