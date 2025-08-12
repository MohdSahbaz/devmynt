export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "Full-featured online store with payment gateway and admin panel.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Corporate Website",
      description:
        "Modern corporate site with responsive design and SEO optimization.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Creative portfolio to showcase work with smooth animations.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Mobile App Landing",
      description: "Landing page for a mobile app with engaging UI/UX.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
  ];

  return (
    <section
      id="portfolio"
      className="min-h-screen bg-gray-900 text-white md:py-12 py-6 px-6 md:px-20"
    >
      <h2 className="md:text-5xl text-4xl font-extrabold text-cyan-400 mb-12 border-b-4 border-cyan-600 inline-block pb-2">
        Portfolio
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {projects.map(({ title, description, image, link }, idx) => (
          <a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-cyan-500 transition-shadow duration-300"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                {title}
              </h3>
              <p className="text-gray-300 text-sm">{description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
