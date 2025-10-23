"use client";
import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

type Props = { children: React.ReactNode };

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex ">
      {/* <aside className="hidden md:block w-64 border-r bg-white"> */}
      <div className="">
        <Sidebar />
      </div>
      {/* </aside> */}

      <div className="flex-1 flex flex-col bg-gray-200">
        <Header />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
