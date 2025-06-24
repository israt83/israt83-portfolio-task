


// import { Typewriter } from "react-simple-typewriter";
// import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
// import profile from "../../assets/icons/5673cbc4-9c51-4b2a-9fee-b06985337362.jpeg";
// import "./ImageBox.css"
// const ImageBox = () => {
//   return (
//     <div className="fixed border border-[#9D81B3] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-6 md:p-8 rounded-lg w-11/12 max-w-[450px] bg-opacity-70 bg-black  ">
//       <p className="text-gray-300 text-sm md:text-base">Hey! There,</p>
//       <h1 className="text-white text-2xl md:text-3xl font-bold mt-1">
//         I&apos;m Israt Jahan Jisha_
//       </h1>
//       <div className="flex space-x-2 mt-2">
//         <h1 className="text-white font-bold text-xl md:text-2xl">A</h1>
//         <div className="flex justify-center items-center h-full">
//           <h2 className="text-xl md:text-2xl text-[#FF007F]">
//             <Typewriter
//               words={[
//                 "Jr. Frontend Developer",
//                 "MERN Stack Developer",
//                 "React.js Developer",
//               ]}
//               loop={true}
//               cursor
//               cursorStyle="|"
//               typeSpeed={100}
//               deleteSpeed={50}
//               delaySpeed={1000}
//             />
//           </h2>
//         </div>
//       </div>

//       {/* Social Icons */}
//       <div className="flex mt-4 space-x-3">
//         <a
//           href="https://www.linkedin.com/in/israt-jahan-jisha/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-white rounded-full p-2 hover:shadow-md hover:scale-105 transition-transform"
//         >
//           <FaLinkedin className="text-blue-700 text-lg md:text-2xl" />
//         </a>
//         <a
//           href="https://github.com/israt83"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-white rounded-full p-2 hover:shadow-md hover:scale-105 transition-transform"
//         >
//           <FaGithub className="text-gray-800 text-lg md:text-2xl" />
//         </a>
//         <a
//           href="https://www.facebook.com/israt.jisha.2024"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-white rounded-full p-2 hover:shadow-md hover:scale-105 transition-transform"
//         >
//           <FaFacebook className="text-blue-600 text-lg md:text-2xl" />
//         </a>
//       </div>

//       {/* Button positioned at the bottom-right corner */}
//       <div className="absolute bottom-4 right-4">
//         <button
//           onClick={() =>
//             (window.location.href =
//               "mailto:isratjahanfci@gmail.com?subject=Hire Me&body=Hi,")
//           }
//           className="px-6 py-2 relative inline-flex items-center justify-start overflow-hidden border font-medium transition-all rounded hover:bg-white group text-white border-[#DAA520]"
//         >
//           <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#DAA520] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
//           <span className="relative w-full text-left transition-colors duration-300 ease-in-out uppercase font-bold text-white group-hover:text-white">
//             hire me
//           </span>
//         </button>
//       </div>

//       {/* Rounded box with image in the center of the ImageBox */}
//       <div className="absolute -top-4 -right-5 md:-right-10 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-24 h-24 md:w-32 md:h-32 p-1 md:p-2 flex justify-center items-center border border-[#DAA520]">
//         <img
//           src={profile}
//           alt="Profile"
//           className="rounded-full object-cover w-full h-full"
//         />
//       </div>
//     </div>
     

//   );
// };

// export default ImageBox;

import "./ImageBox.css";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import profile from "../../assets/icons/5673cbc4-9c51-4b2a-9fee-b06985337362.jpeg";

const ImageBox = () => {
  return (
    <div className="glow-box">
      <div className="inner-box">
           <p className="text-gray-300 text-sm md:text-base text-left">Hey! There,</p>
      <h1 className="text-white text-2xl md:text-3xl font-bold mt-1 text-left">
        I&apos;m Israt Jahan Jisha_
      </h1>
      <div className="flex space-x-2 mt-2">
         <h1 className="text-white font-bold text-xl md:text-2xl">A</h1>
        <div className="flex justify-center items-center h-full">
          <h2 className="text-xl md:text-2xl text-[#FF007F]">
            <Typewriter
              words={[
                "Jr. Frontend Developer",
                "MERN Stack Developer",
                "React.js Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex mt-4 space-x-3">
        <a
          href="https://www.linkedin.com/in/israt-jahan-jisha/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-full p-2 hover:shadow-md hover:scale-105 transition-transform"
        >
          <FaLinkedin className="text-blue-700 text-lg md:text-2xl" />
        </a>
        <a
          href="https://github.com/israt83"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-full p-2 hover:shadow-md hover:scale-105 transition-transform"
        >
          <FaGithub className="text-gray-800 text-lg md:text-2xl" />
        </a>
        <a
          href="https://www.facebook.com/israt.jisha.2024"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-full p-2 hover:shadow-md hover:scale-105 transition-transform"
        >
          <FaFacebook className="text-blue-600 text-lg md:text-2xl" />
        </a>
      </div>

      {/* Button positioned at the bottom-right corner */}
      <div className="absolute bottom-4 right-4">
        <button
          onClick={() =>
            (window.location.href =
              "mailto:isratjahanfci@gmail.com?subject=Hire Me&body=Hi,")
          }
          className="px-6 py-2 relative inline-flex items-center justify-start overflow-hidden border font-medium transition-all rounded hover:bg-white group text-white border-[#DAA520]"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#DAA520] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left transition-colors duration-300 ease-in-out uppercase font-bold text-white group-hover:text-white">
            hire me
          </span>
        </button>
      </div>

      {/* Rounded box with image in the center of the ImageBox */}
      <div className="absolute -top-4 -right-5 md:-right-10 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-24 h-24 md:w-32 md:h-32 p-1 md:p-2 flex justify-center items-center border border-[#DAA520]">
        <img
          src={profile}
          alt="Profile"
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      </div>
    </div>
  );
};

export default ImageBox;

