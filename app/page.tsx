import Sidebar from "./components/sidebar/Sidebar";
import User from "./components/User";
import ResumeSection from "./components/ResumeSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-300 via-green-400 to-teal-500 p-4 flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center w-full max-w-[1600px]">
        {/* Sidebar trái */}
        <div className="lg:col-span-1 w-full lg:w-auto flex justify-center items-end lg:justify-end">
          <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-[200px]">
            <Sidebar />
          </div>
        </div>

        {/* User Card giữa */}

        <div
          className="lg:col-span-4  relative z-10 w- max-w-[500px] bg-gray-100 rounded-xl shadow-2xl scale-105 
              p-4 sm:p-6 flex items-center justify-center min-h-[50vh] sm:h-[60vh]"
        >
          <User />
        </div>

        {/* Resume Section bên phải */}
        <div className="lg:col-span-7 w-full flex justify-center">
          <div className="bg-white h-[65vh] overflow-y-auto overflow-x-hidden rounded-xl shadow-lg w-full max-w-[900px] p-6">
            <ResumeSection />
          </div>
        </div>
      </div>
    </main>
  );
}
