import React from "react";

function Experience() {
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold">Frontend Developer Intern</h2>
          <p className="text-gray-600">Collegites AI — Bhopal, India</p>
          <p className="text-sm text-gray-500">Present</p>
          <ul className="list-disc pl-5 mt-3 space-y-2">
            <li>
              Developed responsive and accessible UI components using React.js,
              enhancing user engagement across multilingual video creation
              tools.
            </li>
            <li>
              Collaborated with cross-functional teams to implement scalable UI
              features that supported AI-generated video content creation.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
