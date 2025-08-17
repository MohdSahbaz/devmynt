import { useEffect, useRef } from "react";

const Home = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.44/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

  const canvasRef = useRef(null);

  // Animated background waves (optimized - only initializes once)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Wave definition (no colors here)
    const waves = [
      { y: height * 0.5, length: 0.015, amplitude: 80, frequency: 0.01 },
      { y: height * 0.6, length: 0.02, amplitude: 60, frequency: 0.02 },
      { y: height * 0.4, length: 0.025, amplitude: 50, frequency: 0.018 },
    ];

    // Pick colors based on the current theme
    const getWaveColor = (index) => {
      if (true) {
        return [
          "rgba(0,255,255,0.2)",
          "rgba(0,180,255,0.15)",
          "rgba(0,140,255,0.1)",
        ][index];
      } else {
        return [
          "rgba(59,130,246,0.15)",
          "rgba(96,165,250,0.1)",
          "rgba(147,197,253,0.08)",
        ][index];
      }
    };

    let increment = 0;
    let animationId;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      waves.forEach((wave, i) => {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);

        for (let x = 0; x < width; x++) {
          const y =
            wave.y +
            Math.sin(x * wave.length + increment) *
              wave.amplitude *
              Math.sin(increment);
          ctx.lineTo(x, y);
        }

        // Use dynamic color based on theme
        ctx.strokeStyle = getWaveColor(i);
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      increment += 0.02;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []); // <-- empty dependency so it runs only once

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
        {/* Animated Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />

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
