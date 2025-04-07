import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGamepad, faMusic } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
export default function ServiceCard() {
  return (
    <div className="flex flex-col items-center gap-10">
      {/* Hàng 1 - Viền rõ hơn */}
      <div className="flex flex-row justify-center gap-0 w-full">
        <div className="flex flex-col items-center text-center p-6 max-w-xs w-1/2 border-r border-black/10">
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

        <div className="flex flex-col items-center text-center p-6 max-w-xs w-1/2">
          <div className="w-16 h-16 flex items-center justify-center bg-green-400 rounded-full mb-4">
            <FontAwesomeIcon icon={faReact} className="text-white text-lg" />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            React Projects
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Responsive and interactive user interfaces using React and modern
            tools.
          </p>
        </div>
      </div>

      {/* Hàng 2 - Viền mờ hơn */}
      <div className="flex flex-row justify-center gap-0 w-full">
        <div className="flex flex-col items-center text-center p-6 max-w-xs w-1/2 border-r border-black/5">
          <div className="w-16 h-16 flex items-center justify-center bg-green-400 rounded-full mb-4">
            <FontAwesomeIcon icon={faMusic} className="text-white text-lg" />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Music Writing
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Original music compositions and sound design for media and games.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 max-w-xs w-1/2">
          <div className="w-16 h-16 flex items-center justify-center bg-green-400 rounded-full mb-4">
            <FontAwesomeIcon icon={faGamepad} className="text-white text-lg" />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Game Dev</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Creating fun and engaging games with great gameplay mechanics and
            visuals.
          </p>
        </div>
      </div>
    </div>
  );
}
