// src/components/Admissions.js
import React, { useContext } from 'react';
import SchoolContext from '../context/SchoolContext';
import AdmissionForm from './AdmissionForm';

function Admissions() {
    const { schoolData } = useContext(SchoolContext);

  return (
    <>
      <div className='w-full h-[40vh] relative overflow-hidden'>
        <img 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPf4OvDbaIpJ6q4tmPUMX_q5m0CTI4ljnj1w&s' 
          className='w-full h-full object-cover blur-sm' 
        />
        <h1 className="absolute text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Admission</h1>
      </div>
      <div className='w-full flex flex-col gap-5 bg-blue-100 text-center p-8 md:p-16'>
        <h1 className='text-base md:text-lg lg:text-xl'>{schoolData.admissionProcess}</h1>
        <h1 className='text-base md:text-lg lg:text-xl'>{schoolData.admissionCriteria}</h1>
      </div>
      <AdmissionForm />
      <div>
        {/* Additional content can be added here */}
      </div>
    </>
  );
}

export default Admissions;
