"use client"
import { motion } from "motion/react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import ContactForm from "./proform";
import Image from "next/image"

const Footer = () => {
return (
<>
<section id="contact"   className="relative w-full pt-40  px-6 md:px-0 mx-auto text-center ">
  <div className=" w-full absolute left-0 h-[90vh] bottom-0 md:-bottom-40 md:min-h-[100vh] bg-[transparent]">
   <Image 
   src="/images/footerimage.jpg" 
   alt="footer background image"
   className="h-full w-full object-cover object-center  md:opacity-5 opacity-10"
   fill
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
  {/* {contact form} */}
  <ContactForm/>
{/* {contact form} */}

</div>

 
</div>

  <div className="footer w-full  py-8 border-t-[0.05rem] border-[grey]  mt-32 mx-auto text-center">
    <div className="footer-copy-right px-3 w-full">
    <div className="icons flex items-center gap-4 justify-center">
      <a href="mailto:idrismutolib5@gmail.com" className="hover:transform hover:translate-y-[-4px] transition duration-500 z-20"><MdOutlineEmail className="text-purple-400 uppercase pb-2 text-3xl"/></a>
     <a href="https://github.com/drspine1" target="_blank" className="hover:transform hover:translate-y-[-4px] transition duration-500 z-20"> <FaGithub className="text-purple-400 uppercase pb-2 text-3xl"/></a>
    </div>
        <small className="text-[#C1C2D3] text-sm pt-4 block">&copy; <span>Idris mutolib</span> Projects.All rights reserved </small>
       </div> 
    </div>
</section>
</>
);
}

export default Footer;