"use client";
import { useState, useEffect } from "react";

export default function AppLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading or hook into router events here
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center "
      style={{
         background: "rgb(4,7,29)",      
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
      >
        <div className="animate-spin rounded-full md:h-16 md:w-16 w-8 h-8 border-t-4 border-b-4 border-purple-400"></div>
        <span className="ml-4 text-white text-lg font-semibold">
          Loading…
        </span>
      </div>
    );
  }

  return children;
}
