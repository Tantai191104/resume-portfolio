import { BriefcaseIcon, GraduationCapIcon } from "lucide-react";
import Image from "next/image";
import CodingAndKnowledge from "./CodingAndKnowledge";

const experiences = [
  {
    time: "2013 - Present",
    role: "Art Director",
    company: "Google Inc.",
    description: "Collaborate with creative and development teams on the execution of ideas.",
    logo: "/images/google.svg",
  },
  {
    time: "2011 - 2012",
    role: "Front-End Developer",
    company: "Upwork Inc.",
    description: "Monitored technical aspects of the front-end delivery for projects.",
    logo: "/images/upwork.svg",
  },
];

const educations = [
  {
    time: "2006 - 2008",
    title: "Art University",
    location: "New York",
    description:
      "Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson, Missouri.",
  },
  {
    time: "2005 - 2006",
    title: "Programming Course",
    location: "Paris",
    description: "Coursework – Git, WordPress, Javascript, iOS, Android.",
  },
];

export default function ResumeSection() {
  return (
    <section className="flex flex-col gap-10 bg-white p-10 rounded-lg h-full w-full ml-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="flex items-center gap-2 text-green-600 font-bold text-lg mb-6">
            <BriefcaseIcon size={20} />
            EXPERIENCE  
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-6 border-l border-gray-200 ">
                <div className="absolute left-0 top-2 w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-[2px] rounded-full font-medium inline-block mb-2">
                  {exp.time}
                </span>
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-gray-800">{exp.role}</h4>
                  <Image src={exp.logo} alt="logo" width={50} height={20} className="h-5 opacity-60" />
                </div>
                <p className="text-sm text-gray-500">{exp.company}</p>
                <p className="text-sm text-gray-600 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="flex items-center gap-2 text-green-600 font-bold text-lg mb-6">
            <GraduationCapIcon size={20} />
            EDUCATION
          </h3>
          <div className="space-y-6">
            {educations.map((edu, idx) => (
              <div key={idx} className="relative pl-6 border-l border-gray-200">
                <div className="absolute left-0 top-2 w-3 h-3 bg-gray-300 rounded-full"></div>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-[2px] rounded-full font-medium inline-block mb-2">
                  {edu.time}
                </span>
                <h4 className="font-bold text-gray-800">{edu.title}</h4>
                <p className="text-sm text-gray-500">{edu.location}</p>
                <p className="text-sm text-gray-600 mt-2">{edu.description}</p>
                <p className="text-green-600 text-sm font-semibold mt-1">CERTIFICATE ➤</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coding + Knowledge */}
      <CodingAndKnowledge />
    </section>
  );
}
