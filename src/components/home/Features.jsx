import React from "react";
import Title from "./Title";

const Features = () => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <div id="features" className="py-10 bg-white">
      <Title
        title="Build Your Resume"
        description="Create professional resumes effortlessly with AI-powered tools."
      />

      <div className="flex flex-col md:flex-row items-center justify-center">
        <img
          className="max-w-2xl w-full xl:-ml-32"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
          alt="Resume Builder Preview"
        />

        <div
          className="px-4 md:px-0"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/* Feature 1 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div
              className={`p-6 group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300 flex gap-4 rounded-xl transition-colors ${
                !isHover ? "border-violet-300 bg-violet-100" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6 stroke-violet-600"
              >
                <path d="M2 12h20M2 6h20M2 18h20" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  AI-Powered Resume Generation
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Instantly generate tailored, ATS-friendly resumes using smart
                  AI suggestions that match your career goals.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6 stroke-green-600"
              >
                <path d="M12 1v22M3 8l9-7 9 7" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  Professionally Designed Templates
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Choose from modern, clean, and creative templates built by
                  industry experts to impress recruiters instantly.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
              <svg
                className="size-6 stroke-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5v14" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  Easy Customization & Download
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Edit your resume in real-time, preview changes instantly, and
                  download in PDF format with a single click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Features;
