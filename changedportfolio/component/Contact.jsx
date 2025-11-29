import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="Contact" className="w-full px-[12%] py-20 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-700 tracking-wide">
        Get In Touch
      </h4>
      <h2 className="text-center text-5xl font-Ovo mb-16">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-white p-10 rounded-3xl border border-gray-300 shadow-lg"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-4 rounded-xl border border-gray-300 font-Outfit text-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-4 rounded-xl border border-gray-300 font-Outfit text-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            placeholder="Your Message"
            className="p-4 rounded-xl border border-gray-300 font-Outfit text-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="relative overflow-hidden bg-[#d4a373] text-white py-3 rounded-full 
                       font-Ovo text-lg shadow-lg hover:shadow-xl transition-all duration-300 
                       transform hover:-translate-y-1 hover:scale-105 
                       before:absolute before:top-0 before:left-0 before:w-0 before:h-full 
                       before:bg-white/10 before:transition-all before:duration-300 hover:before:w-full"
          >
            <span className="relative z-10">Send Message</span>
          </button>
        </form>

        {/* CONTACT INFO */}
        <div className="mt-12 text-center text-gray-600 font-Outfit space-y-1">
          <p>
            Email:{" "}
            <a
              href="mailto:viveksinghkj@gmail.com"
              className="text-indigo-600 hover:underline"
            >
              viveksinghkj@gmail.com
            </a>
          </p>
          <p> Phone: <a
            href="tel:+49 15565 165463"
            className="text-indigo-600 hover:underline"
          >
            +49 15565 165463
          </a></p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BvTwapT0YQu2QjCLqnJFXfg%3D%3D"
              className="text-indigo-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/myprofile
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
