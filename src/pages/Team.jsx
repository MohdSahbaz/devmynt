export default function Team() {
  const teamMembers = [
    {
      name: "Rahul Sharma",
      role: "Founder & CEO",
      photo: "https://randomuser.me/api/portraits/men/11.jpg",
      bio: "Passionate about building innovative web solutions that transform businesses.",
      social: {
        linkedin: "https://linkedin.com/in/rahulsharma",
        twitter: "https://twitter.com/rahulsharma",
      },
    },
    {
      name: "Anita Desai",
      role: "Lead Designer",
      photo: "https://randomuser.me/api/portraits/women/22.jpg",
      bio: "Creative designer focused on user-centric and aesthetic digital experiences.",
      social: {
        linkedin: "https://linkedin.com/in/anitadesai",
        twitter: "https://twitter.com/anitadesai",
      },
    },
    {
      name: "Karan Patel",
      role: "Senior Developer",
      photo: "https://randomuser.me/api/portraits/men/33.jpg",
      bio: "Full-stack developer specializing in scalable and performant applications.",
      social: {
        linkedin: "https://linkedin.com/in/karanpatel",
        twitter: "https://twitter.com/karanpatel",
      },
    },
    {
      name: "Sneha Joshi",
      role: "Marketing Head",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Driving growth through strategic marketing and customer engagement.",
      social: {
        linkedin: "https://linkedin.com/in/snehajoshi",
        twitter: "https://twitter.com/snehajoshi",
      },
    },
  ];

  return (
    <section
      id="team"
      className="bg-gray-900 text-white md:py-12 py-6 px-6 md:px-20"
    >
      <h2 className="md:text-5xl text-4xl font-extrabold text-cyan-400 mb-12 border-b-4 border-cyan-600 inline-block pb-2">
        Meet Our Team
      </h2>

      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map(({ name, role, photo, bio, social }, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-cyan-500 transition-shadow duration-300"
          >
            <img
              src={photo}
              alt={name}
              className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-cyan-500"
            />
            <h3 className="text-xl font-semibold text-cyan-400">{name}</h3>
            <p className="text-sm text-gray-400 mb-2">{role}</p>
            <p className="text-gray-300 mb-4">{bio}</p>
            <div className="flex space-x-4">
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-600"
                  aria-label={`${name} LinkedIn`}
                >
                  {/* LinkedIn Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                  className="text-cyan-400 hover:text-cyan-600"
                  aria-label={`${name} Twitter`}
                >
                  {/* Twitter Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
