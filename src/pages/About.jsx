export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center px-6 md:py-16 py-10 md:px-20 gap-16 font-sans"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Left side - Logo / Visual */}
      <div className="hidden md:flex items-center justify-center w-full md:w-1/3 animate-fadeInLeft">
        <div className="bg-gradient-to-tr from-cyan-600/50 to-blue-500/50 backdrop-blur-md rounded-full w-56 h-56 flex items-center justify-center shadow-lg shadow-cyan-600/40">
          {/* Replace with your logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 64 64"
            stroke="currentColor"
            strokeWidth="3"
            className="w-28 h-28 text-cyan-400"
          >
            <circle cx="32" cy="32" r="30" />
            <path
              d="M20 33l9 9 15-23"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
          </svg>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-2/3 max-w-3xl animate-fadeInRight">
        <h2 className="md:text-5xl text-4xl font-extrabold text-cyan-400 mb-8 border-b-4 border-cyan-600 inline-block pb-3 tracking-wide">
          About DevMynt
        </h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
          At <span className="text-cyan-400 font-semibold">DevMynt</span>, we
          specialize in crafting sleek, high-performance web solutions that
          combine creativity, innovation, and usability.
        </p>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
          Whether you're a startup or an established business, we deliver
          tailored digital experiences that captivate users and drive results.
        </p>
        <p className="text-cyan-400 italic border-l-4 border-cyan-600 pl-6 text-lg md:text-xl max-w-xl shadow-md shadow-cyan-800/20">
          “Great design isn’t just what looks good — it’s how it works.” — Steve
          Jobs
        </p>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 1s ease forwards;
        }
      `}</style>
    </section>
  );
}
