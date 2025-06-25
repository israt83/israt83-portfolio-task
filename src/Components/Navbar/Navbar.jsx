import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoHome, IoClose } from "react-icons/io5";
import {
  FaUserAlt,
  FaTasks,
  FaProjectDiagram,
  FaPhoneAlt,
  FaTools,
  FaArrowDown,
  FaRegNewspaper,
  FaTrophy,
} from "react-icons/fa";
import { FiMenu, FiPackage } from "react-icons/fi";
import { Drawer, IconButton } from "@mui/material";

import "./Navbar.css";
import NavLink from "./NavLink/NavLink";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-opacity-70 bg-black p-4">
      {/* Large Screen Navbar */}

      <div className="hidden lg:flex justify-around w-full">
    
          <p className="text-3xl font-bold uppercase">
          {/* <span className="flicker shine bg-gradient-to-b from-[rgba(209,17,77,0.8)] to-[rgba(230,182,21,0.8)] bg-clip-text text-transparent">
            &lt;/Jisha&gt;
          </span> */}
          <span className="text-4xl font-semibold tracking-tight bg-gradient-to-r from-[#FF3811] via-[#E6B615] to-yellow-800 bg-[length:200%] bg-clip-text text-transparent animate-[gradientMove_3s_ease-in-out_infinite]">
 &lt;/Jisha&gt;
</span>

        </p>
   
        {/* Centered Navigation Links */}

         <NavLink />
   

        <a
          href="https://drive.google.com/file/d/1Zln3LulKz2Q_NmI2Ylc2s_W9VcUdp3Rt/view?usp=sharing"
          download="IsratJishaResume.pdf"
          className=" font-medium  text-white "
        >
          <div className="flex space-x-2 card">
            <span className="text-xl ">Resume</span>{" "}
            <FaArrowDown className="mt-1 " />
          </div>
        </a>
      </div>

      {/* Small Screen Navbar */}
      <div className="flex lg:hidden justify-between items-center">
        <IconButton onClick={toggleMenu} className="text-white">
          <FiMenu className="text-white" size={35} />
        </IconButton>
         <a
          href="https://drive.google.com/file/d/1Zln3LulKz2Q_NmI2Ylc2s_W9VcUdp3Rt/view?usp=sharing"
          download="IsratJishaResume.pdf"
          className=" font-medium  text-white "
        >
          <div className="flex space-x-2 card">
            <span className="text-xl ">Resume</span>{" "}
            <FaArrowDown className="mt-1 " />
          </div>
        </a>
      </div>

      {/* Drawer Menu for Small Screens */}
      <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
        <div className="w-64 bg-zinc-800 h-full flex flex-col text-white">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <span className="text-lg font-semibold">
              {" "}
              <span className="bg-gradient-to-r from-[#FF3811] via-[#E6B615] to-yellow-800 bg-[length:200%] bg-clip-text  text-transparent">
                &lt;/Jisha&gt;
              </span>
            </span>
            <IconButton onClick={toggleMenu} className="text-white ">
              <IoClose className="text-white" size={30} />
            </IconButton>
          </div>
          <div className="flex flex-col mt-4 space-y-4 px-4">
            {navLinks.map(({ to, icon, label }) => (
              <Link
                key={to}
                to={to}
                onClick={toggleMenu}
                className={`flex items-center space-x-2 p-3 rounded-md transition-all ${
                  isActive(to)
                    ? "bg-[#DAA520] text-white"
                    : "hover:bg-[#DAA520]"
                }`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

// Navigation Links Data
const navLinks = [
  { to: "/", icon: <IoHome className="text-2xl" />, label: "Home" },
  { to: "/about", icon: <FaUserAlt className="text-xl" />, label: "About" },
  { to: "/skill", icon: <FaTools className="text-xl" />, label: "Skill" },
  { to: "/resume", icon: <FaTasks className="text-xl" />, label: "Resume" },
  {
    to: "/projects",
    icon: <FaProjectDiagram className="text-xl" />,
    label: "Projects",
  },
  {
    to: "/contact",
    icon: <FaPhoneAlt className="text-xl" />,
    label: "Contact",
  },
  {
    to: "/blog",
    icon: <FaRegNewspaper className="text-xl" />,
    label: "Blog",
  },
  {
    to: "/achievements",
    icon: <FaTrophy className="text-xl" />,
    label: "Achievements",
  },
];

export default Navbar;
