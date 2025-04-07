import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  DownloadIcon,
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  NearMeIcon,
} from "../constant/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faThreads } from "@fortawesome/free-brands-svg-icons";
import TypewriterEffect from "./TypewriterEffect";

export default function User() {
  return (
    <div className="flex flex-col items-center text-center h-full w-full gap-6">
      {/* Ảnh đại diện */}
      <div className="w-full">
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/avatar11.jpeg"
            alt="User Picture"
            width={300}
            height={200}
            className="object-cover w-full h-full border-black border-2"
          />
        </div>
      </div>

      {/* Tên + Typewriter + Icon */}
      <div className="flex flex-col justify-center items-center gap-3 px-2">
        <h1 className="text-2xl sm:text-xl font-semibold">Nguyễn Tấn Tài</h1>
        <div className="text-sm sm:text-xs">
          <TypewriterEffect />
        </div>
        <div className="flex justify-center flex-wrap gap-2">
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
      </div>

      {/* Nút dưới cùng */}
      <div className="w-full flex flex-col sm:flex-row items-center border-t border-black/20 text-sm sm:text-base pt-4 mt-auto">
        <div className="group w-full sm:w-1/2 flex justify-center items-center text-gray-500 font-semibold py-4 cursor-pointer hover:text-green-900 gap-2 border-b sm:border-b-0 sm:border-r border-black/20">
          Download CV
          <span className="transition-transform duration-200 group-hover:-translate-y-1">
            <DownloadIcon />
          </span>
        </div>

        <div className="group w-full sm:w-1/2 flex justify-center items-center text-gray-500 font-semibold py-4 cursor-pointer hover:text-green-900 gap-2">
          Contact me
          <span className="transition-transform duration-200 group-hover:-translate-y-1">
            <NearMeIcon />
          </span>
        </div>
      </div>
    </div>
  );
}
