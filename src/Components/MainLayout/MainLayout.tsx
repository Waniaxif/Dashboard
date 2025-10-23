"use client";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Loader from "../Loader/Loader"; // 👈 import loader

type Props = { children: React.ReactNode };

export default function MainLayout({ children }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., fetching data or layout setup)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust delay as needed (1000 = 1 second)

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; // 👈 show loader until ready

  return (
    <div className="min-h-screen flex">
      <div>
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col bg-gray-200">
        <Header />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
