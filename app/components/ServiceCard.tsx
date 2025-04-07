import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
export default function ServiceCard() {
  return (
    <>
      <div className="flex flex-col items-center text-center p-6 max-w-xs mx-auto border-r-2">
        <div className="w-16 h-16 flex items-center justify-center bg-green-400 rounded-full mb-4">
          <FontAwesomeIcon icon={faCode} className="text-white text-lg" />
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-2">
          Web Development
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          Modern and mobile-ready website that will help you reach all of your
          marketing.
        </p>
      </div>
      <div className="flex flex-col items-center text-center p-6 max-w-xs mx-auto">
        <div className="w-16 h-16 flex items-center justify-center bg-green-400 rounded-full mb-4">
          <FontAwesomeIcon icon={faReact} className="text-white text-lg" />
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          Web Development
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          Modern and mobile-ready website that will help you reach all of your
          marketing.
        </p>
      </div>
    </>
  );
}
