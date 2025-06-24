import "./NavLink.css";

import { Link,  } from "react-router-dom";
import { IoHome,  } from "react-icons/io5";
import {
  FaUserAlt,
  FaTasks,
  FaProjectDiagram,
  FaPhoneAlt,
  FaTools,
  FaTrophy,

} from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { ImBlog } from "react-icons/im";



  const isActive = (path) => location.pathname === path;



const NavLink = () => {
    return (
             <div className="flex space-x-3 justify-center items-center w-full navlink ">
          {navLinks.map(({ to, icon, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-white flex items-center space-x-2 p-3 rounded-full  transition-all ${
                isActive(to)
                  ? "bg-[#DAA520] text-black"
                  : "hover:bg-[#DAA520] hover:text-white"
              }`}
            >
              {icon}
              <span className="hidden hover:inline">{label}</span>
            </Link>
          ))}
        </div>

    );
};
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
    to: "/achievements ",
    icon: <FaTrophy className="text-xl" />,
    label: "Achievements ",
  },
  {
    to: "/blog",
    icon: <ImBlog className="text-xl" />,
    label: "Blog",
  },
  
];
export default NavLink;