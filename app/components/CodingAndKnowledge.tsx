import { Code2Icon, ListTodoIcon, CheckCircle2Icon } from "lucide-react";
import SkillChart from "./SkillChart";

const codingSkills = [
  { percent: 90, label: "WordPress" },
  { percent: 75, label: "PHP / MYSQL" },
  { percent: 85, label: "Angular / JavaScript" },
  { percent: 95, label: "HTML / CSS" },
];

const knowledgeList = [
  "Website hosting",
  "iOS and android apps",
  "Create logo design",
  "Design for print",
  "Modern and mobile-ready",
  "Advertising services include",
  "Graphics and animations",
  "Search engine marketing",
];

export default function CodingAndKnowledge() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Coding */}
      <div>
        <h3 className="flex items-center gap-2 text-green-600 font-bold text-lg mb-6">
          <Code2Icon size={20} />
          CODING
        </h3>
        <div className="grid grid-cols-2 gap-6">
          {codingSkills.map((skill, idx) => (
            <SkillChart key={idx} {...skill} />
          ))}
        </div>
      </div>

      {/* Knowledge */}
      <div>
        <h3 className="flex items-center gap-2 text-green-600 font-bold text-lg mb-6">
          <ListTodoIcon size={20} />
          KNOWLEDGE
        </h3>
        <ul className="space-y-3">
          {knowledgeList.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-gray-700 text-sm"
            >
              <CheckCircle2Icon size={16} className="text-green-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
