import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.44/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* Google Fonts import for Inter */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
        rel="stylesheet"
      />

      <main
        className="flex flex-col md:flex-row flex-1 items-center justify-between 
                   px-6 sm:px-12 md:px-16 py-10 md:py-16 gap-10 
                   bg-gray-900 text-white"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Left Text */}
        <section className="flex-1 max-w-xl space-y-8 animate-fadeInUp">
          <h1
            className="
              font-extrabold tracking-wide leading-tight
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
            "
          >
            Crafting Modern, High-Performance Web Solutions
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-lg">
            We blend creativity, functionality, and seamless user experience to
            build next-gen websites and applications.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="#about"
              className="inline-block w-full text-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg shadow-lg
                         hover:scale-105 hover:brightness-110 transition-transform duration-300
                         focus:outline-none focus:ring-4 focus:ring-cyan-400"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="inline-block w-full text-center px-8 py-3 bg-gray-700 text-white rounded-lg shadow-lg
                         hover:bg-gray-600 transition-colors duration-300
                         focus:outline-none focus:ring-4 focus:ring-gray-500"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* Right 3D Model */}
        <section
          className="flex-1 w-full h-[280px] sm:h-[320px] md:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden
                     shadow-2xl border border-gray-700 animate-fadeInUp"
        >
          <spline-viewer
            url="https://prod.spline.design/ivIb2NSp3hOUkGah/scene.splinecode"
            style={{ width: "100%", height: "100%", border: "none" }}
          ></spline-viewer>
        </section>

        {/* Animations */}
        <style jsx>{`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease forwards;
          }
        `}</style>
      </main>
    </>
  );
};

export default Home;
