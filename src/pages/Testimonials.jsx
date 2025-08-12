export default function Testimonials() {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "CEO, TechCorp",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      feedback:
        "DevMynt transformed our website with stunning design and flawless performance. Highly recommended!",
    },
    {
      name: "Mark Thompson",
      role: "Founder, StartupX",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      feedback:
        "Professional team, great communication, and delivered beyond expectations.",
    },
    {
      name: "Sophia Lee",
      role: "Marketing Head, BrightMedia",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      feedback:
        "Their web solutions improved our user engagement dramatically. The experience was seamless!",
    },
    {
      name: "James Wilson",
      role: "Product Manager, Innovatech",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
      feedback:
        "Top-notch quality and speedy delivery. DevMynt’s expertise is unmatched.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-gray-900 text-white md:py-12 py-6 px-6 md:px-20"
    >
      <h2 className="md:text-5xl text-4xl font-extrabold text-cyan-400 mb-12 border-b-4 border-cyan-600 inline-block pb-2">
        Testimonials
      </h2>

      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map(({ name, role, photo, feedback }, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-cyan-500 transition-shadow duration-300"
          >
            <img
              src={photo}
              alt={name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-cyan-500"
            />
            <p className="text-gray-300 mb-6 italic">"{feedback}"</p>
            <h3 className="text-xl font-semibold text-cyan-400">{name}</h3>
            <p className="text-sm text-gray-400">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
