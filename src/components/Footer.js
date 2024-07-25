// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-6 md:p-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <div className="footer-section mx-auto md:mx-0 text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <p className="text-sm">
            Springdale Public School is dedicated to providing quality education and fostering a nurturing environment for students to grow and excel.
          </p>
        </div>
        <div className="footer-section mx-auto md:mx-0 text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/admissions" className="hover:underline">Admissions</a></li>
            <li><a href="/academics" className="hover:underline">Academics</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section mx-auto md:mx-0 text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
          <p className="text-sm flex items-center justify-center md:justify-start">
            <FaMapMarkerAlt className="mr-2" /> 123 School Road, City, State
          </p>
          <p className="text-sm flex items-center justify-center md:justify-start">
            <FaPhone className="mr-2" /> (123) 456-7890
          </p>
          <p className="text-sm flex items-center justify-center md:justify-start">
            <FaEnvelope className="mr-2" /> info@springdaleschool.com
          </p>
        </div>
        <div className="footer-section mx-auto md:mx-0 text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.facebook.com" className="text-white hover:text-gray-400">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.twitter.com" className="text-white hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" className="text-white hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" className="text-white hover:text-gray-400">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <hr className="border-gray-400" />
        <p className="mt-4">&copy; 2024 Springdale Public School. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
