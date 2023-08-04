import React, { useState } from 'react'
import "./index.css"

export default function SingleProduct() {
    const [selectedImage, setSelectedImage] = useState('https://via.placeholder.com/400x400');

    const handleImageClick = (imageUrl) => {
      setSelectedImage(imageUrl);
    };
  
    const productImages = [
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/400x400',
      // Add more image URLs for different variations
    ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-semibold text-gray-800">Product Name</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <img
              className="w-full h-auto rounded-lg"
              src={selectedImage}
              alt="Product"
            />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {productImages.map((imageUrl, index) => (
                <img
                  key={index}
                  className={`cursor-pointer hover:opacity-75 ${
                    selectedImage === imageUrl ? 'opacity-75' : ''
                  }`}
                  src={imageUrl}
                  alt={`Product Variation ${index + 1}`}
                  onClick={() => handleImageClick(imageUrl)}
                />
              ))}
            </div>
          </div>
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold text-gray-800">Product Description</h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
              purus eu velit fringilla, id laoreet arcu aliquam.
            </p>
            <div className="mt-4">
              <span className="text-gray-700">Price:</span>
              <span className="ml-2 font-semibold text-indigo-600">$99.99</span>
            </div>
            <div className="mt-4">
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
                onClick={() => alert('Added to Cart')}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
