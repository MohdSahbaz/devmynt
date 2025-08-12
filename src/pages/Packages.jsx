export default function Packages() {
  const packages = [
    {
      name: "Starter",
      price: "$299",
      features: [
        "Custom website design",
        "Responsive layout",
        "Basic SEO setup",
        "Up to 5 pages",
      ],
    },
    {
      name: "Professional",
      price: "$799",
      features: [
        "Everything in Starter",
        "E-commerce integration",
        "Performance optimization",
        "Up to 15 pages",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "$1499",
      features: [
        "Everything in Professional",
        "Custom web applications",
        "API integrations",
        "Dedicated account manager",
        "Unlimited pages",
      ],
    },
  ];

  return (
    <section
      id="packages"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6 md:px-12 py-6"
    >
      <h2 className="text-4xl md:text-4xl font-extrabold text-cyan-400 mb-12 border-b-4 border-cyan-600 inline-block pb-2">
        Our Packages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full">
        {packages.map(({ name, price, features }, idx) => (
          <article
            key={idx}
            className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-cyan-500 transition-shadow duration-300 cursor-pointer flex flex-col"
          >
            <h3 className="text-3xl font-semibold mb-4 text-cyan-400">
              {name}
            </h3>
            <p className="text-4xl font-extrabold mb-6">{price}</p>
            <ul className="flex-1 space-y-3 text-gray-300 mb-6">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <svg
                    className="w-6 h-6 text-cyan-500 mr-3 flex-shrink-0"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-auto px-6 py-3 bg-cyan-500 rounded-lg text-white font-semibold hover:bg-cyan-600 transition">
              Choose Plan
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
