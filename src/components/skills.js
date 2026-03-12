"use client";
import { motion } from "motion/react";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiMongodb, SiRedux, SiFramer, SiGreensock } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <FaReact />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
      { name: "JavaScript", icon: <SiJavascript />, level: 90 },
      { name: "TypeScript", icon: <SiTypescript />, level: 75 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95 },
    ]
  },
  {
    category: "Animation & Design",
    items: [
      { name: "Framer Motion", icon: <SiFramer />, level: 85 },
      { name: "GSAP", icon: <SiGreensock />, level: 80 },
      { name: "Figma", icon: <FaFigma />, level: 70 },
    ]
  },
  {
    category: "Backend & Tools",
    items: [
      { name: "Node.js", icon: <FaNodeJs />, level: 70 },
      { name: "MongoDB", icon: <SiMongodb />, level: 75 },
      { name: "Redux", icon: <SiRedux />, level: 80 },
      { name: "Git", icon: <FaGitAlt />, level: 85 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 w-full mx-auto px-6 md:px-10 lg:px-20">
      <motion.h5
        initial={{ y: "10px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1, duration: 0.2 }}
        className="uppercase text-[#BEC1DD] mb-2 text-center"
      >
        my arsenal
      </motion.h5>
      <motion.h2
        initial={{ y: "15px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        className="text-[#e4ecff] text-2xl md:text-3xl pb-2 uppercase text-center"
      >
        Skills & <span className="text-purple-400">Technologies</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.25, duration: 0.2 }}
        className="mx-auto w-[110px] h-[1.5px] bg-purple-400 text-center mb-12"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
            className="bg-[#0a0f2c] border border-purple-500/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-purple-400 mb-6">{skillGroup.category}</h3>
            <div className="space-y-4">
              {skillGroup.items.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl text-purple-400">{skill.icon}</span>
                      <span className="text-[#e4ecff] font-medium">{skill.name}</span>
                    </div>
                    <span className="text-[#BEC1DD] text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#13162D] rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                      className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
