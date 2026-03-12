"use client";
import { motion } from "motion/react";
import { FaLightbulb, FaPencilRuler, FaCode, FaRocket, FaCheckCircle } from "react-icons/fa";

const Workflow = () => {
  const steps = [
    {
      id: 1,
      icon: <FaLightbulb className="text-4xl" />,
      title: "Discovery & Planning",
      duration: "1-2 Days",
      description: "Understanding your vision, goals, and requirements. We discuss features, timeline, and deliverables.",
      tasks: [
        "Initial consultation call",
        "Requirements gathering",
        "Project scope definition",
        "Timeline & milestone planning"
      ]
    },
    {
      id: 2,
      icon: <FaPencilRuler className="text-4xl" />,
      title: "Design Review",
      duration: "2-3 Days",
      description: "Reviewing designs, creating wireframes, and getting your feedback before development begins.",
      tasks: [
        "Design mockup review",
        "UI/UX feedback session",
        "Component planning",
        "Final design approval"
      ]
    },
    {
      id: 3,
      icon: <FaCode className="text-4xl" />,
      title: "Development & Testing",
      duration: "1-3 Weeks",
      description: "Building your project with clean code, regular updates, and thorough testing at every stage.",
      tasks: [
        "Component development",
        "API integration",
        "Responsive implementation",
        "Cross-browser testing",
        "Performance optimization"
      ]
    },
    {
      id: 4,
      icon: <FaRocket className="text-4xl" />,
      title: "Deployment",
      duration: "1 Day",
      description: "Launching your project to production with proper configuration and monitoring setup.",
      tasks: [
        "Production build optimization",
        "Domain & hosting setup",
        "SSL certificate configuration",
        "Final testing on live server"
      ]
    },
    {
      id: 5,
      icon: <FaCheckCircle className="text-4xl" />,
      title: "Handoff & Support",
      duration: "Ongoing",
      description: "Providing documentation, training, and post-launch support to ensure smooth operation.",
      tasks: [
        "Code documentation",
        "Admin training (if needed)",
        "30-day bug fix guarantee",
        "Maintenance support available"
      ]
    }
  ];

  return (
    <section id="workflow" className="py-20 w-full mx-auto px-6 md:px-8 lg:px-12 text-center">
      <motion.h5
        initial={{ y: "10px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1, duration: 0.2 }}
        className="uppercase text-[#BEC1DD] mb-2"
      >
        How I Work
      </motion.h5>

      <motion.h2
        initial={{ y: "15px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        className="text-[#e4ecff] text-2xl md:text-3xl pb-2 uppercase"
      >
        My Development{" "}
        <span className="text-purple-400">Workflow</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.25, duration: 0.2 }}
        className="mx-auto w-[110px] h-[1.5px] bg-purple-400 text-center mb-8"
      />

      <motion.p
        initial={{ y: "15px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.3, duration: 0.2 }}
        className="text-lg max-w-3xl mx-auto text-[#BEC1DD] mb-16"
      >
        A transparent, collaborative process that ensures your project is delivered on time, within budget, and exceeds expectations.
      </motion.p>

      <div className="max-w-5xl mx-auto space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative"
          >
            <div className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl bg-gradient-to-r from-[#0a0f2c] to-[#13162D] border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              {/* Step Number & Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 border-2 border-purple-500/50">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm font-bold">
                    {step.id}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-bold text-[#e4ecff]">
                    {step.title}
                  </h3>
                  <span className="text-purple-400 font-semibold text-sm md:text-base mt-1 md:mt-0">
                    {step.duration}
                  </span>
                </div>

                <p className="text-[#BEC1DD] mb-4 leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.tasks.map((task, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-[#BEC1DD]"
                    >
                      <span className="text-purple-400 mt-1">✓</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className=" absolute left-10 top-full w-0.5 h-8 bg-gradient-to-b from-purple-500/50 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-10"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
        >
          Start Your Project
        </a>
      </motion.div>
    </section>
  );
};

export default Workflow;
