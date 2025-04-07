import Image from "next/image";

type ExperienceProps = {
  time: string;
  role: string;
  company: string;
  description: string;
  logo: string;
};

export default function ResumeExperienceItem({
  time,
  role,
  company,
  description,
  logo,
}: ExperienceProps) {
  return (
    <div className="relative pl-6 border-l border-gray-200">
      <div className="absolute left-0 top-2 w-3 h-3 bg-green-500 rounded-full"></div>
      <span className="text-xs bg-green-100 text-green-600 px-2 py-[2px] rounded-full font-medium inline-block mb-2">
        {time}
      </span>
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-gray-800">{role}</h4>
        <Image src={logo} alt="Company Logo" width={50} height={20} className="h-5 opacity-60" />
      </div>
      <p className="text-sm text-gray-500">{company}</p>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
}
