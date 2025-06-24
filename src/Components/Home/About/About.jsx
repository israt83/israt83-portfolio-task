

import "./About.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <h1 className="text-4xl font-bold text-center pt-24 lg:pt-28 uppercase fade-in-left">
        Abou<span className="text-[#DAA520]">t</span> <span className="text-[#DAA520]">Me</span>
      </h1>
      <hr className="w-14 mx-auto border-t-2 border-white mt-4" />
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center mt-10 space-y-8 lg:space-y-0 lg:space-x-8 px-6">
        {/* Profile Image */}
        <img
          className="w-64 h-72 lg:w-72 lg:h-[350px] fade-in-left rounded-lg object-cover"
          src="https://img.freepik.com/free-photo/web-design-template-copy-space-concept_53876-120756.jpg"
          alt="Profile"
        />

        {/* About Content */}
        <div className="space-y-4 fade-in-right text-center lg:text-left">
          <p className="text-[#DAA520] text-lg lg:text-xl">Here&apos;s a bit about me!</p>
          <h2 className="text-white font-semibold text-2xl lg:text-3xl">
            I&apos;m Israt Jahan Jisha,
          </h2>
          <p className="text-lg lg:text-base lg:hidden ">
            A Front-End Developer and MERN Stack enthusiast passionate about
            creating immersive, user-centric web experiences. With strong proficiency in
            React.js, Tailwind CSS, JavaScript,  Express.js, and MongoDB, I specialize in
            building modern, responsive interfaces and scalable  full-stack applications.
            My expertise bridges front-end creativity and back-end logic, delivering
            polished, high-performing solutions.
          </p>
          <p className="hidden lg:block  text-lg lg:text-base ">
            A Front-End Developer and MERN Stack enthusiast passionate about
            creating immersive, <br /> user-centric web experiences. With strong proficiency in
            React.js, Tailwind CSS, JavaScript, <br /> Express.js, and MongoDB, I specialize in
            building modern, responsive interfaces and scalable <br /> full-stack applications.
            My expertise bridges front-end creativity and back-end logic, delivering <br />
            polished, high-performing solutions.
          </p>
          <hr className="border-t border-white my-4" />
          <div className="grid grid-cols-1 lg:grid-cols-2 text-sm lg:text-base gap-2">
            <div>
              <p>Name: Israt Jahan Jisha</p>
              <p>Age: 20</p>
            </div>
            <div>
              <p>From: Feni, Bangladesh</p>
              <p>Email: isratjahanfci@gmail.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pb-4">
          <button type="button" className="hidden lg:block px-5  border rounded-3xl border-[#DAA520] text-[#DAA520]">F o l l o w</button>
          <button type="button" className="lg:hidden px-5  border rounded-3xl border-[#DAA520] text-[#DAA520]">Follow</button>
          <hr className="w-14 mx-5 border-t-2 border-white mt-6" />
          <div className="flex justify-center lg:justify-start gap-4 ">
            <a
              href="https://www.linkedin.com/in/israt-jahan-jisha/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 hover:shadow-md hover:scale-105 transition-transform"
            >
              <FaLinkedin className="text-blue-700 text-xl lg:text-2xl" />
            </a>
            <a
              href="https://github.com/israt83"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 hover:shadow-md hover:scale-105 transition-transform"
            >
              <FaGithub className="text-gray-800 text-xl lg:text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/israt.jisha.2024"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 hover:shadow-md hover:scale-105 transition-transform"
            >
              <FaFacebook className="text-blue-600 text-xl lg:text-2xl" />
            </a>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
