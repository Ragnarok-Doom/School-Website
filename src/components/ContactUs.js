import React, { useContext } from 'react';
import ContactForm from './ContactForm';
import SchoolContext from '../context/SchoolContext';

function ContactUs() {
    const { schoolData } = useContext(SchoolContext);

    return (
        <div className="contact-us w-full h-fit p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                <div className="map-container w-full lg:w-1/2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.044396575311!2d-122.08385198436895!3d37.386051979831776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb6a8c7db05ef%3A0x34e1a05f9a0c7f80!2sGoogleplex!5e0!3m2!1sen!2sus!4v1633506508987!5m2!1sen!2sus"
                        className="w-full h-[300px] sm:h-[400px] lg:h-[450px] border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps"
                    ></iframe>
                    <div className="mt-5">
                        <h2 className="text-lg font-semibold">{schoolData.contact.address}</h2>
                        <h2 className="text-lg font-semibold">{schoolData.contact.phone}</h2>
                        <h2 className="text-lg font-semibold">{schoolData.contact.email}</h2>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
