"use client"
import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";
const AboutPage = () => {
  return ( 
    <>
  <section id="about" 
  >
      <div className="w-full mt-10 md:mt-20 mx-auto flex flex-col items-center justify-center text-center px-2 sm:px-0 pt-20 pb-10"
   style={{
         background: "rgb(4,7,29)",      
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}>
          <motion.h5  
        initial={{scaleZ:0.5,opacity:0}}
        whileInView={{scaleZ:1, opacity:1}}
        viewport={{once:true, amount:0.4}}
        transition={{delay:0.2,duration:0.4}}
         className="uppercase text-[#BEC1DD] mb-2">get to know</motion.h5>
          <motion.h2 
            initial={{scaleZ:0.5,opacity:0}}
            whileInView={{scaleZ:1, opacity:1}}
            viewport={{once:true, amount:0.4}}
            transition={{delay:0.4,duration:0.4}}
       className="text-[#e4ecff] text-lg md:text-3xl pb-2 uppercase" >About {" "} <span className="text-purple-400">me</span></motion.h2>
         <motion.div className="mx-auto w-[110px] h-[1.5px] bg-purple-400 text-center mb-8"></motion.div>
          <p  className=" text-lg  md:w-full  max-w-[90%] text-[#BEC1DD]">A glimpse into my work and values, where ideas meet clean, and functional code</p>
    <div>
      <BentoGrid className="w-full py-20">
        {
          gridItems.map((item) =>{
             const { id, title, description, className, imgClassName, titleClassName, img, spareImg } = item;
             return <BentoGridItem
             key={id}
             id={id}
             className={className}
              title={title}
              description={description}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              img={img}
              spareImg={spareImg}
             />
          } 
          )
        }
      </BentoGrid>
    </div>
      </div>
  </section>
    </>
   );
}
 
export default AboutPage;