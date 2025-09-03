"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

export function MyApproach() {
  return (
    <>
      <div className="services  mt-20 mx-auto w-full  px-2 lg:px-20 text-center">
        
  <motion.p 
    initial={{y:"10px",opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true, amount:0.2}}
        transition={{delay:0.2,duration:0.4}}
  className="text-purple-400  text-xl pb-2 uppercase ">My Approach, <br /><motion.span 
   
        transition={{delay:0.4,duration:0.4}}
  className="text-[#BEC1DD] lowercase text-lg" >is to collaborate closely, communicate openly, and deliver with continuous improvement.</motion.span></motion.p>
    {/* <div className="mx-auto w-[110px] h-[1.5px] bg-purple-400 text-center mb-8"></div> */}
         <div
        className="pt-10 flex flex-col lg:flex-row items-center   justify-center  w-full gap-4 mx-auto px-8">
        <Card title="Plan & Align" icon={<AceternityIcon order={"step 1"}/>} desc={" Gather requirements, clarify scope, set milestones, and agree on deliverables with the client."}>
          <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900 rounded-3xl overflow-hidden" />
        </Card>
        <Card title="Build & Iterate" icon={<AceternityIcon order={"step 2"}/>} desc={"Develop features in phases, share progress regularly, and refine based on client feedback."}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900"
            colors={[
           [255, 166, 158],
            [221, 255, 247],
          ]}
            dotSize={2} />
          {/* Radial gradient for the cute fade */}
         
        </Card>
        <Card title="Test & Deliver" icon={<AceternityIcon order={"step 3"}/>} desc={" Ensure quality with testing, fix issues, optimize performance, then deploy and hand over with documentation"}>
          <CanvasRevealEffect
             animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
           
              />
        </Card>
      </div>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  desc
}) => {
  const [hovered, setHovered] = React.useState(false);
  const toggleHover = () => setHovered((prev) => !prev);
  return (
    <div
      
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
       onClick={toggleHover}
     
      className="border  group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4  h-[20rem] relative rounded-3xl"
       style={{
              
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
             
             
            }}
      >
      <Icon className="absolute h-10 w-10 opacity-30 -top-3 -left-3 text-white" />
      <Icon className="absolute h-10 w-10 opacity-30 -bottom-3 -left-3  text-white" />
      <Icon className="absolute h-10 w-10 opacity-30 -top-3 -right-3 text-white" />
      <Icon
        className="absolute h-10 w-10 opacity-30 -bottom-3 -right-3  text-white" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div
  className={cn(
    "text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center text-[#e4ecff] transition duration-200",
    hovered ? "opacity-0 -translate-y-4" : "opacity-100"
  )}
>
  {icon}
</div>

    
        <h2
  className={cn(
    "dark:text-white text-xl relative z-10 mt-4 font-bold transition duration-200",
    hovered
      ? "opacity-100 -translate-y-4 text-white"
      : "opacity-0 text-[#e4ecff]"
  )}
>
  {title}
</h2>

<p
  className={cn(
    "dark:text-white text-lg relative z-10 mt-4 transition duration-200",
    hovered
      ? "opacity-100 -translate-y-4 text-[#BEC1DD]"
      : "opacity-0"
  )}
>
  {desc}
</p>

      </div>
    </div>
  );
};

const AceternityIcon = ({order}) => {
  return (<>
   <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  
  </>)
};



export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

