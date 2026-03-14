"use client";
import { useEffect } from "react";
import { motion } from "motion/react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#000319] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <h1 className="text-6xl font-bold text-purple-400 mb-4">Oops!</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#e4ecff] mb-4">
          Something went wrong
        </h2>
        <p className="text-lg text-[#BEC1DD] mb-8">
          We encountered an unexpected error. Don&apost worry, it's not your fault.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
        >
          Try Again
        </button>
      </motion.div>
    </div>
  );
}
