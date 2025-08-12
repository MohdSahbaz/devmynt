import { useState, useEffect } from "react";
import { FiMenu, FiX, FiHome } from "react-icons/fi";
import "./App.css";
import About from "./pages/About";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Load Spline Viewer script once
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.44/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

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
    <div className="bg-gray-900 text-white min-h-screen flex flex-col page1">
      {/* Header */}
      <nav className="flex sticky top-0 items-center justify-between px-6 md:px-12 py-4 bg-gray-800  z-30">
        <a
          href="/"
          className="text-2xl font-bold text-cyan-400 custome-font-family"
        >
          DevMynt
        </a>

        <div className="flex space-x-3 items-center">
          <a
            href={`#`}
            className="uppercase hover:text-cyan-600 transition cursor-pointer"
          >
            <FiHome size={22} className="text-cyan-400" />
          </a>
          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="focus:outline-none cursor-pointer"
            aria-label="Open menu"
          >
            <FiMenu size={28} className="text-cyan-400" />
          </button>
        </div>
      </nav>

      {/* Mobile Sliding Menu (Right Side) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg transform transition-transform duration-300 z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <span className="text-cyan-400 font-bold text-xl">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="focus:outline-none cursor-pointer"
            aria-label="Close menu"
          >
            <FiX size={28} className="text-cyan-400" />
          </button>
        </div>

        <nav className="flex flex-col mt-6 space-y-6 px-6 uppercase">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition text-lg"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay when menu open */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/70 bg-opacity-50 z-30"
        />
      )}

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row flex-1 items-center justify-between px-6 md:px-16 md:py-0 py-6 gap-10">
        {/* Left Text */}
        <section className="flex-1 space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug">
            Crafting Modern, High-Performance Web Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-lg">
            We blend creativity, functionality, and seamless user experience to
            build next-gen websites and applications.
          </p>
          <div className="space-x-4">
            <a
              href="#about"
              className="px-6 py-3 bg-cyan-500 text-white rounded-lg shadow-lg hover:bg-cyan-600 transition"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-600 transition"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* Right 3D Model */}
        <section className="flex-1 w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden">
          <spline-viewer
            url="https://prod.spline.design/ivIb2NSp3hOUkGah/scene.splinecode"
            style={{ width: "100%", height: "100%", border: "none" }}
          ></spline-viewer>
        </section>
      </main>
      <About />
      <Services />
      <Packages />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />
    </div>
  );
};

export default App;
