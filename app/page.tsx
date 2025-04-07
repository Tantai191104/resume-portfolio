import AboutCard from "./components/AboutCard";
import Sidebar from "./components/sidebar/Sidebar";
import User from "./components/User";

export default function Home() {
  return (
    <main className="grid grid-cols-12 gap-4 relative mt-[1.2rem]">
      <div className="col-span-2 bg-red-200 p-4 flex flex-col items-end justify-center h-[600px]">
        <Sidebar />
      </div>
      <div className="col-span-4 bg-green-200 p-4 rounded-[3px] h-[600px] flex items-center justify-center">
        <User />  
      </div>
      <div className="col-span-6 border-black/[0.5] border-[0.8px] rounded-[3px] overflow-hidden shadow-[6px 9px 19px -1px rgb(158, 158, 158)]"><AboutCard/></div>
    </main>
  );
}
