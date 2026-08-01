import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-8 py-12">

        <h2 className="text-3xl font-bold text-center">
          TravelX
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Explore the world with comfort, adventure, and unforgettable memories.
        </p>

        <div className="flex justify-center gap-8 mt-8 text-2xl">
          <FaFacebook className="cursor-pointer hover:text-blue-500 transition" />
          <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
          <FaTwitter className="cursor-pointer hover:text-sky-400 transition" />
          <FaLinkedin className="cursor-pointer hover:text-blue-400 transition" />
        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-500">
          © 2026 TravelX. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;