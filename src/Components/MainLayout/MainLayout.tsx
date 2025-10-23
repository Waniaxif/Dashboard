"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Loader from "../Loader/Loader";

type Props = { children: React.ReactNode };

export default function MainLayout({ children }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // simulate 1 second load
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-200">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full"
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex w-full"
          >
            <div>
              <Sidebar />
            </div>

            <div
              style={{ paddingLeft: 70 }}
              className="flex-1 flex flex-col bg-gray-200"
            >
              <Header />
              <main className="flex-1 overflow-auto">{children}</main>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
