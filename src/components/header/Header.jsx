import React from "react";
import logo from "../../assets/favicon.svg";
import { Menu, MenuIcon, Search, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#ffbc1f] text-white">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-10 mr-2"
          />
          <span className="text-3xl font-semibold">Giftoria</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-5">
          <a href="#" className="text-lg hover:text-gray-400">
            Home
          </a>
          <a href="#" className="text-lg hover:text-gray-400">
            Smart Watches
          </a>
          <a href="#" className="text-lg hover:text-gray-400">
            Earbuds
          </a>
          <a href="#" className="text-lg hover:text-gray-400">
            Men
          </a>
          <a href="#" className="text-lg hover:text-gray-400">
            Women
          </a>
          <a href="#" className="text-lg hover:text-gray-400">
            Support
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button>
          <Search/>
          </button>
          <button>
          <ShoppingCart />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button id="menu-toggle">
            <MenuIcon/>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden hidden" id="mobile-menu">
        <nav className="flex flex-col space-y-4 p-4 bg-black">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            Smart Watches
          </a>
          <a href="#" className="hover:text-gray-400">
            Earbuds
          </a>
          <a href="#" className="hover:text-gray-400">
            Men
          </a>
          <a href="#" className="hover:text-gray-400">
            Women
          </a>
          <a href="#" className="hover:text-gray-400">
            Support
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

