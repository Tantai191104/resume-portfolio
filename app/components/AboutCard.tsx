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
        <div className="row-span-4 bg-amber-400 flex p-4">
          <div className="w-1/2 p-4 border-r-2">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold">Hello! I’m Nguyen Tan Tai.</span>
              Frontend Developer from TP.HCM, VietNam. I have experience in
              React. I love to talk with you about our unique ideas.
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <div className="">
                <p><span>Age:</span> 21</p>
                <p><span>Residence::</span> VietNam</p>
                <p><span>Freelance:</span> Available</p>
                <p><span>Address:</span>TP.HCM,VietNam</p>
            </div>
          </div>
        </div>

        <div className="row-span-8 bg-gray-100"></div>
      </div>
    </div>
  );
}
