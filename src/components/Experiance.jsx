import logo from '../assets/Screenshot 2025-05-03 003227.png'; // Replace with the path to your logo image

function Experiance() {
  const cardItem = [
    {
      id: 1,
      name: "IT Intern Trainee",
      company: "Logicsyner Innovations Pvt. Ltd.,",
      logo: logo, // Add the logo image to the card item
      description: [
        "Assisted with daily operations and supported the team in assigned tasks.",
        "Gained practical exposure and hands-on experience in the relevant field.",
        "Contributed to ongoing projects through research, analysis, or execution."
      ]
    },
  ];

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-3">
          {cardItem.map(({ id, name, company, logo, description }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-md md:w-[400px] md:h-[400px] shadow-md p-4 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <div className="flex items-center justify-center h-[150px] w-[150px] bg-gray-200">
                <img src={logo} alt={company} className="h-[100px] w-[100px]" />
              </div>
              <div className="mt-4">
                <div className="text-lg font-semibold">{name}</div>
                <div className="text-sm text-gray-500">{company}</div>
                {description && (
                  <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                    {description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;