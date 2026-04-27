"use client";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "React Specialist",
  "UI Engineer",
  "Next.js Developer",
  "Web Performance Nerd",
];

export const HomePage = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div id="home" className="hero-section pt-36 h-screen relative w-full bg-opacity-20 z-50">
        <div>
          <Spotlight className="top-[50%] left-[50%] md:-left-32 md:-top-20 h-screen" fill="white" />
          <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[90%] md:w-[70%] lg:w-[60%] flex flex-col items-center justify-center">

          {/* Available for hire badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 mb-5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-green-400 text-xs font-medium tracking-wide">Available for hire</span>
          </motion.div>

          <h2 className="text-[#e4ecff] tracking-widest text-xs uppercase text-center z-10">
            Crafting dynamic web applications with Next.js
          </h2>

          <TextGenerateEffect
            className="text-[25px] md:text-[40px] text-[#e4ecff] font-bold z-10"
            words="Transforming code into captivating experiences and seamless interactions"
          />

          {/* Fixed hero description + typed role rotator */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="text-[#e4ecff] text-sm w-full tracking-wider z-10 flex items-center justify-center gap-2 flex-wrap"
          >
            I&apos;m Idris Mutolib — 3+ years building production React apps.
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[#BEC1DD]">Currently:</span>
              <span className="relative inline-block overflow-hidden h-[1.3em] w-[200px] text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="absolute left-0 text-purple-400 font-semibold whitespace-nowrap"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </motion.p>

          {/* CTA button */}
          <motion.a
            href="#projects"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="relative inline-flex overflow-hidden rounded-lg p-[1px] cursor-pointer mt-6"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-5 py-2 text-[#BEC1DD] backdrop-blur-3xl text-lg font-bold relative z-10 cursor-pointer hover:text-white transition-colors">
              View my work
            </span>
          </motion.a>

        </div>
      </div>
    </>
  );
};
