import React from "react";
import { dropDownLinks, navLinks } from "../constants/constants";
import { Logo } from "../../public/images/image";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="">
      <div className="py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="">
            <img src={Logo} alt="Logo" className="w-28" />
          </a>

          {/* Nav Items */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a className="inline-block px-4 font-semibold text-xl" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
                <li className="relative cursor-pointer group ">
                  <a href="#" className="px-4 font-semibold text-xl flex items-center gap-[2px]">
                    Products
                    <span>
                    <FaCaretDown className="group-hover:rotate-180 duration-300"/>
                  </span>
                  </a>

                  {/* Dropdown Links */}
                  <div>
                    <ul>
                    {dropDownLinks.map((link) => (
                        <li key={link.label}>
                          <a className="inline-block px-4 font-semibold text-xl" href={link.href}>
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
            </ul>
          </div>

          {/* Navbar Right Section */}
          <div className="flex justify-center items-center gap-4">
            {/* Search Bar Section */}
            <div className="">
              {/* <input type="text" placeholder="Search" className="search-bar"/> */}
              {/* <FaSearch className=""/> */}
            </div>
            {/* Cart link */}
            <div className="relative p-2">
              <FaCartShopping className="text-xl"/>
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 
              flex justify-center items-center text-xs">3</div>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
