import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-8">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center">
        Contact Us
      </h2>

      <p className="text-center text-gray-500 mt-4">
        We'd love to hear from you. Get in touch with us anytime.
      </p>

      <div className="grid grid-cols-2 gap-12 mt-12">

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg mb-5 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg mb-5 outline-none focus:border-blue-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg mb-5 outline-none focus:border-blue-500"
          ></textarea>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>

        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center ">

          <div className="flex items-center gap-4 mb-8">
            <FaMapMarkerAlt className="text-3xl text-blue-600" />
            <div>
              <h3 className="font-bold text-xl">
                Address
              </h3>

              <p className="text-gray-600">
                Lahore, Pakistan
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <FaPhoneAlt className="text-3xl text-blue-600" />
            <div>
              <h3 className="font-bold text-xl">
                Phone
              </h3>

              <p className="text-gray-600">
                +92 300 1234567
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-3xl text-blue-600" />
            <div>
              <h3 className="font-bold text-xl">
                Email
              </h3>

              <p className="text-gray-600">
                info@travelx.com
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;