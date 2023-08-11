import React from 'react'

export default function Contact() {
  return (
    <div className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <form className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="md:w-1/2 md:ml-8 mt-6 md:mt-0">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-4">
              If you have any questions, feel free to contact us using the information below.
            </p>
            <ul className="text-gray-700">
              <li className="mb-2">
                <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
                123 Street, City, Country
              </li>
              <li className="mb-2">
                <i className="fas fa-phone-alt mr-2 text-blue-500"></i>
                +123 456 7890
              </li>
              <li className="mb-2">
                <i className="fas fa-envelope mr-2 text-blue-500"></i>
                info@example.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
