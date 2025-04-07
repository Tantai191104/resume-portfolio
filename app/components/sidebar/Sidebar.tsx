import {
  CommentIcon,
  ConnectWithoutContactIcon,
  MenuIcon,
  PersonIcon,
} from "@/app/constant/icons";
import Link from "next/link";
export default function Sidebar() {
  return (
    <>
      <section>
        <button className="p-4 rounded-[3px] bg-white w-[70px]">
          <MenuIcon></MenuIcon>
        </button>
      </section>
      <section className="flex flex-col justify-between items-center mt-1.5 gap-[2rem] p-4 rounded-[3px] bg-white w-[70px]">
        <Link
          href={"#"}
          className="flex flex-col justify-center items-center"
        >
          <MenuIcon></MenuIcon>
          <p>About</p>
        </Link>
        <Link
          href={"#"}
          className="flex flex-col justify-center items-center"
        >
          <PersonIcon></PersonIcon>
          <p>About</p>
        </Link>
        <Link
          href={"#"}
          className="flex flex-col justify-center items-center"
        >
          <CommentIcon></CommentIcon>
          <p>About</p>
        </Link>
        <Link
          href={"#"}
          className="flex flex-col justify-center items-center"
        >
          <ConnectWithoutContactIcon></ConnectWithoutContactIcon>
          <p>About</p>
        </Link>
      </section>
    </>
  );
}
