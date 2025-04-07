import Clients from "./Clients";
import ServiceCard from "./ServiceCard";

export default function AboutCard() {
  return (
    <div className="h-[90vh] ml-5 bg-white overflow-y-scroll">
      <p className="text-2xl font-semibold border-b-2 p-4  text-gray-500">
        <span className="inline-flex items-center justify-center text-green-500 bg-gray-200 rounded-full w-8 h-8 font-semibold">
          A
        </span>
        bout Me
      </p>
      <div className="grid grid-rows-10 ">
        <div className="row-span-2 flex p-4">
          <div className="w-1/2 p-4 border-r-2 border-black/5 ">
            <p className="text-lg leading-relaxed text-left text-gray-500 sm:text-[10px] md:text-[20px]">
              <span className="font-bold"> Hello! I’m Nguyen Tan Tai. </span>
              Frontend Developer from TP.HCM, VietNam. I have experience in
              React. I love to talk with you about our unique ideas.
            </p>
          </div>
          <div className="w-1/2 p-6">
            <div className="grid grid-cols-2 gap-y-3 text-sm">
              <div className="flex items-center border-b pb-2">
                <span className="bg-green-400 text-white font-semibold px-2 py-1 rounded">
                  Age:
                </span>
              </div>
              <div className="flex items-center border-b justify-end pb-2 font-semibold text-gray-500">
                21
              </div>

              <div className="flex items-center border-b pb-2">
                <span className="bg-green-400 text-white font-semibold px-2 py-1 rounded">
                  Residence:
                </span>
              </div>
              <div className="flex items-center border-b justify-end pb-2 font-semibold text-gray-500">
                VietNam
              </div>

              <div className="flex items-center border-b pb-2">
                <span className="bg-green-400 text-white font-semibold px-2 py-1 rounded">
                  Freelance:
                </span>
              </div>
              <div className="flex items-center justify-end border-b pb-2 font-semibold text-gray-500">
                Available
              </div>
              <div className="flex items-center">
                <span className="bg-green-400 text-white font-semibold px-2 py-1 rounded ">
                  Address:
                </span>
              </div>
              <div className="flex items-center justify-end font-semibold text-gray-500">
                TP.HCM,VN
              </div>
            </div>
          </div>
        </div>
        <p className="text-2xl font-semibold border-b-2 p-4 text-gray-500">
          <span className="inline-flex items-center justify-center text-green-500 bg-gray-200 rounded-full w-8 h-8 font-semibold">
            M
          </span>
          y Services
        </p>
        <div className="row-span-4  flex justify-around items-center">
          <ServiceCard />
        </div>
        <div className="row-span-4">
          <Clients />
        </div>
      </div>
    </div>
  );
}
