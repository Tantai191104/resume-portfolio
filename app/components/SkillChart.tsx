type SkillChartProps = {
    percent: number;
    label: string;
  };
  
  export default function SkillChart({ percent, label }: SkillChartProps) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-20 h-20">
          <svg className="w-full h-full rotate-[-90deg]">
            <circle cx="40" cy="40" r="36" fill="none" stroke="#e5e7eb" strokeWidth="8" />
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              stroke="#22c55e"
              strokeWidth="8"
              strokeDasharray={`${(percent / 100) * 226} 226`}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-semibold text-gray-700">
            {percent}%
          </span>
        </div>
        <p className="text-sm font-medium text-center text-gray-700">{label}</p>
      </div>
    );
  }
  