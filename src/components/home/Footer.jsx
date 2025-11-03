import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#E9F8F2] to-[#FFFFFF] text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3 mb-6">
          <img
            alt="ProFile Logo"
            className="h-12"
            src="/favicon.svg" // ✅ Correct path for Vite/React
          />
          <h2 className="text-xl font-semibold text-gray-900">ProFile</h2>
        </div>

        {/* Short Description */}
        <p className="text-center max-w-2xl text-sm font-normal leading-relaxed text-gray-600">
          Build standout, job-winning resumes effortlessly with{" "}
          <span className="font-medium text-blue-600">ProFile</span>.  
          AI-powered design, smart templates, and instant customization — 
          your professional story, perfectly presented.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-6">
          <a
            href="https://github.com/arjun-uit"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <i className="fa-brands fa-github text-2xl"></i>
          </a>
          <a
            href="https://linkedin.com/in/arjun-uit"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <i className="fa-brands fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <i className="fa-brands fa-x-twitter text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-sm text-gray-500">
          © 2025 <span className="font-medium text-gray-800">ProFile</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
