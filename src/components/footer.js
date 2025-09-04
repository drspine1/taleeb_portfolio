"use client"
import { motion } from "motion/react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
return (
<>
<section id="contact"   className="relative w-full pt-40  mx-auto text-center ">
  <div className=" w-full absolute left-0 h-[90vh] bottom-0 md:-bottom-40 md:min-h-[100vh] bg-[transparent]">
   <img src="/images/footerimage.jpg" alt="footer background image"
   className="h-full w-full object-cover object-center  md:opacity-5 opacity-10"
   />
  </div>
 
<div className="flex flex-col items-center justify-center">
  <div>
<motion.h5 
  initial={{y:"8px",opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true, amount:0.2}}
        transition={{delay:0.2,duration:0.4}}
className="uppercase text-[#BEC1DD] mb-2  text-sm">get in touch</motion.h5>
<motion.h2 
  initial={{y:"10px",opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true, amount:0.2}}
        transition={{delay:0.4,duration:0.4}}
className="text-[#e4ecff] text-lg md:text-3xl pb-2 uppercase">contact {" "} <span className="text-purple-400">me</span> </motion.h2>
<motion.div 
  initial={{opacity:0}}
        whileInView={{ opacity:1}}
        viewport={{once:true, amount:0.2}}
        transition={{delay:0.5,duration:0.4}}
className="mx-auto w-[110px] h-[1.5px] bg-purple-400 text-center mb-8 mr-1.5"></motion.div>
</div>
  <div

>
 <div className=" w-[90%] md:w-full mb-6 max-w-2xl mx-auto p">
  <motion.p 
    initial={{y:"15px",opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true, amount:0.2}}
        transition={{delay:0.2,duration:0.4}}
  className=" text-lg  w-full text-[#BEC1DD]">I&apos;m currently looking for new opportunities. i&apos;m open to discussing web development projects (frontend),and  collaborations. Let&apos;s connect and create something amazing together!
</motion.p>
</div>
<motion.p 
  initial={{y:"15px",opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true, amount:0.2}}
        transition={{delay:0.4,duration:0.4}}
className=" text-sm md:text-lg  w-full   text-[#BEC1DD]"> Feel free to reach out to me via email.</motion.p>
  <a href="mailto:idrismutolib5@gmail.com" className="mt-5 inline-block">
      
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
        justify-center rounded-lg bg-slate-950 px-5 py-2 text-[#BEC1DD] backdrop-blur-3xl font-medium text-lg hover:border-[#1a1a2e] transition-all duration-300 z-10 hover:bg-[#1a1a2e]   "
        >
          Let&apos;s talk
        </span>
      </motion.button>
  </a>

</div>

    <div className="footer w-full border-t-2   py-8 border-[#323032] mt-10">
    <div className="footer-copy-right px-3 w-full">
    <motion.div 
      initial={{opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true, amount:0.2}}
        transition={{delay:0.2,duration:0.4}}
    className="icons flex items-center gap-4 justify-center">
      
      <a href="mailto:idrismutolib5@gmail.com" className="hover:transform hover:translate-y-[4px] transition duration-500"><MdOutlineEmail className="text-purple-400  pb-2 text-3xl hover:transform hover:translate-y-[4px] transition duration-500"/></a>
     <a href="https://github.com/drspine1" target="_blank" className="hover:transform hover:translate-y-[-4px] transition duration-500"> <FaGithub className="text-purple-400 uppercase pb-2 text-3xl"/></a>
    </motion.div>
        <motion.small
          initial={{y:"5px",opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true, amount:0.2}}
        transition={{delay:0.4,duration:0.4}}
        className="text-[#BEC1DD] text-sm md:text-lg pt-4 block">&copy; <span>idris mutolib</span> Portfolio.All rights Reserved </motion.small>
       </div> 
    </div>
</div>
</section>
</>
);
}

export default Footer;