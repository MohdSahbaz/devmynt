export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Building fast, responsive, and scalable websites tailored to your business needs.",
      icon: (
        <svg
          className="w-14 h-14 text-cyan-400 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4a2 2 0 012-2h14a2 2 0 012 2v16l-7-5-7 5V4z"
          />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive interfaces and seamless user experiences to engage your audience.",
      icon: (
        <svg
          className="w-14 h-14 text-cyan-400 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 14l6.16-3.422a12.083 12.083 0 01.84 6.507L12 20l-7-5 6.16-3.422z"
          />
        </svg>
      ),
    },
    {
      title: "E-commerce Solutions",
      description:
        "Custom online stores with smooth checkout and seamless payment integrations.",
      icon: (
        <svg
          className="w-14 h-14 text-cyan-400 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h18l-1 9H4L3 3z"
          />
          <circle cx="7" cy="21" r="2" />
          <circle cx="17" cy="21" r="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
      ),
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your website’s visibility with advanced SEO strategies and analytics.",
      icon: (
        <svg
          className="w-14 h-14 text-cyan-400 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6 md:px-12 py-6"
    >
      <h2 className="md:text-5xl text-4xl font-extrabold text-cyan-400 mb-12 border-b-4 border-cyan-600 inline-block pb-2">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {services.map(({ title, description, icon }, idx) => (
          <article
            key={idx}
            tabIndex={0}
            className="group bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-cyan-500 focus:shadow-cyan-500 focus:outline-none transition-shadow transform hover:scale-105 focus:scale-105 duration-300 cursor-pointer"
            aria-label={title}
          >
            <div className="mb-5">{icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-cyan-400">
              {title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
