import {
  FiCode,
  FiLayers,
  FiShoppingCart,
  FiSearch,
  FiSmartphone,
  FiSettings,
} from "react-icons/fi";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Building fast, responsive, and scalable websites tailored to your business needs.",
      icon: <FiCode size={48} className="text-cyan-400" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive interfaces and seamless user experiences to engage your audience.",
      icon: <FiLayers size={48} className="text-cyan-400" />,
    },
    {
      title: "E-commerce Solutions",
      description:
        "Custom online stores with smooth checkout and seamless payment integrations.",
      icon: <FiShoppingCart size={48} className="text-cyan-400" />,
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your website’s visibility with advanced SEO strategies and analytics.",
      icon: <FiSearch size={48} className="text-cyan-400" />,
    },
    {
      title: "Mobile Responsive Design",
      description:
        "Ensuring your website looks and works perfectly on all devices.",
      icon: <FiSmartphone size={48} className="text-cyan-400" />,
    },
    {
      title: "Backend Development",
      description:
        "Robust backend solutions to power your applications securely and efficiently.",
      icon: <FiSettings size={48} className="text-cyan-400" />,
    },
  ];

  return (
    <section
      id="services"
      className="bg-gray-900 text-white flex flex-col items-center px-6 md:px-12 py-12"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <h2 className="md:text-5xl text-4xl font-extrabold text-cyan-400 mb-16 border-b-4 border-cyan-600 inline-block pb-3 tracking-wide">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full">
        {services.map(({ title, description, icon }, idx) => (
          <article
            key={idx}
            tabIndex={0}
            className="group bg-gray-800 rounded-xl p-8 shadow-lg shadow-cyan-900/40
                       hover:shadow-cyan-500 focus:shadow-cyan-500 focus:outline-none
                       transition-shadow transform hover:scale-105 focus:scale-105 duration-300 cursor-pointer
                       flex flex-col items-start gap-6"
            aria-label={title}
          >
            <div className="mb-2">{icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-cyan-400 tracking-wide">
              {title}
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-md">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
