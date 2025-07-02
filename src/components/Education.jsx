import { useState } from "react";
import { FaChevronRight, FaSchool } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    title: "High School Education",
    institution: "R.K.Talreja College of Arts, Science and Commerce",
    details: "Completed 12th in Science stream with Mathematics and Statistics.",
  },
  {
    id: 2,
    title: "BSc in Data Science",
    institution: "SIES College of Arts, Science, Commerce (Autonomous), Mumbai",
    details:
      "Currently pursuing Bachelor's in Data Science. Acquired strong skills in Python, SQL, Power BI, and Machine Learning.",
  },
];

export default function Education() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="education" className="section text-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Education
      </h2>

      <div className="bg-[#1e1e1e] rounded-lg max-w-4xl mx-auto p-6 shadow-lg">
        <div className="bg-[#2c2c2c] text-sm font-mono px-4 py-2 rounded-t-md flex justify-between">
          <span>education.terminal</span>
          <span>~/.portfolio/education</span>
        </div>

        <div className="bg-black p-6 space-y-4 text-sm font-mono text-green-400 rounded-b-md border border-gray-700">
          <p>
            <span className="text-blue-400">user@portfolio</span>:~$ <span className="text-yellow-400">ls Education/</span>
          </p>
          <p className="text-green-300">Available education records found</p>

          <div className="space-y-2">
            {educationData.map((edu) => (
              <button
                key={edu.id}
                onClick={() => setSelected(edu.id)}
                className="flex items-center justify-between w-full bg-[#121212] hover:bg-[#1c1c1c] text-left text-white px-4 py-2 rounded-md border border-gray-700 transition"
              >
                <div className="flex items-center gap-2">
                  <FaChevronRight className="text-sm" />
                  <span>{edu.title}</span>
                </div>
                <span className="text-xs text-gray-400">{edu.institution}</span>
              </button>
            ))}
          </div>

          <div className="min-h-[100px] mt-4 p-4 bg-[#0f0f0f] text-white rounded-md border border-gray-700">
            {selected ? (
              <p>{educationData.find((edu) => edu.id === selected)?.details}</p>
            ) : (
              <p className="text-gray-500 italic">
                Select an education record above to view details...
              </p>
            )}
          </div>

          <div className="flex justify-between text-xs pt-4 border-t border-gray-700 text-gray-400">
            <span>⚫ Status: <span className="text-green-400">Ready</span></span>
            <span>Education Terminal v2.1.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
