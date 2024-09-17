import React, { useState } from "react";
import { Product1, Product2 } from "../assets/Index.js";
import { ImageList } from "../Constants/index.js";
import { Link } from "react-router-dom";

const Home = () => {
  const [image, setImage] = useState(Product1);
  const [title, setTitle] = useState(
    "Embrace Pure Wellness with Our Organic Products"
  );
  const [description, setDescription] = useState(
    "Discover nature’s best with our premium organic products. From fresh produce to natural skincare, enjoy purity and sustainability. Embrace a healthier lifestyle today."
  );

  return (
    <div className="relative">
      <div className="container mx-auto px-4 py-8 md:px-8 md:py-16 flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-8 md:mb-0">
          <h1
            data-aos="zoom-out"
            className="text-green-500 text-3xl md:text-5xl font-bold mb-4"
          >
            {title}
          </h1>
          <p
            data-aos="slide-up"
            className="text-gray-500 text-base md:text-lg mb-6"
          >
            {description}
          </p>
          <Link to ="/Product" ><button
            data-aos-delay="200"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transition-transform transform hover:scale-105 duration-200"
          >
            Shop Now
          </button> </Link>
        </div>
        <div className="flex-1">
          <img
            src={image}
            data-aos="zoom-in"
            alt="Product"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="absolute flex justify-center w-full bottom-[-40px] md:bottom-[-60px] left-1/2 transform -translate-x-1/2 space-x-4">
        {ImageList.map((item) => (
          <div
            className="cursor-pointer w-16 h-16 md:w-24 md:h-24"
            key={item.id}
            onClick={() => {
              setImage(
                item.id === 1 ? Product1 : item.id === 2 ? Product2 : Product3
              );
              setTitle(item.title);
              setDescription(item.description);
            }}
          >
            <img src={item.image} alt={`Thumbnail ${item.id}`} className="w-full h-full object-cover rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
