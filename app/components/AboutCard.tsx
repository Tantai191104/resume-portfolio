import Clients from "./Clients";
import ServiceCard from "./ServiceCard";

export default function AboutCard() {
  return (
    <div className="h-full max-h-[90vh] bg-white rounded-xl">
      <p className="text-2xl font-semibold border-b p-4 text-gray-500 flex items-center gap-2">
        <span className="inline-flex items-center justify-center text-green-500 bg-gray-200 rounded-full w-8 h-8 font-semibold">
          A
        </span>
        bout Me
      </p>
      <div className="flex flex-col lg:flex-row gap-6 p-4">
        <div className="lg:w-1/2 border-b lg:border-b-0 lg:border-r border-black/10 pr-0 lg:pr-4">
          <p className="text-[15px] md:text-[17px] text-gray-600 leading-relaxed text-left">
            <span className="font-bold">Hello! I’m Nguyen Tan Tai.</span>
            Frontend Developer from TP.HCM, VietNam. I have experience in React.
            I love to talk with you about our unique ideas.
          </p>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-y-4 text-sm sm:text-base">
          <Info label="Age" value="21" />
          <Info label="Residence" value="VietNam" />
          <Info label="Freelance" value="Available" />
          <Info label="Address" value="TP.HCM, VN" />
        </div>
      </div>
      <p className="text-2xl font-semibold border-b p-4 text-gray-500 flex items-center gap-2">
        <span className="inline-flex items-center justify-center text-green-500 bg-gray-200 rounded-full w-8 h-8 font-semibold">
          M
        </span>
        y Services
      </p>
      <div className="flex flex-col lg:flex-row justify-around items-center gap-6 py-6 px-4">
        <ServiceCard />
      </div>
      <div className="px-4 pb-6">
        <Clients />
      </div>
    </div>
  );
}
function Info({ label, value }: { label: string; value: string }) {
  return (
    <>
      <div className="inline-flex items-center px-2 py-1 rounded-[3px] bg-green-600 text-white font-medium">
        {label}:
      </div>
      <div className="flex items-center justify-end font-semibold text-gray-500">
        {value}
      </div>
    </>
  );
}
