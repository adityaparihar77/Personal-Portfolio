import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr className="border-dark-purple-700/30" />
      <footer className="py-8 md:py-12 bg-dark-bg-200/50">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4 animate-fade-in-up">
              <FaFacebook size={20} className="md:text-2xl text-gray-300 hover:text-dark-purple-300 cursor-pointer transition-colors hover-scale animate-float" />
              <FaTwitter size={20} className="md:text-2xl text-gray-300 hover:text-dark-purple-300 cursor-pointer transition-colors hover-scale animate-float" style={{ animationDelay: '0.2s' }} />
              <FaInstagram size={20} className="md:text-2xl text-gray-300 hover:text-dark-purple-300 cursor-pointer transition-colors hover-scale animate-float" style={{ animationDelay: '0.4s' }} />
              <FaLinkedinIn size={20} className="md:text-2xl text-gray-300 hover:text-dark-purple-300 cursor-pointer transition-colors hover-scale animate-float" style={{ animationDelay: '0.6s' }} />
            </div>
            <div className="mt-6 md:mt-8 border-t border-dark-purple-700/30 pt-6 md:pt-8 flex flex-col items-center animate-fade-in-up">
              <p className="text-xs md:text-sm text-gray-300 text-center">Supportive Partner <span className="text-red-400 animate-pulse">❤️</span> Aditya</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
