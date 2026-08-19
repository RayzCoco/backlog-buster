import { Menu } from "lucide-react";

interface HeaderProps {
  setIsSidebarOpen: () => void;
}

export default function Header(props: HeaderProps) {
  return (
    <header className="absolute md:relative top-0 left-0 right-0 h-16 bg-[#1E1E1E] border-b border-slate-800 flex items-center px-4 z-20">
      <button
        className="p-2 text-slate-400 hover:text-white focus:outline-none md:hidden"
        type="button"
        onClick={props.setIsSidebarOpen}
      >
        <Menu />
      </button>
      <div className="flex justify-between flex-1 items-center">
        <span className="ml-4 font-bold text-lightGreen text-2xl">
          Backlog Buster
        </span>
        <div className="flex divide-x divide-gray-300 items-center">
          <div className="flex flex-col pr-4 mr-4">
            <span className="text-justGreen">Welcome back, Nico.</span>
            <p className="text-[#85967C] text-xs">Library Synced: 4 mins ago</p>
          </div>
          <span>account image/link</span>
        </div>
      </div>
    </header>
  );
}
