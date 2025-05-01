
import CSW from "../../public/CSW.png";
import EMS from "../../public/EMS.jpeg";
import S from "../../public/S.png";


function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: CSW,
      name: "Course selling website",
      description: "A platform for selling and managing online courses.",
      liveLink: "https://course-selling-website-rho.vercel.app/",
      sourceCode: "https://github.com/adityaparihar77/Course-Selling-Website",
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
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, description, liveLink, sourceCode }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  {description}
                </p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded inline-block">
                  Live
                </a>
                <a href={sourceCode} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded inline-block">
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