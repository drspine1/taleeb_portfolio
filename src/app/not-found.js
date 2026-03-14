"use client";
import Link from "next/link";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#000319] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold text-purple-400 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-[#e4ecff] mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-[#BEC1DD] mb-8 max-w-md mx-auto">
          Oops! The page you&aposre looking for doesn&apost exist. It might have been moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
