import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Video } from "lucide-react";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const images = {
    avatars: {
      user1:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      user2:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      user3:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      user4: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    icons: {
      menu: "https://cdn-icons-png.flaticon.com/512/1828/1828859.png",
      close: "https://cdn-icons-png.flaticon.com/512/1828/1828778.png",
    },
  };

  return (
    <div className="font-[Poppins] text-white bg-white relative min-h-screen overflow-hidden">
      {/* Navbar */}
      <nav className=" flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 text-black text-sm">
        {/* Logo */}
        <a href="/">
          <img src="/logo.png" alt="logo" className="h-11 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className=" text-lg hidden md:flex items-center gap-8 transition duration-500">
          <a href="#home" className="hover:text-blue-500 transition">
            Home
          </a>
          <a href="#features" className="hover:text-blue-500 transition">
            Features
          </a>
          <a href="#testimonials" className="hover:text-blue-500 transition">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="px-6 py-2.5 rounded-full border border-blue-500 text-blue-500 font-bold hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/get-started"
            className="px-6 py-2.5 rounded-full bg-blue-500 hover:bg-blue-600 
 text-white font-medium transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden bg-blue-600 p-2 rounded-md shadow-md active:scale-95 transition"
        >
          <img src={images.icons.menu} alt="menu" className="h-6 invert" />
        </button>
      </nav>

      {/* Mobile Navlinks (without login/get started) */}
      <div
        className={`fixed inset-0 z-[100] bg-gray-900/95 text-white flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a href="#home" className="hover:text-blue-400">
          Home
        </a>
        <a href="#features" className="hover:text-blue-400">
          Features
        </a>
        <a href="#testimonials" className="hover:text-blue-400">
          Testimonials
        </a>
        <a href="#contact" className="hover:text-blue-400">
          Contact
        </a>

        <button
          onClick={() => setMenuOpen(false)}
          className="bg-blue-600 hover:bg-blue-700 aspect-square size-10 p-2 flex items-center justify-center rounded-md shadow-md transition"
        >
          <img src={images.icons.close} alt="close" className="h-6 invert" />
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-32 text-white">
        <div className="absolute top-28 -z-1 left-1/4 size-72 bg-blue-500 blur-[300px]" />

        {/* Avatars */}
        <div className="flex items-center mt-10">
          <div className="flex -space-x-2 pr-3">
            {Object.values(images.avatars).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`user${i + 1}`}
                className="size-7 rounded-full border-2 border-white hover:-translate-y-0.5 transition"
              />
            ))}
          </div>
          <p className="text-sm text-gray-700">
            Trusted by{" "}
            <span className="font-medium text-blue-600">50,000+</span>{" "}
            professionals
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-semibold max-w-3xl text-center mt-5 text-gray-800">
          Create Your <span className="text-blue-600">AI-Powered Resume</span>{" "}
          in Minutes
        </h1>

        {/* Subtext */}
        <p className="text-base text-center text-gray-700 max-w-lg mt-6">
          Build a professional, ATS-friendly resume using our intelligent AI
          builder. Stand out and land your dream job with personalized
          suggestions and design templates.
        </p>

        {/* Action Buttons Below Heading and Paragraph */}
        <div className="hidden md:flex flex-col sm:flex-row items-center justify-center gap-5 mt-5">
          <Link
            to="/get-started"
            className="bg-blue-600 hover:bg-blue-700 px-10 py-3 rounded-full text-lg font-semibold text-white shadow-md flex items-center gap-2 transition-all duration-300"
          >
            Get Started
            <ArrowRight size={22} className="mt-[1px]" />
          </Link>

          <Link
            to="/demo"
            className="border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-10 py-3 rounded-full text-lg font-semibold shadow-md flex items-center gap-2 transition-all duration-300"
          >
            <Video size={22} />
            Try Demo
          </Link>
        </div>

        {/* Mobile Buttons Below Text */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 md:hidden">
          <Link
            to="/get-started"
            className="bg-blue-500 hover:bg-blue-600  px-8 py-3 rounded-full text-lg font-medium transition-all"
          >
            Build My Resume
          </Link>
          <Link
            to="/login"
            className="px-8 py-3 rounded-full border border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
