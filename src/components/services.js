"use client";
import { services } from "@/data";
import { Button } from "./ui/moving-border";
import { motion } from "motion/react";

const Services = () => {
  return ( 
    <>
<section id="service" className=" mt-40 mx-auto w-full px-6 md:px-10 lg:px-20 text-center">
  <motion.h1
        initial={{y:"15px",opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true, amount:0.2}}
        transition={{delay:0.2,duration:0.2}}
  className="text-[#e4ecff] text-2xl md:text-3xl pb-2 uppercase">my {''} <span className="text-purple-400">expertise</span></motion.h1>
  <motion.div 
  initial= {{opacity:0}}
    whileInView={{ opacity:1}}
        viewport={{once:true, amount:0.2}}
        transition={{delay:0.23,duration:0.2}}
  className="mx-auto w-[110px] h-[1.5px] bg-purple-400 text-center mb-8"></motion.div>
  <div className="services-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-5">
       {
        services.map((sercice) =>{
          const {id,title,description} = sercice;
          return <Button
          key={id}
          className={'px-4 py-6'}
          duration={Math.floor(Math.random()*10000) +10000}
           style={{
              
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
             
              borderRadius: `calc(0.5rem* 0.96)`,
            }}
          > 
           <div>
           <h2 className="text-white capitalize font-medium pb-4 text-xl md:text-2xl">{title}</h2>
           <p className="text-[#C1C2D3] text-lg">{description}</p>
           </div>

            </Button>
        })
       }
         </div>
    </section>
    </>
   );
}
 
export default Services;