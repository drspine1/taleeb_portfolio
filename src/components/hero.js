"use client";
import { Spotlight } from "./ui/spotlight";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import { motion } from "motion/react";

export const HomePage = () => {
  return ( 
  <>
  <div id="home" className="hero-section pb-20 pt-36 h-screen relative w-full">
  <div>
      <Spotlight className="top-[50%] left-[50%] md:-left-32 md:-top-20 h-screen" fill="white"/>
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
     <Spotlight className="top-28 left-80  h-[80vh] w-[50vw]" fill="blue"/>
  </div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[90%] md:w-[70%] lg:w-[60%] flex flex-col items-center justify-center">
   <h2 className="text-[#e4ecff] tracking-widest text-xs uppercase text-center z-10">Crafting dynamic web applications with Next.js</h2>
   <TextGenerateEffect
   className="text-[25px] md:text-[40px]  text-[#e4ecff] font-bold z-10"
   words="Transforming code into captivating experiences and seamless interactions"
   />
   <p className="text-[#e4ecff] text-sm w-[100%] tracking-wider z-10"> I&apos;m Idris Mutolib, a Proficient Frontend Developer</p>
  <motion.div
    initial={{scale:0.7,opacity:0}}
    whileInView={{scale:1, opacity:1}}
    viewport={{once:true, amount:0.4}}
    transition={{delay:0.2,duration:0.4}}
  >
   <a  href="#about"
              
              className="mt-5 inline-block">
                
              <motion.button 
                initial={{scaleZ:0.7,opacity:0}}
                  whileInView={{scaleZ:0, opacity:1}}    
                  viewport={{once:true, amount:0.2}}
                  transition={{delay:0.2,duration:0.4}}
              className="relative inline-flex overflow-hidden rounded-lg p-[1px] ">
                  <span
                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
                   bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                  />
                  <span
                    className="inline-flex h-full w-full cursor-pointer items-center 
                  justify-center rounded-lg bg-slate-950 px-5 py-2 text-[#BEC1DD] backdrop-blur-3xl  text-lg hover:border-[#1a1a2e] transition-all duration-300 z-10 hover:bg-[#1a1a2e]  font-bold"
                  >View my work</span>
                </motion.button>
            </a>
  </motion.div>
  </div>
  </div>
  </> 
  );
}