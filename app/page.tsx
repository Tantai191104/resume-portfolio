import Sidebar from "./components/sidebar/Sidebar";
import User from "./components/User";

export default function Home() {
  return (
    <main className="grid grid-cols-12 gap-4 relative mt-[1.2rem]">
      <div className="col-span-2 bg-red-200 p-4 flex flex-col items-end justify-center h-[600px]">
        <Sidebar />
      </div>
      <div className="col-span-4 bg-green-200 p-4 rounded-[3px]">
        <User />  
      </div>
      <div className="col-span-6 bg-blue-200 p-4">25%</div>
    </main>
  );
}
