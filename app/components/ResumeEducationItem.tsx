type EducationProps = {
    time: string;
    title: string;
    location: string;
    description: string;
  };
  
  export default function ResumeEducationItem({
    time,
    title,
    location,
    description,
  }: EducationProps) {
    return (
      <div className="relative pl-6 border-l border-gray-200">
        <div className="absolute left-0 top-2 w-3 h-3 bg-gray-300 rounded-full"></div>
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-[2px] rounded-full font-medium inline-block mb-2">
          {time}
        </span>
        <h4 className="font-bold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <p className="text-green-600 text-sm font-semibold mt-1">CERTIFICATE ➤</p>
      </div>
    );
  }
  