import CSW from "../../public/CSW.png";
import EMS from "../../public/EMS.jpeg";
import S from "../../public/S.png";


function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: CSW,
      name: "Weather App",
      description: "A web application for checking real-time weather updates and forecasts.",
      liveLink: "https://weather-ivory-nine.vercel.app/",
      sourceCode: "https://github.com/adityaparihar77/Weather",
    },
    {
      id: 2,
      logo: EMS,
      name: "Employee Management System",       
      description: "A web application for managing employee records.",
      liveLink: "https://employee-management-system-phi-dusky.vercel.app/",
      sourceCode: "https://github.com/adityaparihar77/Employee-Management-System",
    },
    {
      id: 3,
      logo: S,
      name: "sidcup family golf Clone",
      description: "A clone of the Sidcup Family Golf website.",
      liveLink: "https://sidcup-family-website.vercel.app/",
      sourceCode: "https://github.com/adityaparihar77/Sidcup-Family-Website",
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-8 md:mt-10"
    >
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-5 gradient-text animate-fade-in-down text-center md:text-left">Projects</h1>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 my-6 md:my-8">
          {cardItem.map(({ id, logo, name, description, liveLink, sourceCode }, index) => (
            <div
              className={`card-bg rounded-lg shadow-xl p-4 md:p-6 cursor-pointer hover:scale-105 duration-300 glow-purple border border-dark-purple-500/30 scroll-animate-scale hover-lift`}
              key={id}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={logo}
                className="w-20 h-20 md:w-[120px] md:h-[120px] p-1 rounded-full border-2 border-dark-purple-500 mx-auto mb-3 md:mb-4 hover-rotate transition-transform duration-300"
                alt=""
              />
              <div>
                <div className="px-1 md:px-2 font-bold text-lg md:text-xl mb-2 md:mb-3 text-white animate-fade-in-up text-center">{name}</div>
                <p className="px-1 md:px-2 text-sm md:text-base text-gray-300 mb-3 md:mb-4 leading-relaxed animate-fade-in-up text-center">
                  {description}
                </p>
              </div>
              <div className="px-1 md:px-2 py-3 md:py-4 space-x-2 md:space-x-3 flex flex-col sm:flex-row justify-center gap-2 md:gap-0">
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="bg-dark-purple-600 hover:bg-dark-purple-700 text-white font-bold px-3 md:px-4 py-2 rounded transition-colors duration-200 hover-scale animate-pulse text-center text-sm md:text-base">
                  Live
                </a>
                <a href={sourceCode} target="_blank" rel="noopener noreferrer" className="bg-dark-purple-500 hover:bg-dark-purple-600 text-white font-bold px-3 md:px-4 py-2 rounded transition-colors duration-200 hover-scale animate-pulse text-center text-sm md:text-base">
                  Source code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;