"use client";

import {
  CommentIcon,
  ConnectWithoutContactIcon,
  PersonIcon,
  ResumeIcon,
} from "@/app/constant/icons";
import { NavItem } from "@/app/model/Types";
import { useEffect, useState } from "react";
type Props = {
  onNavigate: (tab: "about" | "resume") => void;
};
export default function Sidebar({ onNavigate }: Props) {
  const navItems: NavItem[] = [
    {
      icon: <PersonIcon />,
      label: "About",
      onClick: () => onNavigate("about"),
    },
    {
      icon: <ResumeIcon />,
      label: "Resume",
      onClick: () => onNavigate("resume"),
    },
    {
      icon: <CommentIcon />,
      label: "Comments",
      onClick: () => console.log("Comments"),
    },
    {
      icon: <ConnectWithoutContactIcon />,
      label: "Contact",
      onClick: () => console.log("Contact"),
    },
  ];
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 w-full bg-white px-4 py-2 shadow-md flex justify-around items-center z-50">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className="flex flex-col items-center text-xs text-gray-600 hover:text-green-700"
          >
            {item.icon}
            <span className="text-[10px]">{item.label}</span>
          </button>
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-between items-center gap-6 p-4 rounded-[3px] bg-white max-w-[70px]">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={item.onClick}
          className="border-none hover:text-green-700 font-semibold cursor-pointer flex flex-col items-center gap-1"
        >
          {item.icon}
          <p className="text-xs">{item.label}</p>
        </button>
      ))}
    </div>
  );
}
