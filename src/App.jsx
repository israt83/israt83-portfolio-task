
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home/Home";
import About from "./Components/Home/About/About";
import Project from "./Components/Home/Project/Project";
import Contact from "./Components/Home/Contact/Contact";
import Resume from "./Components/Resume/Resume";
import Skill from "./Components/Home/Skill/Skill";
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Home/Blog/Blog";
import Achievements from "./Components/Achievements/Achievements";



function App() {
  return (
    <Router>
      <Navbar />
      <Outlet/>
      <Footer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/skill" element={<Skill/>} />
        <Route path="/achievements" element={<Achievements/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </Router>
  );
}

export default App;
