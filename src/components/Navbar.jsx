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
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contact",
    },
    {
      id: 6,
      text: "Resume",
      isExternal: true,
      link: "Aditya_Resume.pdf", // Update this with the correct path to your resume
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className=" flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Aditya Pratap Singh Parihar<span className="text-green-500 text-2xl">l</span>
              <p className="text-sm">Front-End Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text, isExternal, link }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  {isExternal ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {text}
                    </a>
                  ) : (
                    <Link
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                    >
                      {text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text, isExternal, link }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  {isExternal ? (
                    <a 
                      href={link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setMenu(!menu)}
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