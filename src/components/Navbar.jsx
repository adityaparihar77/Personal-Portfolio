import  { useState } from "react";
import pic from "../../public/Me.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Projects",
    },
   
    {
      id: 5,
      text: "Contact",
    },
    {
      id: 6,
      text: "Resume",
      isExternal: true,
      link: "Aditya_resume.pdf", 
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-14 md:h-16 shadow-lg fixed top-0 left-0 right-0 z-50 bg-dark-bg-200/90 backdrop-blur-md border-b border-dark-purple-700/30 animate-fade-in-down">
        <div className="flex justify-between items-center h-14 md:h-16">
          <div className=" flex space-x-2 animate-fade-in-left">
            <img src={pic} className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-dark-purple-500 glow-purple hover-scale" alt="" />
            <div className="hidden sm:block">
              <h1 className="font-semibold text-lg md:text-xl cursor-pointer text-white">
                Aditya Pratap Singh Parihar<span className="gradient-text text-xl md:text-2xl animate-pulse">l</span>
                <p className="text-xs md:text-sm text-gray-300">Front-End Developer</p>
              </h1>
            </div>
            <div className="sm:hidden">
              <h1 className="font-semibold text-sm cursor-pointer text-white">
                Aditya<span className="gradient-text text-lg animate-pulse">l</span>
                <p className="text-xs text-gray-300">Developer</p>
              </h1>
            </div>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-6 md:space-x-8 animate-fade-in-right">
              {navItems.map(({ id, text, isExternal, link }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer text-gray-300 hover:text-dark-purple-300 transition-colors hover-lift"
                  key={id}
                >
                  {isExternal ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-dark-purple-300 text-sm md:text-base">
                      {text}
                    </a>
                  ) : (
                    <Link
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                      className="hover:text-dark-purple-300 text-sm md:text-base"
                    >
                      {text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden text-white hover:text-dark-purple-300 cursor-pointer hover-scale p-2">
              {menu ? <IoCloseSharp size={20} className="animate-fade-in" /> : <AiOutlineMenu size={20} className="animate-fade-in" />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-dark-bg-200/95 backdrop-blur-md border-t border-dark-purple-700/30 animate-fade-in-up md:hidden">
            <ul className="flex flex-col h-screen items-center justify-center space-y-4 text-lg">
              {navItems.map(({ id, text, isExternal, link }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer text-gray-300 hover:text-dark-purple-300 transition-colors animate-fade-in-up py-2"
                  key={id}
                  style={{ animationDelay: `${id * 0.1}s` }}
                >
                  {isExternal ? (
                    <a 
                      href={link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setMenu(!menu)}
                      className="hover:text-dark-purple-300 block px-4 py-2"
                    >
                      {text}
                    </a>
                  ) : (
                    <Link
                      onClick={() => setMenu(!menu)}
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                      className="hover:text-dark-purple-300 block px-4 py-2"
                    >
                      {text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
