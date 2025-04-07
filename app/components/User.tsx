import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FacebookIcon, GitHubIcon, LinkedInIcon } from "../constant/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faThreads } from "@fortawesome/free-brands-svg-icons";
import TypewriterEffect from "./TypewriterEffect";

export default function User() {
  return (
    <div className="grid grid-rows-12 gap-2 items-center text-center">
      <section className="flex justify-center row-span-7">
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src="/images/avatar11.jpeg"
            alt="User Picture"
            layout="responsive"
            width={300}
            height={200}
            className="object-cover w-full h-full border-black border-2"
          />
        </div>
      </section>
      <section className="row-span-3 flex flex-col justify-center items-center gap-3">
        <h1 className=" text-3xl font-semibold">Hà Nguyễn Hồng Trinh</h1>
        <div>
          <TypewriterEffect />
        </div>
        <div className="flex justify-center">
          <ToggleGroup type="multiple">
            <ToggleGroupItem value="Github" aria-label="Github">
              <GitHubIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="LinkedIn" aria-label="LinkedIn">
              <LinkedInIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="Facebook" aria-label="Facebook">
              <FacebookIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="Threads" aria-label="Threads">
              <FontAwesomeIcon icon={faThreads} />
            </ToggleGroupItem>
            <ToggleGroupItem value="faTwitter" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </section>

      <section className="row-span-2 w-full flex justify-between items-center p-2 border-black/[.2] border-t-[0.8px]">
        <div className="w-1/2 flex justify-center items-center font-bold text-xl mt-2 cursor-pointer hover:text-green-400">
          Download CV
        </div>
        <div className="w-1/2 flex justify-center items-center font-bold text-xl mt-2 cursor-pointer">
          Contact me
        </div>
      </section>
    </div>
  );
}
