// src/components/Home.js
import React, { useContext, useState } from 'react';
import CarouselComponent from './Carousel';
import SchoolContext from '../context/SchoolContext';
import logo from '../assets/logo.png';
import main from '../assets/main.png';
import { MdImportantDevices, MdAdd, MdRemove } from "react-icons/md";

function Home() {
  const { schoolData } = useContext(SchoolContext);
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <div className='home w-full h-[94vh] relative flex flex-col md:flex-row'>
        <div className='flex flex-col px-5 md:px-20 gap-3 w-full md:w-[50%] justify-center'>
          <img src={logo} className='w-[120px] md:w-[150px]' alt="School Logo" />
          <h2 className='text-xl md:text-3xl font-black leading-tight w-full md:w-[50%]'>
            Education is the key to unlocking the world, a passport to freedom.
          </h2>
          <p className='w-full md:w-[50%]'>{schoolData.introduction}</p>
        </div>
        <div className='w-full md:w-[50%] relative'>
          <h1 className='home-h' data={schoolData.name}>{schoolData.name}</h1>
          <div className='home-img'></div>
        </div>
      </div>

      <div className='carousel w-full h-fit relative overflow-hidden p-5 md:p-10 flex flex-col md:flex-row'>
        <div className='w-full md:w-[50%]'>
          <CarouselComponent />
        </div>
        <div className='w-full md:w-[50%] flex flex-col gap-4 px-5 md:px-10'>
          <p className='text-gray-500 text-center'>{schoolData.admissionProcess}</p>
          <hr className='w-full h-[1px] bg-slate-400 mb-10' />
          <MdImportantDevices className='mx-auto w-[80px] md:w-[100px] h-[80px] md:h-[100px]' />
          <p className='text-xl md:text-2xl text-center first-letter:text-green-600'>{schoolData.admissionCriteria}</p>
          <div className='mt-3'>
            <h4 className='text-xl md:text-2xl mb-5'>Important Dates</h4>
            <ul>
              <li className='text-green-600'>Admission Form Availability: {schoolData.importantDates.formAvailability}</li>
              <li className='text-red-600'>Last Date for Submission: {schoolData.importantDates.lastDate}</li>
              <li className='text-gray-500'>Entrance Test: {schoolData.importantDates.entranceTest}</li>
              <li>Announcement of Results: {schoolData.importantDates.resultsAnnouncement}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='faqs w-full h-fit relative overflow-hidden p-5 md:p-10 flex flex-col gap-4 px-5 md:px-10'>
        <h2 className='text-xl md:text-3xl font-black leading-tight mb-5'>Frequently Asked Questions</h2>
        {[
          { question: "What is the admission process?", answer: schoolData.admissionProcess },
          { question: "What are the admission criteria?", answer: schoolData.admissionCriteria },
          { question: "When are the important dates for admission?", answer: (
            <ul>
              <li><strong>Admission Form Availability:</strong> {schoolData.importantDates.formAvailability}</li>
              <li><strong>Last Date for Submission:</strong> {schoolData.importantDates.lastDate}</li>
              <li><strong>Entrance Test:</strong> {schoolData.importantDates.entranceTest}</li>
              <li><strong>Announcement of Results:</strong> {schoolData.importantDates.resultsAnnouncement}</li>
            </ul>
          )},
          { question: "What documents are required for admission?", answer: (
            <ul>
              <li>Birth Certificate</li>
              <li>Previous School Records</li>
              <li>Proof of Residence</li>
              <li>Passport-size Photographs</li>
            </ul>
          )},
          { question: "What are the school fees?", answer: schoolData.fees },
          { question: "What extracurricular activities are available?", answer: schoolData.extracurricularActivities },
          { question: "What is the school's contact information?", answer: schoolData.contactInfo }
        ].map((faq, index) => (
          <div key={index} className='faq-item border-b'>
            <div className='flex items-center justify-between cursor-pointer' onClick={() => toggleFAQ(index)}>
              <h3 className='text-lg md:text-xl font-semibold'>
                {index + 1}. {faq.question}
              </h3>
              {openFAQ === index ? (
                <MdRemove className='text-xl' />
              ) : (
                <MdAdd className='text-xl' />
              )}
            </div>
            <div className={`transition-all duration-300 ${openFAQ === index ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
              <p className='mt-2'>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
