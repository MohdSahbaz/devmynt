import React from "react";

export default function Team() {
  const teamMembers = [
    {
      name: "Sahbaz",
      role: "Co-Founder & Full Stack Developer",
      bio: "Passionate about building innovative web solutions that transform businesses and improve user experience.",
      social: {
        linkedin: "https://linkedin.com/in/shahbaz",
        twitter: "https://twitter.com/shahbaz",
      },
    },
    {
      name: "Aamir",
      role: "Co-Founder & Full Stack Developer",
      bio: "Creative problem solver focused on user-centric and aesthetic digital experiences, building robust and scalable applications.",
      social: {
        linkedin: "https://linkedin.com/in/aamir",
        twitter: "https://twitter.com/aamir",
      },
    },
  ];

  return (
    <section
      id="team"
      className="bg-gray-900 text-white md:py-12 py-6 px-6 md:px-20"
    >
      <div className="text-center mb-12">
        <h2 className="md:text-5xl text-4xl font-extrabold text-cyan-400 inline-block pb-2">
          Meet Our Team
        </h2>
        <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
          We are a team of dedicated developers committed to creating
          exceptional digital products.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
        {teamMembers.map(({ name, role, bio, social }, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center border border-cyan-500 hover:shadow-cyan-500 transition-all duration-300"
          >
            <div className="w-28 h-28 flex items-center justify-center rounded-full bg-cyan-500 text-white text-4xl font-bold mb-4">
              {name.charAt(0)}
            </div>
            <h3 className="text-2xl font-semibold text-cyan-400">{name}</h3>
            <p className="text-sm text-gray-400 mb-2">{role}</p>
            <p className="text-gray-300 mt-4 mb-6">{bio}</p>
            <div className="flex space-x-4">
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  aria-label={`${name} LinkedIn`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.29c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.29h-3v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-3v-10h3v1.389c.6-.954 2.045-1.389 3.5-1.389 2.485 0 4.5 2.015 4.5 4.5v5.5z" />
                  </svg>
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  aria-label={`${name} Twitter`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.95.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.38 4.482 13.957 13.957 0 01-10.141-5.15 4.822 4.822 0 00-.666 2.475c0 1.708.869 3.216 2.188 4.099a4.903 4.903 0 01-2.228-.616v.061a4.927 4.927 0 003.946 4.827 4.996 4.996 0 01-2.224.084 4.936 4.936 0 004.6 3.417 9.868 9.868 0 01-6.102 2.104c-.395 0-.787-.023-1.174-.068a13.945 13.945 0 007.548 2.212c9.057 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636a9.936 9.936 0 002.457-2.548l-.047-.02z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
