"use client";
import {motion} from "motion/react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image"
const RecentProjects = () => {
  return (
    <div id="projects" className="py-20 w-full mx-auto text-center mt-30">
      <motion.h5 
        initial={{y:"10px",opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true, amount:0.1}}
        transition={{delay:0.1,duration:0.2}}
      className="uppercase text-[#BEC1DD] mb-2">my work</motion.h5>
      <motion.h1 
        initial={{y:"15px",opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true, amount:0.1}}
        transition={{delay:0.2,duration:0.2}}
      className="text-[#e4ecff] text-lg md:text-3xl pb-2 uppercase mx-auto w-[96%]  md:w-full">
        A small selection of{" "}
        <span className="text-purple-400">recent projects</span>
      </motion.h1>
       <motion.div 
         initial={{opacity:0}}
        whileInView={{ opacity:1}}
        viewport={{once:true, amount:0.2}}
        transition={{delay:0.25,duration:0.2}} 

       className="mx-auto w-[110px] h-[1.5px] bg-purple-400 text-center mb-8"></motion.div>
      <div className="flex flex-wrap items-center justify-center  gap-20 md:16">
        {projects.map(({id,description,title,image,demo}) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={id}
          >
            <PinContainer
              href={demo}
              title={title}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                 
                </div>           
                <Image
                  src={image}
                  alt="cover"
                  fill
                  className="z-10 absolute bottom-0 opacity-80"
                />
              </div>

             <div className="p-4">
               <h1 className="font-bold text-2xl   line-clamp-1  text-[#C1C2D3] capitalize">
                {title}
              </h1>

              <p
                className="text-xl lg:font-normal font-light  line-clamp-4"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {description}
              </p>
                 <a 
                href={demo} target="_blank" 
                className=" mx-auto flex items-center gap-1 p-2  mt-6 text-center w-[150px] h-[50px] text-sm text-[#e4ecff] font-bold bg-[#000319] hover:bg-[#1a1a2e] border border-[#e4ecff]">
                  <p className="flex  md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaArrowUpRightFromSquare className="ms-1" color="#CBACF9" />
                </a>
             </div>
              
                

              
             
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;