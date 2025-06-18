import pic from "../../public/Me.png";

import { FaJava, FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiCss3, SiHtml5, } from "react-icons/si";

import { FaReact } from "react-icons/fa";


import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 md:my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-8 md:mt-24 space-y-4 md:space-y-2 order-2 md:order-1 scroll-animate-left">
            <span className="text-lg md:text-xl text-gray-300 animate-fade-in-down text-center md:text-left">Welcome to My World</span>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-1 text-xl md:text-2xl lg:text-4xl text-center md:text-left">
            <h1 className="text-white animate-fade-in-up">Hello, i am a</h1>
              
              
              <ReactTyped
                className="gradient-text font-bold animate-fade-in-up text-center md:text-left"
                strings={["FrontEnd Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify text-gray-300 animate-fade-in-up leading-relaxed">
            Motivated Computer Science student with expertise in Front-End Developement and Java. Skilled in building 
scalable, secure, and high-performance web applications. Passionate about problem-solving, system optimization, and 
user-centric solutions. Quick learner and a team player eager to contribute to innovative tech environments
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:items-center md:justify-between animate-fade-in-up">
              <div className="space-y-3 md:space-y-2">
                <h1 className="font-bold text-center text-white text-lg md:text-base">Available on</h1>
                <ul className="flex justify-center md:justify-start space-x-6 md:space-x-5">
                  <li>
                    <a href="https://www.facebook.com/share/1Qm92Q1jWB/" target="_blank">
                      <FaSquareFacebook className="text-3xl md:text-2xl cursor-pointer text-gray-300 hover:text-dark-purple-300 transition-colors hover-scale animate-bounce" />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/adityaparihar-939922226" target="_blank">
                      <FaLinkedin className="text-3xl md:text-2xl cursor-pointer text-gray-300 hover:text-dark-purple-300 transition-colors hover-scale animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-3xl md:text-2xl cursor-pointer text-gray-300 hover:text-dark-purple-300 transition-colors hover-scale animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-3xl md:text-2xl cursor-pointer text-gray-300 hover:text-dark-purple-300 transition-colors hover-scale animate-bounce" style={{ animationDelay: '0.6s' }} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3 md:space-y-2">
                <h1 className="font-bold text-center text-white text-lg md:text-base">Currently working on</h1>
                <div className="flex justify-center md:justify-start space-x-6 md:space-x-5">
                  <FaJava className="text-3xl md:text-2xl lg:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-dark-purple-500 cursor-pointer text-gray-300 hover:text-dark-purple-300 hover:border-dark-purple-300 glow-purple hover-lift animate-float" />
                  <SiHtml5 className="text-3xl md:text-2xl lg:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-dark-purple-500 cursor-pointer text-gray-300 hover:text-dark-purple-300 hover:border-dark-purple-300 glow-purple hover-lift animate-float" style={{ animationDelay: '0.5s' }} />
                  <FaReact className="text-3xl md:text-2xl lg:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-dark-purple-500 cursor-pointer text-gray-300 hover:text-dark-purple-300 hover:border-dark-purple-300 glow-purple hover-lift animate-float" style={{ animationDelay: '1s' }} />
                  <SiCss3 className="text-3xl md:text-2xl lg:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-dark-purple-500 cursor-pointer text-gray-300 hover:text-dark-purple-300 hover:border-dark-purple-300 glow-purple hover-lift animate-float" style={{ animationDelay: '1.5s' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-20 order-1 scroll-animate-right">
          <img
  src={pic}
  className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 object-cover shadow-2xl transition-transform duration-300 hover:scale-105 border-4 border-dark-purple-500 glow-purple animate-float hover-lift"
  alt=""
/>
          </div>
        </div>
      </div>

      <hr className="border-dark-purple-700/30" />
    </>
  );
}

export default Home;
