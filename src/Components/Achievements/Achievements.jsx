import { CgCalendarDates } from "react-icons/cg";
import "./Achievements.css";
import { Link } from "react-router-dom";

const Achievements = () => {
  return (
    <div className="bg-[#181818] min-h-screen flex flex-col items-center justify-center text-white pb-16">
      <div className="text-center mb-10 mt-8">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Achieve<span className="text-yellow-600">ments</span>
        </h1>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-2 rounded" />
      </div>

      <div className="glow">
        <div className="blockContent">
          <div className="px-6 py-16 ">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold mb-2">
                Complete Web Development Course
              </h2>
              <div className="flex items-center justify-center gap-1 bg-zinc-700 px-2 py-1 rounded-2xl">
                <CgCalendarDates />{" "}
                <span className="text-sm">Jan - Dec,2024</span>
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">Programming Hero</h2>

            <p className="text-gray-300 py-2">
              Programming Hero Through this course, I&lsquo;ve cultivated a
              robust foundation in web development, mastering HTML, CSS, and
              JavaScript. I specialize in building dynamic, responsive web
              applications with React.js and server-side development using
              Express.js, and MongoDB for databases.
            </p>
            <div className="mt-8">
                <Link to='https://drive.google.com/file/d/11dssglgdn0_ooxL0mTgawL3hkbHsUtxE/view?usp=sharing'>
              <button className="px-6 py-3 relative  items-start justify-start overflow-hidden border font-medium transition-all rounded hover:bg-white group text-white border-[#DAA520]">
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
