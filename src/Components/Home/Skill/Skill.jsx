// import reactIcon from "../../../assets/icons/images2.jpeg";
// import { motion } from "framer-motion";

// export const skills = [
//     {
//         skill: "React",
//         percentage: 70,
//         icon: reactIcon,
//     },
//     {
//         skill: "JavaScript",
//         percentage: 70,
//         icon: reactIcon,
//     },
//     {
//         skill: "Node.js",
//         percentage: 70,
//         icon: reactIcon,
//     },
//     {
//         skill: "CSS",
//         percentage: 80,
//         icon: reactIcon,
//     },
//     {
//         skill: "HTML",
//         percentage: 85,
//         icon: reactIcon,
//     },
// ];

// const SkillCircle = ({ skill, percentage, icon }) => {
//     const radius = 50;
//     const circumference = 2 * Math.PI * radius;
//     const strokeDashoffset = circumference - (percentage / 100) * circumference;

//     return (
//         <motion.article
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true, amount: 0.1 }}
//             transition={{ duration: 1 }}
//             className="relative flex flex-col items-center"
//         >
//             <svg width={120} height={120} className="rotate-[90deg]">
//                 <circle
//                     cx={60}
//                     cy={60}
//                     r={radius}
//                     fill="transparent"
//                     stroke="#ffffff29"
//                     strokeWidth={10}
//                 />
//                 <motion.circle
//                     cx={60}
//                     cy={60}
//                     r={radius}
//                     fill="transparent"
//                     stroke="#FFC107"
//                     strokeWidth={10}
//                     strokeDasharray={circumference}
//                     initial={{ strokeDashoffset: circumference }}
//                     whileInView={{ strokeDashoffset }}
//                     viewport={{ once: true, amount: 0.1 }}
//                     transition={{ duration: 2, ease: "easeInOut" }}
//                 />
//             </svg>
//             <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                 <img src={icon} alt={skill} className="w-10 h-10 mb-1" />
//                 <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
//                     {percentage}%
//                 </p>
//             </div>
//         </motion.article>
//     );
// };

// export default function Skill() {
//     return (
//         <div className="bg-[#181818] pt-28 text-white min-h-screen">
//             <h1 className="text-4xl text-center font-bold mb-10">My Skills</h1>
//             <section className="grid grid-cols-2 lg:grid-cols-5 gap-5 px-5">
//                 {skills.map((item, index) => (
//                     <motion.article
//                         key={index}
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{
//                             duration: 0.8,
//                             ease: "easeOut",
//                             delay: index * 0.2,
//                         }}
//                         viewport={{ once: true, amount: 0.5 }}
//                     >
//                         <SkillCircle
//                             skill={item.skill}
//                             percentage={item.percentage}
//                             icon={item.icon}
//                         />
//                     </motion.article>
//                 ))}
//             </section>
//         </div>
//     );
// }

// const SkillCircle = ({ skill, percentage, icon }) => {
//     const radius = 40;
//     const circumference = 2 * Math.PI * radius;
//     const strokeDashoffset = circumference - (percentage / 100) * circumference;

//     return (
//         <motion.article
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true, amount: 0.1 }}
//             transition={{ duration: 1 }}
//             className="relative flex flex-col items-center"
//         >
//             <svg width={120} height={120} className="rotate-[270deg]">
//                 {/* Background Circle */}
//                 <circle
//                     cx={60}
//                     cy={60}
//                     r={radius}
//                     fill="transparent"
//                     stroke="#ffffff29"
//                     strokeWidth={10}
//                 />
//                 {/* Animated Circle */}
//                 <motion.circle
//                     cx={60}
//                     cy={60}
//                     r={radius}
//                     fill="transparent"
//                     stroke="#FFC107"
//                     strokeWidth={10}
//                     strokeDasharray={circumference}
//                     strokeDashoffset={circumference} // Start fully unfilled
//                     animate={{ strokeDashoffset }} // Animate to the correct percentage
//                     transition={{ duration: 2, ease: "easeInOut" }}
//                 />
//             </svg>
//             <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                 <img src={icon} alt={skill} className="w-10 h-10 mb-1" />
//                 {/* <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
//                     {percentage}%
//                 </p> */}
//                 <p className="text-sm font-semibold text-gray-300">{skill}</p>
//                 {/* <p>{percentage}%</p> */}
//             </div>
//         </motion.article>
//     );
// };

// export default function Skill() {
//     return (
//         <div className="bg-[#181818] pt-28 text-white min-h-screen">
//             <h1 className="text-4xl text-center font-bold mb-10">My Skills</h1>
//             <div className="container mx-auto">
//             <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5">
//                 {Object.keys(skills).map((category, index) => (
//                     <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{
//                             duration: 0.8,
//                             ease: "easeOut",
//                             delay: index * 0.2,
//                         }}
//                         viewport={{ once: true, amount: 0.5 }}
//                     >
//                         <h2 className="text-2xl font-bold mb-5 text-center">{category}</h2>
//                         <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
//                             {skills[category].map((item, idx) => (
//                                 <SkillCircle
//                                     key={idx}
//                                     skill={item.skill}
//                                     percentage={item.percentage}
//                                     icon={item.icon}
//                                 />
//                             ))}
//                         </div>
//                     </motion.div>
//                 ))}
//             </section>
//             </div>
//         </div>
//     );
// }

import { motion } from "framer-motion";
export const skills = {
  Frontend: [
    {
      skill: "React",
      percentage: 80,
      icon: "https://www.svgrepo.com/show/452092/react.svg",
    },
    {
      skill: "CSS",
      percentage: 80,
      icon: "https://www.svgrepo.com/show/452185/css-3.svg",
    },
    {
      skill: "Javascript",
      percentage: 70,
      icon: "https://www.svgrepo.com/show/373703/js.svg",
    },
    {
      skill: "tailwindcss",
      percentage: 95,
      icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
    },
    {
      skill: "HTML",
      percentage: 90,
      icon: "https://www.svgrepo.com/show/452228/html-5.svg",
    },
  ],
  Backend: [
    {
      skill: "Node.js",
      percentage: 70,
      icon: "https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg",
    },
    {
      skill: "Express",
      percentage: 50,
      icon: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
    },
    {
      skill: "MongoDB",
      percentage: 60,
      icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1-1.svg",
    },
    {
      skill: "Firebase",
      percentage: 70,
      icon: "https://www.svgrepo.com/show/353735/firebase.svg",
    },
  ],

  Tools: [
    {
      skill: "Git",
      percentage: 70,
      icon: "https://www.svgrepo.com/show/303548/git-icon-logo.svg",
    },
    {
      skill: "GitHub",
      percentage: 80,
      icon: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg",
    },
  ],
  Other: [
    {
      skill: "JWT",
      percentage: 70,
      icon: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg",
    },
    {
      skill: "Responsive Design",
      percentage: 95,
      icon: "https://www.svgrepo.com/show/261938/responsive.svg",
    },
  ],
};

const SkillCircle = ({ skill, percentage, icon }) => {
  const radius = 40; // Smaller circle radius
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center"
    >
      <svg width={100} height={100} className="rotate-[270deg]">
        {/* Background Circle */}
        <circle
          cx={50}
          cy={50}
          r={radius}
          fill="transparent"
          stroke="#ffffff29"
          strokeWidth={8}
        />
        {/* Animated Circle */}
        <motion.circle
          cx={50}
          cy={50}
          r={radius}
          fill="transparent"
          stroke="#FFC107"
          strokeWidth={8}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src={icon} alt={skill} className="w-8 h-8 mb-1" />
        <p className="text-xs font-semibold text-gray-300">{skill}</p>
      </div>
    </motion.article>
  );
};

export default function Skill() {
  return (
    <div className="bg-[#181818] pt-24 text-white min-h-screen">
      <h1 className="text-4xl text-center font-bold mb-2">My S<span className="text-[#FFD700]">kills</span> </h1>
      <hr className="w-14 mx-auto border-t-2 border-white mb-8" />
      <div className=" ">
        <section className="">
     
          <section className="lg:flex flex-wrap lg:flex-nowrap space-y-5 lg:space-y-0 lg:space-x-5 justify-center items-center">
            {/* Frontend Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="border p-5 lg:p-10 mx-5 lg:mx-0 lg:w-auto"
            >
             <div className="hidden lg:block">
             <h2 className="text-2xl font-bold text-[#FFD700] tracking-wide  relative inline-block">
                <span className="relative px-6">
                  FRONT END
                  <span className="absolute top-[25px] left-[16px] min-w-0.5 h-[10px] bg-[#FFD700] -translate-y-1/2"></span>
                  <span className="absolute top-[25px] right-[16px] min-w-0.5 h-[10px] bg-[#FFD700] -translate-y-1/2"></span>
                </span>
              </h2>
              <hr className="w-[161.5px] ml-4 border-t-[2px] border-[#FFD700] mb-4" />
             </div>
             <div className="lg:hidden ">
             <h2 className="text-2xl font-bold text-[#FFD700] tracking-wide  relative inline-block">
                <span className="relative px-6">
                  FRONT END
                  
                </span>
              </h2>
              <hr className="w-[161.5px] ml-4 border-t-[2px] border-[#FFD700] mb-4" />
             </div>

            
              <div className="grid grid-cols-2 gap-4 lg:flex lg:justify-start">
                {skills.Frontend.map((item, idx) => (
                  <SkillCircle
                    key={idx}
                    skill={item.skill}
                    percentage={item.percentage}
                    icon={item.icon}
                  />
                ))}
              </div>
            </motion.div>

            {/* Backend and Database Section */}
            <div className=" border p-5 lg:p-10 mx-5 lg:mx-0 justify-center items-center lg:w-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}
              >
              <div className="hidden lg:block">
              <h2 className="text-2xl font-bold text-[#FFD700] tracking-wide  relative inline-block">
                  <span className="relative px-6">
                    Backend
                    <span className="absolute top-[25px] left-[16px] min-w-0.5 h-[10px] bg-[#FFD700] -translate-y-1/2"></span>
                    <span className="absolute top-[25px] right-[16px] min-w-0.5 h-[10px] bg-[#FFD700] -translate-y-1/2"></span>
                  </span>
                </h2>
                <hr className="w-[120px] ml-4 border-t-[2px] border-[#FFD700] mb-4" />
              </div>
              <div className="lg:hidden">
              <h2 className="text-2xl font-bold text-[#FFD700] tracking-wide  relative inline-block">
                  <span className="relative px-6">
                    Backend
                   
                  </span>
                </h2>
                <hr className="w-[120px] ml-4 border-t-[2px] border-[#FFD700] mb-4" />
              </div>
                <div className="grid grid-cols-2  gap-4 lg:flex lg:justify-start">
                  {skills.Backend.map((item, idx) => (
                    <SkillCircle
                      key={idx}
                      skill={item.skill}
                      percentage={item.percentage}
                      icon={item.icon}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Tools Section */}
          <div className="container lg:flex lg:justify-center lg:items-center lg:gap-5 px-5 lg:px-[88px]  mx-auto space-y-10 lg:space-y-0 mt-5 pb-5 ">
            {/* Tools Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-left border p-5"
            >
              {/* Section Title */}

            <div className="hidden lg:block">
            <h2 className="text-2xl font-bold text-[#FFD700] tracking-wide  relative inline-block">
                <span className="relative px-6">
                  Tools
                  <span className="absolute top-[25px] left-[16px] min-w-0.5 h-[10px] bg-[#FFD700] -translate-y-1/2"></span>
                  <span className="absolute top-[25px] right-[16px] min-w-0.5 h-[10px] bg-[#FFD700] -translate-y-1/2"></span>
                </span>
              </h2>
              <hr className="w-[81px] ml-4 border-t-[2px] border-[#FFD700] mb-4" />
            </div>
            <div className="lg:hidden ">
            <h2 className="text-2xl font-bold text-[#FFD700] tracking-wide  relative inline-block">
                <span className="relative px-6">
                  Tools
                 
                </span>
              </h2>
              <hr className="w-[81px] ml-4 border-t-[2px] border-[#FFD700] mb-4" />
            </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-2  space-x-10 items-center justify-center">
                {skills.Tools.map((item, idx) => (
                  <SkillCircle
                    key={idx}
                    skill={item.skill}
                    percentage={item.percentage}
                    icon={item.icon}
                  />
                ))}
              </div>
            </motion.div>

            {/* Other Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-left border p-5"
            >
              {/* Section Title */}
                <div className="hidden lg:block">
                <h2 className="text-2xl font-bold text-[#FFD700] tracking-wide  relative inline-block">
                <span className="relative px-6">
                  Other skills
                  <span className="absolute top-[25px] left-[16px] min-w-0.5 h-[10px] bg-[#FFD700] -translate-y-1/2"></span>
                  <span className="absolute top-[25px] right-[16px] min-w-0.5 h-[10px] bg-[#FFD700] -translate-y-1/2"></span>
                </span>
              </h2>
              <hr className="w-[153.5px] ml-4 border-t-[2px] border-[#FFD700] mb-4" />
                </div>
                <div className="lg:hidden">
                <h2 className="text-2xl font-bold text-[#FFD700] tracking-wide  relative inline-block">
                <span className="relative px-6">
                  Other skills
                 
                </span>
              </h2>
              <hr className="w-[153.5px] ml-4 border-t-[2px] border-[#FFD700] mb-4" />
                </div>

              {/* Other Skills Grid */}
              <div className="grid grid-cols-2  space-x-10 items-center justify-center">
                {skills.Other.map((item, idx) => (
                  <SkillCircle
                    key={idx}
                    skill={item.skill}
                    percentage={item.percentage}
                    icon={item.icon}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
