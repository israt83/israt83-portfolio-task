import Aos from "aos";
import { useEffect } from "react";



const Blog = () => {
      useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#181818] text-white">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center pt-28 uppercase">
        Bl<span className="text-[#DAA520]">og</span>
      </h2>
      <hr className="w-10 mx-auto border-t-2 border-white mt-4" />

      {/* Blog Section */}
      <section
       
        className="py-16"
      >
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          {/* Featured Blog Card */}
          <a
           data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
            href="#"
            className="block lg:grid lg:grid-cols-12 gap-6 group hover:no-underline focus:no-underline  text-white bg-zinc-800 rounded-lg overflow-hidden"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYlo3sYrMYisLh-SVUEIpf4xfTkr6LByig_MR9vpXR-maiDs-t_3HS5kWTcLBFKQcZmw&usqp=CAU"
              alt="Portfolio blog"
              className="object-cover w-full h-64 sm:h-96 lg:col-span-7"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline">
                From Learning to Launching: My Dev Blog
              </h3>
              <span className="text-xs text-gray-500">June 20, 2023</span>
              <p>
                A space where I share my journey of learning to code, building
                practical projects, and refining the user experience.
              </p>
            </div>
          </a>

          {/* Blog Cards Grid */}
          <div   className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {/* Blog Card 1 */}
            <a data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
              href="#"
              className="bg-zinc-800 text-white rounded-lg overflow-hidden group hover:no-underline"
            >
              <img
                src="https://t3.ftcdn.net/jpg/02/94/37/08/360_F_294370899_CjLy3nMMSkm9FBsIdPvqlQgjiGrTT9kW.jpg"
                alt="Frontend learning"
                className="object-cover w-full h-64"
              />
              <div className="p-6 space-y-2">
                <h3 className=" text-2xl font-semibold group-hover:underline">
                  My Frontend Learning Journey
                </h3>
                <p className="text-sm text-gray-400">#Frontend #JavaScript #Learning</p>
                <span className="text-sm text-gray-500">June 01, 2024</span>
                <p>
                  A look back at how I started with HTML, CSS, and JavaScript, and what helped me grow.
                </p>
              </div>
            </a>

            {/* Blog Card 2 */}
            <a
            data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
              href="#"
              className="bg-zinc-800 text-white  rounded-lg overflow-hidden group hover:no-underline"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8xwdmBN3cMdxzTs_jrLRnKe4ujHpyxWHIcA&s"
                alt="Portfolio build"
                className="object-cover w-full h-64"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline">
                  How I Built My Portfolio Website
                </h3>
                 <p className="text-sm text-gray-400">#React #TailwindCSS #Deployment</p>
                <span className="text-sm text-gray-500">June 21, 2024</span>
                <p>
                  Behind-the-scenes look at the tools, structure, and design decisions of my portfolio site.
                </p>
              </div>
            </a>

            {/* Blog Card 3 */}
            <a
            data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
              href="#"
              className="bg-zinc-800 text-white  rounded-lg overflow-hidden group hover:no-underline"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_y-fqw8ctTT9J2gd5pMxFoETkNVo_WECfUeOsuqdUfrT7LXqOTMvqgAxuveBYxU9HKPU&usqp=CAU"
                alt="Firebase & JWT"
                className="object-cover w-full h-64"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline">
                  Secure Auth with Firebase & JWT
                </h3>
                 <p className="text-sm text-gray-400"> #Firebase #JWT #MERN</p>
                <span className="text-sm text-gray-500">July 21, 2024</span>
                <p>
                  Learn how I implemented user authentication securely using Firebase and JSON Web Tokens.
                </p>
              </div>
            </a>

            {/* Blog Card 4 */}
            <a
            data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
              href="#"
              className="bg-zinc-800 text-white  rounded-lg overflow-hidden group hover:no-underline"
            >
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Animations"
                className="object-cover w-full h-64"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline">
                  Improving User Experience with Animations
                </h3>
                 <p className="text-sm text-gray-400">#UIUX #React #Animations</p>
                <span className="text-sm text-gray-500">June 21, 2025</span>
                <p>
                  A guide to using smooth animations and transitions to make your UI more engaging and intuitive.
                </p>
              </div>
            </a>
          </div>

        
        </div>
      </section>
    </div>
  );
};

export default Blog;
