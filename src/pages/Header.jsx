import { FiMenu, FiX, FiHome } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    "home",
    "about",
    "services",
    "packages",
    "portfolio",
    "testimonials",
    "team",
    "contact",
  ];

  return (
    <>
      {/* Header */}
      <nav
        className="
        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
        backdrop-blur-md border-b border-white/10 z-50 shadow-lg sticky top-0"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4 ">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            DevMynt
          </a>

          {/* Desktop Nav */}
          <div className="custome-navigation items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item == "home" ? "" : item}`}
                className="relative text-white/90 tracking-wide text-sm font-medium transition duration-300 hover:text-white before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-gradient-to-r  before:from-cyan-400  before:to-blue-500 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 transform hover:scale-105"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          {/* Icons & Hamburger */}
          <div className="flex custome-hamburger items-center space-x-4 md:space-x-6">
            <a
              href="#"
              className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_8px_rgba(56,189,248,0.7)]"
            >
              <FiHome
                className="text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300"
                size={20}
              />
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(56,189,248,0.8)]"
              aria-label="Open menu"
            >
              <FiMenu
                size={24}
                className="text-cyan-400 transition-colors duration-300 hover:text-cyan-300"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 
          bg-gradient-to-b from-gray-900 to-gray-800 
          shadow-2xl transform transition-all duration-500 ease-in-out z-50 
          ${
            menuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="text-cyan-400 font-bold text-xl">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(56,189,248,0.8)]"
            aria-label="Close menu"
          >
            <FiX
              size={24}
              className="text-cyan-400 transition-colors duration-300 hover:text-cyan-300"
            />
          </button>
        </div>

        <nav className="flex flex-col mt-6 space-y-6 px-6 uppercase">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="relative text-white/80 font-medium tracking-wide transition-colors duration-300 hover:text-white
                before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
                before:bg-gradient-to-r from-cyan-400 to-blue-500 before:transition-all before:duration-300 hover:before:w-full
                hover:before:opacity-100 before:opacity-0 transform hover:scale-105"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
        />
      )}
    </>
  );
};

export default Header;
