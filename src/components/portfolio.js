"use client";
import {motion} from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { useEffect, useState } from "react";

const RecentProjects = () => {
  const [meteors, setMeteors] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    generateMeteors();
    const interval = setInterval(generateMeteors, 8000);
    return () => clearInterval(interval);
  }, []);

  const generateMeteors = () => {
    const numberOfMeteors = 3;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: Date.now() + i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: Math.random() * 2 + 3,
      });
    }
    setMeteors(newMeteors);
    setTimeout(() => setMeteors([]), 5000);
  };

  // Show only first 6 projects initially
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div id="projects" className="py-0 md:py-4 w-full mx-auto text-center relative overflow-hidden px-6 md:px-8 lg:px-12">
      {/* Falling Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            position: "absolute",
            top: "-10%",
            left: `${meteor.left}%`,
            width: "2px",
            height: "100px",
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
            animation: "meteor linear forwards",
            zIndex: 1,
          }}
        />
      ))}

      <motion.h5 
        initial={{y:"10px",opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true, amount:0.1}}
        transition={{delay:0.1,duration:0.2}}
      className="uppercase text-[#BEC1DD] mb-2 relative z-10">my work</motion.h5>
      <motion.h1 
        initial={{y:"15px",opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true, amount:0.1}}
        transition={{delay:0.2,duration:0.2}}
      className="text-[#e4ecff] text-lg md:text-3xl  uppercase mx-auto w-[96%] md:w-full relative z-10">
        A small selection of <br />
        <span className="text-purple-400">recent projects</span>
      </motion.h1>
      <motion.div 
        initial={{opacity:0}}
        whileInView={{ opacity:1}}
        viewport={{once:true, amount:0.2}}
        transition={{delay:0.25,duration:0.2}} 
        className="mx-auto w-[110px] h-[1.5px] bg-purple-400 text-center  mt-4  relative z-10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-12 relative z-10 mt-4">
        {displayedProjects.map(({id, description, title, image, demo, github, technologies, tools, lighthouse, optimizations}) => (
          <motion.div
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true, amount:0.2}}
            transition={{delay:id * 0.1, duration:0.5}}
            className="h-[35rem] lg:h-[32.5rem] flex items-center justify-center sm:w-96 w-[85vw] mx-auto"
            key={id}
          >
            <PinContainer href={demo} title={`Visit ${title}`}>
              {/* Project Image */}
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[22vh] lg:h-[28vh] rounded-xl group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#13162D] z-10  " />
                <Image
                  src={image}
                  alt={`${title} project screenshot`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold flex items-center gap-2">
                    View Project <FaExternalLinkAlt className="text-purple-400" />
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-5 space-y-4">
                <h1 className="font-bold text-2xl text-[#e4ecff] capitalize hover:text-purple-400 transition-colors">
                  {title}
                </h1>

                <p className="text-base text-[#BEC1DD] leading-relaxed line-clamp-3">
                  {description}
                </p>

                {/* Tech Stack */}
                {technologies && (
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Lighthouse Scores */}
                {lighthouse && lighthouse.performance > 0 && (
                  <div className="flex gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="text-[#BEC1DD]">⚡</span>
                      <span className="text-[#e4ecff]">{lighthouse.performance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[#BEC1DD]">♿</span>
                      <span className="text-[#e4ecff]">{lighthouse.accessibility}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[#BEC1DD]">🔍</span>
                      <span className="text-[#e4ecff]">{lighthouse.seo}</span>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <a 
                    href={demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </a>
                  {github && (
                    <a 
                      href={github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#e4ecff] bg-[#13162D] hover:bg-[#1a1d3a] border border-purple-500/30 rounded-lg transition-all duration-300"
                    >
                      <FaGithub size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>

      {/* Show More/Less Button */}
      {projects.length > 6 && (
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true, amount:0.2}}
          transition={{delay:0.3, duration:0.5}}
          className="mt-8 relative z-10"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 text-base font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
          >
            {showAll ? "Show Less" : `Show More Projects (${projects.length - 6} more)`}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default RecentProjects;