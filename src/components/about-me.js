"use client"
import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";
import Image from "next/image";

const AboutPage = () => {
  return ( 
    <>
  <section id="about">
      <div className="w-full mt-10 md:mt-20 mx-auto flex flex-col items-center justify-center text-center px-2 sm:px-0 pt-20 pb-10"
        style={{
          background: "rgb(4,7,29)",      
          backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}>

        <motion.h5  
          initial={{scaleZ:0.5,opacity:0}}
          whileInView={{scaleZ:1, opacity:1}}
          viewport={{once:true, amount:0.2}}
          transition={{delay:0.2,duration:0.2}}
          className="uppercase text-[#BEC1DD] mb-2">get to know</motion.h5>
        
        <motion.h2 
          initial={{scaleZ:0.5,opacity:0}}
          whileInView={{scaleZ:1, opacity:1}}
          viewport={{once:true, amount:0.2}}
          transition={{delay:0.25,duration:0.2}}
          className="text-[#e4ecff] text-lg md:text-3xl pb-2 uppercase">
          About {" "} <span className="text-purple-400">me</span>
        </motion.h2>
        <motion.div className="mx-auto w-[110px] h-[1.5px] bg-purple-400 text-center mb-8" />
        <p className="text-lg md:w-full max-w-[90%] text-[#BEC1DD] mb-10">A glimpse into my work and values, where ideas meet clean, and functional code</p>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="w-full max-w-2xl mb-10 rounded-2xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-[#0d0f1e] to-[#13162D]"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch">
            {/* Photo */}
            <div className="relative w-full sm:w-48 h-52 sm:h-auto flex-shrink-0">
              <Image
                src="/images/me-1.jpg"
                alt="Idris Mutolib"
                fill
                className="object-cover object-top"
              />
              {/* gradient fade into card */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d0f1e]/70 sm:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0f1e]/60 hidden sm:block" />
            </div>

            {/* Info */}
            <div className="flex-1 p-6 text-left flex flex-col justify-center gap-3">
              <div>
                <h3 className="text-[#e4ecff] text-2xl font-bold">Idris Mutolib</h3>
                <p className="text-purple-400 text-[10px] uppercase tracking-widest font-semibold mt-1">Frontend Developer</p>
              </div>
              <p className="text-[#BEC1DD]/70 text-sm leading-relaxed">
                3+ years building production-grade React & Next.js apps. I care about clean code, fast UIs, and experiences that actually feel good to use.
              </p>
              {/* Stats row */}
              <div className="flex gap-5 pt-1">
                {[
                  { val: "3+", label: "Years exp." },
                  { val: "19", label: "Projects" },
                  { val: "100%", label: "Passion" },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <p className="text-purple-400 font-bold text-lg">{val}</p>
                    <p className="text-[#BEC1DD]/50 text-xs">{label}</p>
                  </div>
                ))}
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {["React", "Next.js", "TypeScript", "Tailwind", "MongoDB"].map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[10px] font-medium rounded-full border border-purple-500/30 bg-purple-900/20 text-purple-300">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <BentoGrid className="w-full py-20">
            {gridItems.map((item) => {
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
              />;
            })}
          </BentoGrid>
        </div>
      </div>
  </section>
    </>
   );
}
 
export default AboutPage;