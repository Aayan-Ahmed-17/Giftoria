import React from "react";
import logo from "../../assets/favicon.svg";
import { Menu, MenuIcon, Search, ShoppingCart } from "lucide-react";

const Header = () => {
  const navLinks = ["Home", "Restaurants", "Page", "Contact", "Profile"];

  return (
    // <header className="bg-[#ffbc1f] text-white">
    //   <div className="container mx-auto px-4 flex items-center justify-between h-16">
    //     {/* Logo */}
    //     <div className="flex items-center">
    //       <img
    //         src={logo}
    //         alt="Logo"
    //         className="h-10 mr-2"
    //       />
    //       <span className="text-3xl font-semibold">Giftoria</span>
    //     </div>

    //     {/* Navigation Links */}
    //     <nav className="hidden md:flex space-x-5">
    //       <a href="#" className="text-lg hover:text-gray-400">
    //         Home
    //       </a>
    //       <a href="#" className="text-lg hover:text-gray-400">
    //         Smart Watches
    //       </a>
    //       <a href="#" className="text-lg hover:text-gray-400">
    //         Earbuds
    //       </a>
    //       <a href="#" className="text-lg hover:text-gray-400">
    //         Men
    //       </a>
    //       <a href="#" className="text-lg hover:text-gray-400">
    //         Women
    //       </a>
    //       <a href="#" className="text-lg hover:text-gray-400">
    //         Support
    //       </a>
    //     </nav>

    //     {/* Icons */}
    //     <div className="flex items-center space-x-4">
    //       <button>
    //       <Search/>
    //       </button>
    //       <button>
    //       <ShoppingCart />
    //       </button>
    //     </div>

    //     {/* Mobile Menu Toggle */}
    //     <div className="md:hidden">
    //       <button id="menu-toggle">
    //         <MenuIcon/>
    //       </button>
    //     </div>
    //   </div>

    //   {/* Mobile Menu */}
    //   <div className="md:hidden hidden" id="mobile-menu">
    //     <nav className="flex flex-col space-y-4 p-4 bg-black">
    //       <a href="#" className="hover:text-gray-400">
    //         Home
    //       </a>
    //       <a href="#" className="hover:text-gray-400">
    //         Smart Watches
    //       </a>
    //       <a href="#" className="hover:text-gray-400">
    //         Earbuds
    //       </a>
    //       <a href="#" className="hover:text-gray-400">
    //         Men
    //       </a>
    //       <a href="#" className="hover:text-gray-400">
    //         Women
    //       </a>
    //       <a href="#" className="hover:text-gray-400">
    //         Support
    //       </a>
    //     </nav>
    //   </div>
    // </header>

    <header className="bg-[#ffbc1f] text-black shadow-lg">
      <nav className="hidden mx-auto p-4 lg:flex items-center justify-between">
        <div className="logo flex bg-red-100">
          <img src={logo} alt="Logo" className="h-10 mr-2" />
          <span className="text-3xl font-semibold">Giftoria</span>
        </div>
        <ul className="nav-links flex gap-4 text-lg">
          {navLinks.map((list, index) => {
            return <li key={index}>{list}</li>;
          })}
        </ul>
        <div className="secondary-links flex">
            {/* <Men */}
        </div>
      </nav>
      <nav className="flex px-2 md:px-4 py-4 lg:hidden items-center justify-between">
        <div className="secondary-links flex gap-2">
            <button><Menu/></button>
            <button><Search/></button>
        </div>
        <div className="logo flex">
        <img
            src={logo}
            alt="Logo"
            className="h-8 mr-1"
          />
          <span className={`text-2xl font-semibold text-purple-900`}>Giftoria</span>
        </div>
        <div className="flex">
            <button>
                <ShoppingCart/>
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
