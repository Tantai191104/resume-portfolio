import Image from "next/image";
import React from "react";

export default function Clients() {
  return (
    <section>
        <p className="text-2xl font-semibold border-b-2 p-2 text-gray-500">
          <span className="inline-flex items-center justify-center text-green-500 bg-gray-200 rounded-full w-8 h-8 font-semibold">
            C
          </span>
          lients
        </p>
      <div className="grid grid-cols-4 divide-x divide-gray-200 border border-gray-200 rounded-md overflow-hidden bg-white shadow-md">
        <div className="flex items-center justify-center h-28">
          <Image
            src="/images/google.svg"
            alt="Google"
            width={100}
            height={40}
            className="h-10 grayscale opacity-80 hover:opacity-100 transition"
          />
        </div>
        <div className="flex items-center justify-center h-28">
          <Image
            src="/images/upwork.svg"
            alt="Upwork"
            width={100}
            height={40}
            className="h-10 grayscale opacity-80 hover:opacity-100 transition"
          />
        </div>
        <div className="flex items-center justify-center h-28">
          <Image
            src="/images/linkedin.svg"
            alt="LinkedIn"
            width={100}
            height={40}
            className="h-10 grayscale opacity-80 hover:opacity-100 transition"
          />
        </div>
        <div className="flex items-center justify-center h-28">
          <Image
            src="/images/firefox.svg"
            alt="Firefox"
            width={100}
            height={40}
            className="h-10 grayscale opacity-80 hover:opacity-100 transition"
          />
        </div>
      </div>
    </section>
  );
}
