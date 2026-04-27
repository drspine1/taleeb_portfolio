"use client"
import { motion, AnimatePresence } from "motion/react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaCopy, FaCheck } from "react-icons/fa";
import ContactForm from "./proform";
import { useState, useRef } from "react";

// Mini confetti burst anchored to a ref element
function burstConfetti(anchorEl) {
  if (!anchorEl) return;
  const rect = anchorEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const colors = ["#a855f7", "#7c3aed", "#e879f9", "#818cf8", "#34d399", "#fbbf24"];
  for (let i = 0; i < 30; i++) {
    const el = document.createElement("div");
    const size = Math.random() * 7 + 4;
    el.style.cssText = `
      position:fixed; pointer-events:none; z-index:9999;
      width:${size}px; height:${size}px;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      border-radius:${Math.random() > 0.5 ? "50%" : "2px"};
      left:${cx}px; top:${cy}px;
    `;
    document.body.appendChild(el);
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 5 + 3;
    const vx = Math.cos(angle) * speed;
    const vy = -(Math.random() * 7 + 3);
    let x = 0, y = 0, opacity = 1;
    const tick = () => {
      x += vx * 0.7;
      y += vy + (y * 0.05);
      opacity -= 0.025;
      el.style.transform = `translate(${x}px,${y}px) rotate(${x * 4}deg)`;
      el.style.opacity = opacity;
      if (opacity > 0) requestAnimationFrame(tick);
      else el.remove();
    };
    setTimeout(() => requestAnimationFrame(tick), Math.random() * 200);
  }
}

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const btnRef = useRef(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("idrismutolib5@gmail.com");
    setCopied(true);
    burstConfetti(btnRef.current);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section id="contact" className="relative w-full pt-20 mx-auto text-center">

        {/* Header */}
        <div className="flex flex-col items-center justify-center md:mx-auto max-w-3xl relative z-10 mb-0 px-6 md:px-0">
          <motion.h5
            initial={{ y: "8px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="uppercase text-[#BEC1DD] mb-2 text-sm"
          >
            get in touch
          </motion.h5>
          <motion.h2
            initial={{ y: "10px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.23, duration: 0.2 }}
            className="text-[#e4ecff] text-lg md:text-3xl pb-2 uppercase"
          >
            contact{" "}<span className="text-purple-400">me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.25, duration: 0.2 }}
            className="mx-auto w-[110px] h-[1.5px] bg-purple-400 text-center mb-6"
          />
          <motion.p
            initial={{ y: "15px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            className="text-lg w-full text-[#BEC1DD] mb-8"
          >
            I&apos;m currently looking for new opportunities. I&apos;m open to discussing web development
            projects (frontend) and collaborations. Let&apos;s connect and create something amazing together!
          </motion.p>
        </div>

        {/* Line grid background + form */}
        <div className="relative w-full overflow-hidden" style={{ minHeight: "420px" }}>

          {/* CSS line grid background — centered */}
          <div
            className="absolute inset-0 z-0"
            aria-hidden="true"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              backgroundPosition: "center center",
              maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)",
            }}
          />
          {/* Subtle purple glow in the center */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(139,92,246,0.07),transparent)]" />

          {/* Form card */}
          <div className="relative z-10 flex justify-center px-6 md:px-0 py-16">
            <div className="w-full max-w-2xl bg-[#0d0f1e]/80 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 md:p-10 shadow-2xl shadow-purple-900/20">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer w-full py-8 border-t-[0.05rem] border-[grey] mx-auto text-center relative z-10">
          <div className="footer-copy-right px-3 w-full">
            <div className="icons flex items-center gap-4 justify-center">
              <a href="mailto:idrismutolib5@gmail.com" className="hover:transform hover:translate-y-[-4px] transition duration-500 z-20">
                <MdOutlineEmail className="text-purple-400 uppercase pb-2 text-3xl" />
              </a>
              <a href="https://github.com/drspine1" target="_blank" rel="noopener noreferrer" className="hover:transform hover:translate-y-[-4px] transition duration-500 z-20">
                <FaGithub className="text-purple-400 uppercase pb-2 text-3xl" />
              </a>
              <a href="https://www.linkedin.com/in/idris-mutolib" target="_blank" rel="noopener noreferrer" className="hover:transform hover:translate-y-[-4px] transition duration-500 z-20">
                <FaLinkedin className="text-purple-400 uppercase pb-2 text-3xl" />
              </a>
            </div>

            {/* Copy email button */}
            <button
              ref={btnRef}
              onClick={copyEmail}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 text-sm text-[#BEC1DD] hover:text-white"
            >
              {copied ? (
                <>
                  <FaCheck className="text-green-400 text-xs" />
                  <span className="text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <FaCopy className="text-purple-400 text-xs" />
                  idrismutolib5@gmail.com
                </>
              )}
            </button>
            <small className="text-[#C1C2D3] text-sm pt-4 block">
              &copy; <span>Idris mutolib</span> Projects. All rights reserved
            </small>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
