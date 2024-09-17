import React, { useState,useContext } from "react";
import { Logo, iconCart } from "../assets/Index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const searchHandler = () => {
    navigate("/product?type=" + type);
  };

  return (
    <div class="px-4 py-5 mx-auto z-50 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="relative flex items-center justify-between">
        <Link to="/"><img src={Logo} alt="Logo" className="w-28" /></Link>

        <ul class="items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/"
              title="Our product"
              class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              title="Our product"
              class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              aria-label="Product pricing"
              title="Product pricing"
              class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              title="About us"
              class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Contact
            </Link>
          </li>
          <li>
            <div className="flex items-center space-x-4">
              <div className="flex w-full ">
                <input
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  onBlur={searchHandler}
                  placeholder="Search products..."
                  className="flex-1 text-black caret-black rounded-l-full px-4 py-3 border bg-white border-gray-300 focus:outline-none "
                />
                <button type = "submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-r-full" onClick={searchHandler}>
                <FaSearch/>
                </button>
              </div>
             
            </div>
          </li>
          <li>
            <Link to="/cart">
              <div className="relative w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center">
                <img src={iconCart} alt="Cart" className="w-6" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-2">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
          </li>
        </ul>
        <ul class="items-center hidden space-x-8 lg:flex">
          <li>
          <Link to="/Login">
          <button
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            aria-label="Login"
            title="Login"
          >
            Login
          </button>
        </Link>
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div class="absolute top-0 z-50 left-0 w-full">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <img src={Logo} alt="Logo" className="w-28" />
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <Link
                        to="/"
                        aria-label="Our product"
                        title="Our product"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/product"
                        title="Our product"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Product
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        title="Product pricing"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        title="About us"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Contact
                      </Link>
                    </li>
                    <div className="flex w-full ">
                <input
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  onBlur={searchHandler}
                  placeholder="Search products..."
                  className="flex-1 text-black rounded-l-full caret-black px-4 py-3 border bg-white border-gray-300 focus:outline-none "
                />
                <button type = "submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-r-full" onClick={searchHandler}>
                <FaSearch/>
                </button>
              </div>
                    <li>
                      <Link to="/cart">
                        <div className="relative w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center">
                          <img src={iconCart} alt="Cart" className="w-6" />
                          {cartCount > 0 && (
                            <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-2">
                              {cartCount}
                            </span>
                          )}
                        </div>
                      </Link>
                    </li>
                    <li>
                    <Link to="/Login">
                      <button
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Login"
                        title="Login"
                      >
                        Login
                      </button>
                    </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// import {Logo} from "../assets/Index";
// import {Link } from "react-router-dom";
// import { iconCart } from "../assets/Index";

// const Navbar = () =>{
//     return (
//         <nav className="bg-gray-700 w-full ">
//             <div className="container px-7 py-4 absolute z-3 bg-black">
//                 <div className="flex justify-between items-center">
//                     <img src={Logo} alt=""  className="w-28" />
//                     <ul className="flex space-x-8">
//                         <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
//                         <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
//                         <li><a href="#" className="text-gray-300 hover:text-white" ><Link to ='/Product'>Product</Link></a></li>
//                         <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
//                     </ul>
//                     <div className='w-10 h-10 bg-gray-100 rounded-full
//                       flex justify-center items-center relative' >
//                      <img src={iconCart} alt="" className='w-6'/>
//                     </div>
//                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to ='/Login'>Login</Link></button>
//                 </div>
//             </div>

//         </nav>
//     )
// }
// export default Navbar