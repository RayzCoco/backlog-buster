"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar
          isSideBarOpen={isSidebarOpen}
          setIsSidebarOpen={() => setIsSidebarOpen(false)}
        />
        <div className="flex flex-col flex-1 min-w-0">
          <Header setIsSidebarOpen={() => setIsSidebarOpen(true)} />
          {children}
        </div>
      </div>
      {isSidebarOpen && (
        <button
          className="fixed inset-0 bg-black/60 z-30 md:hidden cursor-default focus:outline-none"
          type="button"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}
