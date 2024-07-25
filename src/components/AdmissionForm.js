// src/components/AdmissionForm.js
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function AdmissionForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    contact: '',
    presentAddress: '',
    permanentAddress: '',
    adharCard: null,
    passportPhoto: null,
    lastClassPercentage: '',
    fatherName: '',
    motherName: '',
    region: '',
    guardian: '',
    admissionClass: '' // Added for class selection
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    
    // Validation logic
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.contact) newErrors.contact = 'Contact number is required';
    else if (!/^\d{10}$/.test(formData.contact)) newErrors.contact = 'Contact number must be 10 digits';
    if (!formData.presentAddress) newErrors.presentAddress = 'Present address is required';
    if (!formData.permanentAddress) newErrors.permanentAddress = 'Permanent address is required';
    if (!formData.adharCard) newErrors.adharCard = 'Adhar card is required';
    if (!formData.passportPhoto) newErrors.passportPhoto = 'Passport size photo is required';
    if (!formData.lastClassPercentage) newErrors.lastClassPercentage = 'Last class percentage is required';
    if (isNaN(formData.lastClassPercentage) || formData.lastClassPercentage < 0 || formData.lastClassPercentage > 100) newErrors.lastClassPercentage = 'Last class percentage must be a number between 0 and 100';
    if (!formData.fatherName) newErrors.fatherName = 'Father\'s name is required';
    if (!formData.motherName) newErrors.motherName = 'Mother\'s name is required';
    if (!formData.region) newErrors.region = 'Region is required';
    if (!formData.guardian) newErrors.guardian = 'Guardian is required';
    if (!formData.admissionClass) newErrors.admissionClass = 'Admission class is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission and PDF generation
      console.log('Form submitted:', formData);
      setSuccessMessage('Your admission form has been submitted successfully!');
      setErrorMessage('');

      // Generate PDF
      const formElement = document.getElementById('admission-form');
      html2canvas(formElement).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 190;
        const pageHeight = 295;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;

        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 10, -(imgHeight - heightLeft), imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('admission_form.pdf');
      });

      // Reset form
      setFormData({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        contact: '',
        presentAddress: '',
        permanentAddress: '',
        adharCard: null,
        passportPhoto: null,
        lastClassPercentage: '',
        fatherName: '',
        motherName: '',
        region: '',
        guardian: '',
        admissionClass: ''
      });
      setErrors({});
    } else {
      setErrorMessage('Please fix the errors in the form.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <form 
        id="admission-form"
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Student Admission Form</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left Column */}
          <div className="flex flex-col">
            <label className="block mb-2">
              <span className="text-gray-700">First Name</span>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Middle Name</span>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Contact Number</span>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.contact ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Father's Name</span>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.fatherName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.fatherName && <p className="text-red-500 text-sm">{errors.fatherName}</p>}
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Region</span>
              <input
                type="text"
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.region ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.region && <p className="text-red-500 text-sm">{errors.region}</p>}
            </label>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <label className="block mb-2">
              <span className="text-gray-700">Last Name</span>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Present Address</span>
              <textarea
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.presentAddress ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.presentAddress && <p className="text-red-500 text-sm">{errors.presentAddress}</p>}
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Permanent Address</span>
              <textarea
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.permanentAddress ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.permanentAddress && <p className="text-red-500 text-sm">{errors.permanentAddress}</p>}
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Adhar Card Document</span>
              <input
                type="file"
                name="adharCard"
                accept="application/pdf"
                onChange={handleFileChange}
                required
                className={`mt-1 block w-full ${errors.adharCard ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.adharCard && <p className="text-red-500 text-sm">{errors.adharCard}</p>}
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Passport Size Photo</span>
              <input
                type="file"
                name="passportPhoto"
                accept="image/*"
                onChange={handleFileChange}
                required
                className={`mt-1 block w-full ${errors.passportPhoto ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.passportPhoto && <p className="text-red-500 text-sm">{errors.passportPhoto}</p>}
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Last Class Percentage</span>
              <input
                type="number"
                name="lastClassPercentage"
                value={formData.lastClassPercentage}
                onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.lastClassPercentage ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.lastClassPercentage && <p className="text-red-500 text-sm">{errors.lastClassPercentage}</p>}
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Mother's Name</span>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.motherName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.motherName && <p className="text-red-500 text-sm">{errors.motherName}</p>}
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Guardian</span>
              <input
                type="text"
                name="guardian"
                value={formData.guardian}
                onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.guardian ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.guardian && <p className="text-red-500 text-sm">{errors.guardian}</p>}
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Class for Admission</span>
              <select
                name="admissionClass"
                value={formData.admissionClass}
                onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.admissionClass ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              >
                <option value="">Select Class</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                {/* Add more options as needed */}
              </select>
              {errors.admissionClass && <p className="text-red-500 text-sm">{errors.admissionClass}</p>}
            </label>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
        
        {successMessage && <p className="mt-4 text-green-500 text-center">{successMessage}</p>}
        {errorMessage && <p className="mt-4 text-red-500 text-center">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default AdmissionForm;
