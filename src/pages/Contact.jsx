import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just simulate success
    setStatus("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white md:py-12 py-6 px-6 md:px-20 flex flex-col items-center"
    >
      <h2 className="md:text-5xl text-4xl font-extrabold text-cyan-400 mb-12 border-b-4 border-cyan-600 inline-block pb-2">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <label className="block mb-4">
          <span className="text-gray-300">Name</span>
          <input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-300">Email</span>
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-300">Message</span>
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition"
        >
          Send Message
        </button>

        {status && (
          <p className="mt-4 text-green-400 font-semibold text-center">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
