import React from 'react';

const ProductCard = ({ category, price, imageSrc, title }) => {
  return (
    <div className="cartOne w-full h-[300px] border-2 border-black">
      <div className="image h-[70%] bg-gray-300" style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className="p-4">
        <p className="text-gray-600">{category}</p>
        <h3 className="text-lg font-semibold mt-1">{title}</h3>
        <p className="mt-1">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
