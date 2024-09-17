import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    Pno: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);  // Show success toast
        setFormData({
          fname: '',
          lname: '',
          email: '',
          Pno: '',
          message: ''
        });
      } else {
        toast.error(result.message);  // Show error toast
      }
    } catch (error) {
      toast.error('An error occurred while submitting the form.');
    }
  };

  return (
    <>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-green-500 sm:text-4xl">Contact </h2>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-green-600">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="fname"
                  type="text"
                  autoComplete="given-name"
                  value={formData.fname}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset bg-white text-black ring-green-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-green-600">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="lname"
                  type="text"
                  autoComplete="family-name"
                  value={formData.lname}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-white text-black shadow-sm ring-1 ring-inset ring-green-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-green-600">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-white text-black shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset ring-green-300 outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 bg-white text-green-600">
                Phone number
              </label>
              <div className="relative mt-2.5">
                <input
                  id="phone-number"
                  name="Pno"
                  type="tel"
                  autoComplete="tel"
                  value={formData.Pno}
                  onChange={handleChange}
                  className="block w-full bg-white text-black rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset ring-green-300 outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 bg-white text-green-600">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-white text-black shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset ring-green-300 outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
      
      {/* Toastify Container */}
      <ToastContainer theme='dark' position='top-center'/>
    </>
  );
}

export default Contact;
