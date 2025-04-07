import React from "react";

export default function AboutCard() {
  return (
    <div>
      <div>
        <p className="text-2xl font-semibold border-b-2 p-4 border-black-[0.5]">
          <span className="text-blue-500">A</span>bout Me
        </p>
      </div>
      <div className="grid grid-rows-12 overflow-y-scroll h-[80vh]">
        <div className="row-span-4 flex p-4">
          <div className="w-1/2 p-4 border-r-2 border-white">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold">Hello! I’m Nguyen Tan Tai.</span>
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
                USA
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
                California, USA
              </div>
            </div>
          </div>
        </div>

        <div className="row-span-8 bg-gray-100"></div>
      </div>
    </div>
  );
}
