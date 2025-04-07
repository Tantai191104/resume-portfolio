"use client";
import {
  CommentIcon,
  ConnectWithoutContactIcon,
  MenuIcon,
  PersonIcon,
  ResumeIcon,
} from "@/app/constant/icons";
import { NavItem } from "@/app/model/Types";
export default function Sidebar() {
  const navItems: NavItem[] = [
    {
      icon: <PersonIcon />,
      label: "About",
      onClick: () => console.log("About"),
    },
    {
      icon: <ResumeIcon />,
      label: "Resume",
      onClick: () => console.log("Resume"),
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
  return (
    <>
      <section>
        <button className="p-4 rounded-[3px] bg-white w-[70px]  border-none hover:text-green-700 font-semibold cursor-pointer">
          <MenuIcon></MenuIcon>
        </button>
      </section>
      <section className="flex flex-col justify-between items-center mt-1.5 gap-[2rem] p-4 rounded-[3px] bg-white w-[70px]">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className="border-none hover:text-green-700 font-semibold cursor-pointer"
          >
            {item.icon}
            <p className="text-xs">{item.label}</p>
          </button>
        ))}
      </section>
    </>
  );    
}
