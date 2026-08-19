"use client";

import {
  ChartNoAxesCombined,
  Kanban,
  LayoutDashboard,
  Settings,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isSideBarOpen: boolean;
  setIsSidebarOpen: () => void;
}

interface LinkList {
  id: number;
  title: string;
  link: string;
  icon: React.ReactElement;
}

const LINK_LIST: LinkList[] = [
  {
    id: 0,
    title: "Dashboard",
    link: "/dashboard",
    icon: <LayoutDashboard className="mr-2 text-lightGreen" />,
  },
  {
    id: 1,
    title: "Kanban Board",
    link: "/board",
    icon: <Kanban className="mr-2 text-lightGreen" />,
  },
  {
    id: 2,
    title: "Deep Analytics",
    link: "/analytics",
    icon: <ChartNoAxesCombined className="mr-2 text-lightGreen" />,
  },
  {
    id: 3,
    title: "Settings",
    link: "/settings",
    icon: <Settings className="mr-2 text-lightGreen" />,
  },
];

export default function Sidebar(props: SidebarProps) {
  const pathname = usePathname();
  return (
    <aside
      className={`fixed inset-y-0 left-0 w-64 bg-[#1E1E1E] border-r border-[#3C4B35] py-4 px-2 z-40
        transition-transform duration-300 ease-in-out h-dvh
        md:translate-x-0 md:static md:block ${props.isSideBarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex items-center justify-between mb-12 px-2">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-lightGreen mb-1">
            Backlog Buster
          </h2>
          <p className="text-xs text-justGreen">V.0.0.1 ALPHA</p>
        </div>
        <button
          className="p-1 text-slate-500 hover:text-white md:hidden"
          type="button"
          onClick={props.setIsSidebarOpen}
        >
          <X />
        </button>
      </div>
      <nav className="space-y-2">
        {LINK_LIST.map((list) => {
          const isActive = pathname === list.link;
          return (
            <Link key={list.id} href={list.link}>
              <div
                className={`flex items-center hover:bg-[#57367F]/10 cursor-pointer px-2 py-4 ${isActive ? "bg-[#57367F]/20 border-r-2 border-r-lightGreen" : ""}`}
              >
                {list.icon}
                <p className="text-sm rounded font-bold text-lightGreen">
                  {list.title}
                </p>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
