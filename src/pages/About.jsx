export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center px-6 md:py-12 py-6  md:px-20 gap-12"
    >
      {/* Left side - Logo / Visual */}
      <div className="hidden md:flex items-center justify-center w-full md:w-1/3">
        {/* Circle background with logo or icon */}
        <div className="bg-cyan-600/30 backdrop-blur-md rounded-full w-48 h-48 flex items-center justify-center shadow-lg">
          {/* Replace this SVG with your actual logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 64 64"
            stroke="currentColor"
            strokeWidth="3"
            className="w-24 h-24 text-cyan-400"
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
      <div className="w-full md:w-2/3 max-w-3xl">
        <h2 className="md:text-5xl text-4xl font-extrabold text-cyan-400 mb-6 border-b-4 border-cyan-600 inline-block pb-2">
          About DevMynt
        </h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
          At <span className="text-cyan-400 font-semibold">DevMynt</span>, we
          specialize in crafting sleek, high-performance web solutions that
          combine creativity, innovation, and usability.
        </p>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6">
          Whether you're a startup or an established business, we deliver
          tailored digital experiences that captivate users and drive results.
        </p>
        <p className="text-cyan-400 italic border-l-4 border-cyan-600 pl-6 text-lg md:text-xl max-w-xl">
          “Great design isn’t just what looks good — it’s how it works.” — Steve
          Jobs
        </p>
      </div>
    </section>
  );
}
