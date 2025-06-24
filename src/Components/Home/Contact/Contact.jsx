


import "./Contact.css";
import { FaFacebook } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_29i1m46", // Replace with your EmailJS Service ID
        "template_hmy90v6", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "H8h2wvBotEDH92IXv" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <h3 className="text-[#DAA520] pt-28 text-4xl font-bold uppercase pb-1 text-center">
        Let&apos;s Talk
      </h3>
      <hr className="w-14 mx-auto border-t-2 border-white mt-3" />
      <section className=" lg:flex justify-center items-center p-[0px] mt-4 lg:mt-0 ">
        <div className="contact-image">
          <div className="text-center lg:text-left space-y-6">
            <h3 className="text-2xl font-semibold">Don’t be hesitate!</h3>
            <p className="hidden lg:block text-white">
              Let’s connect! I’m open to talking about new ventures, <br />
              exchanging creative ideas, or contributing to impactful <br />
              projects that inspire change.
            </p>
            <p className="lg:hidden text-white">
              Let’s connect! I’m open to talking about new ventures, 
              exchanging creative ideas, or contributing to impactful 
              projects that inspire change.
            </p>
            <hr className="border-[#DAA520] w-full lg:w-[440px]" />
            <div className="mx-16 lg:mx-0 space-y-4">
              {/* Address */}
              <div className="flex items-center gap-3 bg-opacity-80  bg-zinc-800 w-72 py-2 rounded-lg">
                <span className="text-[#DAA520] text-xl pl-5">
                  <FaLocationDot />
                </span>
                <span>Feni,Bangladesh</span>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-3 bg-opacity-80 bg-zinc-800 w-72 py-2 rounded-lg">
                <span className="text-[#DAA520] text-xl pl-5">
                  <IoCall />
                </span>
                <span>+8801919610756</span>
              </div>
              {/* Email */}
              <div className="flex items-center gap-3 bg-opacity-80 bg-zinc-800 w-72 py-2 rounded-lg">
                <span className="text-[#DAA520] text-xl pl-5">
                  <IoIosMail />
                </span>
                <span>isratjahanfci@gmail.com</span>
              </div>
              {/* Facebook */}
              <div className="flex items-center gap-3 bg-opacity-80 bg-zinc-800  w-72 py-2 rounded-lg">
                <span className="text-[#DAA520] text-xl pl-5">
                  <FaFacebook />
                </span>
                <a href="https://www.facebook.com/israt.jisha.2024">
                  Israt Jisha
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form mt-10">
          <form className="space-y-6" onSubmit={sendEmail}>
            <div className="flex gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-[500px] bg-opacity-80 bg-zinc-900 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-1/2 bg-opacity-80 bg-zinc-900 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="w-[700px] h-40 bg-opacity-80 bg-zinc-900 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#DAA520] text-white px-6 py-2 rounded-md font-semibold hover:bg-yellow-600 transition duration-200"
            >
              SEND MESSAGE
            </button>
            {status && <p className="mt-4 text-yellow-400">{status}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;


