import "./Achievements.css";

const Achievements = () => {
  return (
    <div className="bg-[#181818] pt-16 text-white min-h-screen ">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mt-10">
          Achieve<span className="text-yellow-600">ments</span>{" "}
        </h1>
        <div className="w-16 sm:w-16 h-[2px] mx-auto mt-2 bg-yellow-500"></div>
      </div>
      <div className="block glow"></div>
    </div>
  );
};

export default Achievements;

