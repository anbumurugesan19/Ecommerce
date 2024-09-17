import React from 'react'

const ProductCard = ({name, price, image}) => {
  return (
    <div className="group relative border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">${price}</p>
      </div>
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600">Add to Cart</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-green-600">Quick View</button>
      </div>
    </div>
  );
}

export default ProductCard