

import { CgCalendarDates } from "react-icons/cg";
import "./Achievements.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";

const Achievements = () => {
  useEffect(() => {
      Aos.init({
        duration: 1500,
      });
    }, []);
  return (
    <div  className="bg-[#181818] min-h-screen flex flex-col items-center justify-center text-white px-4 pt-10 pb-20">
      <div className="text-center mb-10 mt-14 lg:mt-0">
        <h1 className="text-3xl font-bold">
          Achieve<span className="text-yellow-600">ments</span>
        </h1>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-2 rounded" />
      </div>

      <div  data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1500" className="w-full lg:max-w-[95%] max-w-[90%] md:max-w-[800px] relative glow rounded-xl">
        <div className="blockContent rounded-lg">
          <div className="flex flex-col gap-4 lg:mt-10 lg:px-10">
            <div className=" flex  lg:items-center lg:justify-between">
              <h2 className="text-base md:text-2xl font-semibold">
                Complete Web Development Course
              </h2>
              <div className="flex items-center gap-1 bg-zinc-700 px-3 py-1 rounded-2xl mt-2 ">
                <CgCalendarDates />
                <span className="text-xs md:text-sm">Jan - Dec, 2024</span>
              </div>
            </div>

            <h2 className="text-sm md:text-lg  font-semibold">
              Programming Hero
            </h2>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Programming Hero Through this course, I’ve cultivated a robust
              foundation in web development, mastering HTML, CSS, and
              JavaScript. I specialize in building dynamic, responsive web
              applications with React.js and server-side development using
              Express.js, and MongoDB for databases.
            </p>

            <div className="mt-6 sm:mt-8">
              <Link to="https://drive.google.com/file/d/11dssglgdn0_ooxL0mTgawL3hkbHsUtxE/view?usp=sharing">
                <button className="px-6 py-3 relative inline-flex items-start justify-start overflow-hidden border font-medium transition-all rounded hover:bg-white group text-white border-[#DAA520]">
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#DAA520] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left transition-colors duration-300 ease-in-out uppercase font-bold text-white group-hover:text-white">
                    Certificate
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
