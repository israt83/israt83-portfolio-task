
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import hostelHub from "../../../assets/icons/hostelhub.png";
import bookify from "../../../assets/icons/bookify.png";
import tourismSpot from "../../../assets/icons/tourismSpot.png";
import react from "../../../assets/icons/react.svg";
import tailwindCss from "../../../assets/icons/tailwind.svg";
import authentication from "../../../assets/icons/firebase.svg";
import mongoDb from "../../../assets/icons/mongodb.svg";
import { FaCode, FaLink } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

// import expressJs from "../../../assets/icons/"
// import mongoDb from "../../../assets/icons/mongodb.svg"

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: "Bookify ",
      titleDes: "(Library Management System) ",
      description:
        "A comprehensive library management system for organizing and managing books.",
      liveLink: "https://library-managment-system-797c1.web.app/",
      clientRepo: "https://github.com/israt83/bookify-client",
      imgSrc: bookify,
      technology: { react, tailwindCss, authentication, mongoDb },
    },
    {
      title: "HostelHub ",
      titleDes: "(Hostel Management Website)",
      description:
        " A platform for managing hostel bookings and accommodations.",
      liveLink: "https://hostelhub-1b756.web.app",
      clientRepo: "https://github.com/israt83/hostelhub-client",
      imgSrc: hostelHub,
    },
    {
      title: "TourismSpot",
      titleDes: "(Tourism Spot Website)",
      description:
        "TourismSpot showcases top tourist destinations with key attractions and insights.",
      liveLink: "https://tourismspot-website.netlify.app/",
      clientRepo: "https://github.com/israt83/tourismspots-client-side",
      imgSrc: tourismSpot,
    },
  ];

  return (
    <div className="min-h-screen bg-[#181818] text-white pb-10">
      <h2 className="text-4xl font-bold text-center pt-28 uppercase">
        Projects
      </h2>
      <hr className="w-14 mx-auto border-t-2 border-[#DAA520] mt-4" />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative   bg-[#2d2d2d]  group project-card animated-border-${index}`}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className=" p-5 h-80 opacity-85 rounded-3xl"
            />
            <div className="pb-6">
              <h3 className="text-4xl font-bold text-white  text-center">
                {project.title}
              </h3>
              <p className="text-center text-sm text-gray-400">
                {project.titleDes}
              </p>
              <p className="text-gray-300 text-center px-[2px] mt-1 font-semibold">
                {project.description}
              </p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <img className="w-10 h-10" src={react} alt="" />
                <img className="w-10 h-10" src={tailwindCss} alt="" />

                <img className="w-10 h-10" src={authentication} alt="" />
                <img className="w-10 h-10" src={mongoDb} alt="" />
                <img
                  className="w-10 h-10"
                  src="https://img.icons8.com/office40/512/express-js.png"
                  alt=""
                />
                <img
                  className="w-10 h-10"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center gap-5 mt-4">
                <Tooltip title={<span className="text-lg">live link</span>}  placement="top" arrow>
                <Link  to={project.liveLink} className="bg-slate-700 p-4 text-white rounded-lg">
                  <FaLink/>
                </Link>
                </Tooltip>
                <Tooltip title={<span className="text-lg">Code Repo Link</span>}  placement="top" arrow>
                <Link  to={project.clientRepo} className="bg-slate-700 p-4 text-white rounded-lg">
                <FaCode />
                </Link>
                </Tooltip>

                
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        :root {
          --radius-lg: 0.5rem; /* Define the --radius-3xl variable */
        }

        .project-card {
          position: relative;
          overflow: hidden;

          border: 3.8px solid transparent;
          background-clip: padding-box;
          animation: borderAnimation 2s infinite linear;
        }

        @keyframes borderAnimation {
          0% {
            border-image: linear-gradient(
                45deg,
                #ff0000,
                #f38592,
                #ffeb00,
                #ff7300
              )
              1;
          }
          25% {
            border-image: linear-gradient(
                45deg,
                #f38592,
                #ffeb00,
                #ff7300,
                #ff0000
              )
              1;
          }
          50% {
            border-image: linear-gradient(
                45deg,
                #ffeb00,
                #ff7300,
                #ff0000,
                #f38592
              )
              1;
          }
          75% {
            border-image: linear-gradient(
                45deg,
                #ff7300,
                #ff0000,
                #f38592,
                #ffeb00
              )
              1;
          }
          100% {
            border-image: linear-gradient(
                45deg,
                #ff0000,
                #f38592,
                #ffeb00,
                #ff7300
              )
              1;
          }
        }

        .animated-border-0 {
          animation-delay: 0s;
        }

        .animated-border-1 {
          animation-delay: 1s;
        }

        .animated-border-2 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Project;
