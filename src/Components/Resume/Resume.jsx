

import { FaArrowDown } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="bg-[#181818] pt-16 text-white min-h-screen pb-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mt-16">My Resume</h1>
        <div className="w-12 sm:w-16 h-1 mx-auto mt-2 bg-yellow-500"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-5 sm:px-10 lg:px-20 mt-10 fade-in-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 lg:gap-20">
          {/* Education Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold underline mb-5">Education</h2>
            <div className="relative border-l-2 border-yellow-500 pl-6 sm:pl-10 pt-4">
              {/* Education Item */}
              <div className="mb-10 border p-4 relative h-36">
                <div className="absolute -left-[50px] sm:-left-[70px] bg-black top-6 transform -translate-y-1/2 w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center border-4 border-white rounded-full">
                  <FaRegEdit className="text-yellow-500 text-xl sm:text-2xl" />
                </div>
                <h3 className="font-bold">Computer Science</h3>
                <p>Feni Govt. Computer Institute</p>
                <p className="text-gray-300">2022 - Present</p>
              </div>

              {/* Another Education Item */}
              <div className="mb-10 border p-4 relative h-36">
                <div className="absolute -left-[50px] sm:-left-[70px] bg-black top-6 transform -translate-y-1/2 w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center border-4 border-white rounded-full">
                  <FaRegEdit className="text-yellow-500 text-xl sm:text-2xl" />
                </div>
                <h3 className="font-bold">Secondary School Certificate</h3>
                <p>Mahbubul Hoque High School</p>
                <p className="text-gray-300">2021</p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div >
            <h2 className="text-xl sm:text-2xl font-bold underline underline-offset-4 mb-5">Experience</h2>
            <div className="relative border-l-2 border-yellow-500 pl-6 sm:pl-10 pt-4 ">
              {/* Experience Item */}
              <div className="mb-10 border p-4 relative h-36">
                <div className="absolute -left-[50px] sm:-left-[70px] bg-black top-6 transform -translate-y-1/2 w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center border-4 border-white rounded-full">
                  <FaRegEdit className="text-yellow-500 text-xl sm:text-2xl" />
                </div>
                <h3 className="font-bold">Personal Projects</h3>
                <p>Technologies: React.js, MongoDB, Express.js, Tailwind CSS, Firebase Authentication.</p>
                <p className="text-gray-300">Bookify</p>
              </div>

              {/* Another Experience Item */}
              <div className="mb-10 border p-4 relative h-36">
                <div className="absolute -left-[50px] sm:-left-[70px] bg-black top-6 transform -translate-y-1/2 w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center border-4 border-white rounded-full">
                  <FaRegEdit className="text-yellow-500 text-xl sm:text-2xl" />
                </div>
                <h3 className="font-bold">Learning & Practice Projects</h3>
                <p>Technologies: React.js, MongoDB, Express.js, Tailwind CSS, Firebase Authentication.</p>
                <p className="text-gray-300">HostelHub</p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="pb-6 flex items-center justify-center">
          <a
            href="https://drive.google.com/file/d/1Zln3LulKz2Q_NmI2Ylc2s_W9VcUdp3Rt/view?usp=sharing"
            download="IsratJishaResume.pdf"
            className="px-6 sm:px-8 py-2 sm:py-3 font-semibold border rounded border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition uppercase"
          >
            <div className="flex items-center space-x-2">
              <span>Download Resume</span>
              <FaArrowDown />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
