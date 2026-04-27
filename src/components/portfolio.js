"use client";
import { motion, AnimatePresence } from "motion/react";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaSearch, FaTimes, FaLayerGroup, FaDice } from "react-icons/fa";
import { MdGridView, MdViewList } from "react-icons/md";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";

const categoryColors = {
  "React": "bg-blue-900/40 text-blue-300 border-blue-500/30",
  "Next.js": "bg-gray-800/60 text-gray-200 border-gray-500/30",
  "Tailwind": "bg-cyan-900/40 text-cyan-300 border-cyan-500/30",
  "TypeScript": "bg-blue-800/40 text-blue-200 border-blue-400/30",
  "MongoDB": "bg-green-900/40 text-green-300 border-green-500/30",
  "GSAP": "bg-yellow-900/40 text-yellow-300 border-yellow-500/30",
  "Redux Toolkit": "bg-purple-900/40 text-purple-300 border-purple-500/30",
  "default": "bg-purple-900/30 text-purple-300 border-purple-500/30",
};

const getTechColor = (tech) => categoryColors[tech] || categoryColors["default"];

// ── Confetti burst (no library needed) ──────────────────────────────────────
function fireConfetti(container) {
  const colors = ["#a855f7", "#7c3aed", "#e879f9", "#818cf8", "#34d399", "#fbbf24"];
  for (let i = 0; i < 60; i++) {
    const el = document.createElement("div");
    el.style.cssText = `
      position:fixed; pointer-events:none; z-index:9999;
      width:${Math.random() * 8 + 4}px; height:${Math.random() * 8 + 4}px;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      border-radius:${Math.random() > 0.5 ? "50%" : "2px"};
      left:${Math.random() * 100}vw; top:60vh;
      opacity:1;
    `;
    document.body.appendChild(el);
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 8 + 4;
    const vx = Math.cos(angle) * speed;
    const vy = -(Math.random() * 12 + 6);
    let x = 0, y = 0, opacity = 1;
    const tick = () => {
      x += vx * 0.6;
      y += vy + (y * 0.04);
      opacity -= 0.018;
      el.style.transform = `translate(${x}px,${y}px) rotate(${x * 3}deg)`;
      el.style.opacity = opacity;
      if (opacity > 0) requestAnimationFrame(tick);
      else el.remove();
    };
    setTimeout(() => requestAnimationFrame(tick), Math.random() * 300);
  }
}

// ── Animated count-up hook ───────────────────────────────────────────────────
function useCountUp(target, active) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    setCount(0);
    let start = null;
    const duration = 1200;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, active]);
  return count;
}

const RecentProjects = () => {
  const [meteors, setMeteors] = useState([]);
  const [museumOpen, setMuseumOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [activeFilter, setActiveFilter] = useState("All");
  const [highlightId, setHighlightId] = useState(null);
  const [easterEgg, setEasterEgg] = useState(false);
  const museumRef = useRef(null);
  const highlightRef = useRef(null);

  const featuredProjects = projects.slice(0, 6);
  const allTechs = ["All", ...Array.from(new Set(projects.flatMap((p) => p.technologies || [])))];
  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.technologies || []).some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter = activeFilter === "All" || (p.technologies || []).includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  const projectCount = useCountUp(projects.length, museumOpen);  // Easter egg — triggered by visible button now
  useEffect(() => {
    if (!museumOpen) { setEasterEgg(false); }
  }, [museumOpen]);

  useEffect(() => {
    generateMeteors();
    const interval = setInterval(generateMeteors, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (museumOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("museum-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("museum-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("museum-open");
    };
  }, [museumOpen]);

  const generateMeteors = () => {
    const newMeteors = Array.from({ length: 3 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: Math.random() * 2 + 3,
    }));
    setMeteors(newMeteors);
    setTimeout(() => setMeteors([]), 5000);
  };

  const pickRandom = useCallback(() => {
    const pool = filteredProjects.length > 0 ? filteredProjects : projects;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setHighlightId(pick.id);
    setTimeout(() => {
      const card = museumRef.current?.querySelector(`[data-projectid="${pick.id}"]`);
      if (card && museumRef.current) {
        const panelRect = museumRef.current.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const scrollOffset = cardRect.top - panelRect.top - 140;
        museumRef.current.scrollBy({ top: scrollOffset, behavior: "smooth" });
      }
    }, 120);
    setTimeout(() => setHighlightId(null), 2800);
  }, [filteredProjects]);

  const handleCtaClick = (e) => {
    setMuseumOpen(false);
    fireConfetti();
  };

  return (
    <div id="projects" className="py-0 md:py-4 w-full mx-auto text-center relative overflow-visible px-6 md:px-8 lg:px-12">
      {meteors.map((meteor) => (
        <div key={meteor.id} className="meteor" style={{ position:"absolute", top:"-10%", left:`${meteor.left}%`, width:"2px", height:"100px", animationDelay:`${meteor.delay}s`, animationDuration:`${meteor.duration}s`, animation:"meteor linear forwards", zIndex:1 }} />
      ))}

      <motion.h5 initial={{y:"10px",opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true,amount:0.1}} transition={{delay:0.1,duration:0.2}} className="uppercase text-[#BEC1DD] mb-2 relative z-10">my work</motion.h5>
      <motion.h1 initial={{y:"15px",opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true,amount:0.1}} transition={{delay:0.2,duration:0.2}} className="text-[#e4ecff] text-lg md:text-3xl uppercase mx-auto w-[96%] md:w-full relative z-10">
        A small selection of <br /><span className="text-purple-400">recent projects</span>
      </motion.h1>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true,amount:0.2}} transition={{delay:0.25,duration:0.2}} className="mx-auto w-[110px] h-[1.5px] bg-purple-400 text-center mt-4 relative z-10" />

      {/* Featured 6 — same compact card pattern as museum */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10 mt-6">
        {featuredProjects.map(({ id, description, title, image, demo, github, technologies, lighthouse }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: id * 0.08, duration: 0.4 }}
            className="group relative bg-[#0d0f1e] border border-purple-500/10 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image src={image} alt={`${title} project screenshot`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f1e] via-[#0d0f1e]/20 to-transparent" />
              <div className="absolute inset-0 bg-purple-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href={demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-600 rounded-full hover:bg-purple-500 transition-colors">
                  <FaExternalLinkAlt size={14} className="text-white" />
                </a>
                {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#13162D] rounded-full hover:bg-[#1a1d3a] border border-purple-500/30 transition-colors">
                    <FaGithub size={14} className="text-white" />
                  </a>
                )}
              </div>
            </div>
            {/* Content */}
            <div className="p-4 space-y-3">
              <h3 className="font-bold text-[#e4ecff] text-base group-hover:text-purple-300 transition-colors">{title}</h3>
              <p className="text-[#BEC1DD]/70 text-xs leading-relaxed line-clamp-2">{description}</p>
              {technologies && (
                <div className="flex flex-wrap gap-1.5">
                  {technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className={`px-2 py-0.5 text-[10px] font-medium rounded-full border ${getTechColor(tech)}`}>{tech}</span>
                  ))}
                  {technologies.length > 4 && <span className="px-2 py-0.5 text-[10px] text-[#BEC1DD]/50 rounded-full border border-purple-500/10">+{technologies.length - 4}</span>}
                </div>
              )}
              {lighthouse && lighthouse.performance > 0 && (
                <div className="flex gap-3 pt-1 border-t border-purple-500/10">
                  {[{icon:"⚡",label:"Perf",val:lighthouse.performance},{icon:"♿",label:"A11y",val:lighthouse.accessibility},{icon:"🔍",label:"SEO",val:lighthouse.seo}].map(({icon,label,val}) => (
                    <div key={label} className="flex items-center gap-1 text-xs">
                      <span>{icon}</span>
                      <span className="text-[#BEC1DD]/50">{label}</span>
                      <span className={`font-semibold ${val>=95?"text-green-400":val>=90?"text-yellow-400":"text-orange-400"}`}>{val}</span>
                    </div>
                  ))}
                </div>
              )}
              {/* Mobile only — text buttons */}
              <div className="flex gap-2 pt-1 sm:hidden">
                <a href={demo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300">
                  Live Demo
                </a>
                {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-[#e4ecff] bg-[#13162D] border border-purple-500/30 rounded-lg transition-all duration-300">
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Open Museum button */}
      {projects.length > 6 && (
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.2}} transition={{delay:0.3,duration:0.5}} className="mt-12 relative z-10">
          <div className="flex items-center gap-4 mb-8 max-w-xl mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-500/50" />
            <span className="text-purple-400/60 text-xs uppercase tracking-widest">there&apos;s more</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>
          <button onClick={() => setMuseumOpen(true)} className="group relative inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white overflow-hidden rounded-2xl border border-purple-500/40 bg-[#0d0f1e] hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-900/0 via-purple-700/20 to-purple-900/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <FaLayerGroup className="text-purple-400 text-xl relative z-10" />
            <span className="relative z-10">Explore My Project Museum</span>
            <FaChevronDown className="text-purple-400 text-sm relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
            <span className="relative z-10 ml-1 px-2 py-0.5 text-xs bg-purple-600/40 text-purple-200 rounded-full border border-purple-500/30">{projects.length} projects</span>
          </button>
          <p className="text-[#BEC1DD]/50 text-xs mt-3">Browse all projects with search &amp; filters</p>
        </motion.div>
      )}

      {/* ── MUSEUM OVERLAY ── */}
      <AnimatePresence>
        {museumOpen && (
          <>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3}} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[998]" onClick={() => setMuseumOpen(false)} />

            <motion.div ref={museumRef} initial={{y:"-100%",opacity:0}} animate={{y:0,opacity:1}} exit={{y:"-100%",opacity:0}} transition={{type:"spring",damping:28,stiffness:260}} className="fixed top-0 left-0 right-0 z-[999] h-[92vh] bg-[#080a14] border-b border-purple-500/20 shadow-2xl shadow-purple-900/30 overflow-y-auto">

              {/* Easter egg overlay */}
              <AnimatePresence>
                {easterEgg && (
                  <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.8}} className="fixed inset-0 z-[1000] flex items-center justify-center pointer-events-none">
                    <div className="bg-[#0d0f1e] border border-purple-500/40 rounded-2xl px-10 py-8 text-center shadow-2xl shadow-purple-900/50">
                      <div className="text-5xl mb-3">👀</div>
                      <p className="text-[#e4ecff] text-xl font-bold">Already thinking about it?</p>
                      <p className="text-purple-400 text-sm mt-2">Let&apos;s make it official — hit that contact button.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Sticky header */}
              <div className="sticky top-0 z-10 px-6 md:px-10 pt-4 pb-3 bg-[#080a14]/95 backdrop-blur-sm border-b border-purple-500/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

                {/* Count ticker removed */}

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-purple-600/20 border border-purple-500/30">
                      <FaLayerGroup className="text-purple-400 text-lg" />
                    </div>
                    <h2 className="text-[#e4ecff] text-base md:text-xl font-bold tracking-tight">Project Museum</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Easter egg — visible button */}
                    <button
                      onClick={() => { setEasterEgg(true); setTimeout(() => setEasterEgg(false), 4000); }}
                      title="🕹️ Secret"
                      className="p-2.5 rounded-xl bg-[#13162D] hover:bg-yellow-500/10 border border-purple-500/20 hover:border-yellow-500/40 text-[#BEC1DD]/40 hover:text-yellow-400 transition-all duration-200 text-sm"
                    >
                      🕹️
                    </button>
                    {/* Random dice */}
                    <button onClick={pickRandom} title="Surprise me!" className="p-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 text-purple-400 hover:text-white transition-all duration-200 group">
                      <FaDice size={16} className="group-hover:rotate-180 transition-transform duration-500" />
                    </button>
                    <button onClick={() => setMuseumOpen(false)} className="p-2.5 rounded-xl bg-[#13162D] hover:bg-purple-900/30 border border-purple-500/20 text-[#BEC1DD] hover:text-white transition-all duration-200">
                      <FaTimes size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-6 md:px-10 pt-5 pb-10">
                {/* Welcome — premium author card */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="mb-5 rounded-2xl bg-gradient-to-r from-purple-900/20 to-[#0d0f1e] border border-purple-500/20 overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-0">
                    {/* Author image */}
                    <div className="relative w-full sm:w-40 h-40 sm:h-auto flex-shrink-0">
                      <Image
                        src="/images/me-1.jpg"
                        alt="Idris Mutolib"
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0f1e]/60 hidden sm:block" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f1e]/80 to-transparent sm:hidden" />
                    </div>
                    {/* Text */}
                    <div className="flex-1 px-5 py-4 flex flex-col justify-center text-left">
                      <p className="text-purple-400 text-[10px] uppercase tracking-widest font-semibold mb-1">Curator & Author</p>
                      <h3 className="text-[#e4ecff] text-lg font-bold mb-1">Idris Mutolib</h3>
                      <p className="text-[#BEC1DD]/60 text-xs mb-3">Frontend Developer · 3+ years · 19 projects shipped</p>
                      <p className="text-[#BEC1DD]/80 text-sm leading-relaxed">
                        Every project here was built with real intent — late nights, real clients, real problems solved.
                        Explore freely, click the live demos, and if something catches your eye,{" "}
                        <a href="#contact" onClick={() => setMuseumOpen(false)} className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors">
                          let&apos;s talk.
                        </a>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Search + view toggle */}
                <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center mb-3">
                  <div className="relative flex-1">
                    <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400/60 text-sm" />
                    <input type="text" placeholder="Search projects, tech, keywords..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2.5 bg-[#13162D] border border-purple-500/20 rounded-xl text-[#e4ecff] placeholder-[#BEC1DD]/40 text-sm focus:outline-none focus:border-purple-500/60 transition-colors" />
                    {searchQuery && <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#BEC1DD]/50 hover:text-white"><FaTimes size={12} /></button>}
                  </div>
                  <div className="flex items-center gap-2 bg-[#13162D] border border-purple-500/20 rounded-xl p-1 self-start sm:self-auto">
                    <button onClick={() => setViewMode("grid")} className={`p-2 rounded-lg transition-all ${viewMode==="grid" ? "bg-purple-600 text-white" : "text-[#BEC1DD]/60 hover:text-white"}`}><MdGridView size={18} /></button>
                    <button onClick={() => setViewMode("list")} className={`p-2 rounded-lg transition-all ${viewMode==="list" ? "bg-purple-600 text-white" : "text-[#BEC1DD]/60 hover:text-white"}`}><MdViewList size={18} /></button>
                  </div>
                </div>

                {/* Filter pills */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-hide">
                  {allTechs.map((tech) => (
                    <button key={tech} onClick={() => setActiveFilter(tech)} className={`flex-shrink-0 px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${activeFilter===tech ? "bg-purple-600 text-white border-purple-500" : "bg-[#13162D] text-[#BEC1DD]/70 border-purple-500/20 hover:border-purple-500/50 hover:text-white"}`}>{tech}</button>
                  ))}
                </div>

                {/* Projects */}
                {filteredProjects.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-24 gap-4 text-[#BEC1DD]/50">
                    <FaSearch size={40} className="opacity-30" />
                    <p className="text-lg">No projects match your search</p>
                    <button onClick={() => { setSearchQuery(""); setActiveFilter("All"); }} className="text-purple-400 text-sm hover:underline">Clear filters</button>
                  </div>
                ) : viewMode === "grid" ? (
                  <MuseumGrid projects={filteredProjects} highlightId={highlightId} />
                ) : (
                  <MuseumList projects={filteredProjects} highlightId={highlightId} />
                )}

                {/* Bottom CTA with confetti */}
                <div className="flex flex-col items-center justify-center pt-12 pb-2 gap-4 border-t border-purple-500/10 mt-10">
                  <p className="text-[#BEC1DD]/60 text-sm">You&apos;ve seen the work. Let&apos;s build something together.</p>
                  <a href="#contact" onClick={handleCtaClick} className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                    Get in touch →
                  </a>
                  <button onClick={() => setMuseumOpen(false)} className="flex items-center gap-2 text-[#BEC1DD]/30 hover:text-purple-400 text-xs transition-colors">
                    <FaChevronDown className="rotate-180" size={10} /> Close Museum
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── MUSEUM GRID ── */
const MuseumGrid = ({ projects, highlightId }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
    {projects.map((project, i) => {
      const isHighlighted = project.id === highlightId;
      return (
        <motion.div
          key={project.id}
          data-projectid={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.35 }}
          className={`group relative bg-[#0d0f1e] border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 ${
            isHighlighted
              ? "border-purple-400 shadow-xl shadow-purple-500/30 scale-[1.02]"
              : "border-purple-500/10 hover:border-purple-500/40"
          }`}
        >
          {isHighlighted && (
            <div className="absolute top-2 right-2 z-20 px-2 py-0.5 bg-purple-600 text-white text-[10px] rounded-full font-bold animate-pulse">
              🎲 Random Pick
            </div>
          )}
          <div className="relative h-44 overflow-hidden">
            <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f1e] via-[#0d0f1e]/20 to-transparent" />
            <div className="absolute inset-0 bg-purple-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-3 bg-purple-600 rounded-full hover:bg-purple-500 transition-colors">
                <FaExternalLinkAlt size={14} className="text-white" />
              </a>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-3 bg-[#13162D] rounded-full hover:bg-[#1a1d3a] border border-purple-500/30 transition-colors">
                  <FaGithub size={14} className="text-white" />
                </a>
              )}
            </div>
            <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded-full text-xs text-purple-300 border border-purple-500/20">
              #{String(project.id).padStart(2, "0")}
            </div>
          </div>
          <div className="p-4 space-y-3">
            <h3 className="font-bold text-[#e4ecff] text-base group-hover:text-purple-300 transition-colors">{project.title}</h3>
            <p className="text-[#BEC1DD]/70 text-xs leading-relaxed line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {(project.technologies || []).slice(0, 4).map((tech, idx) => (
                <span key={idx} className={`px-2 py-0.5 text-[10px] font-medium rounded-full border ${getTechColor(tech)}`}>{tech}</span>
              ))}
              {(project.technologies || []).length > 4 && (
                <span className="px-2 py-0.5 text-[10px] text-[#BEC1DD]/50 rounded-full border border-purple-500/10">+{project.technologies.length - 4}</span>
              )}
            </div>
            {project.lighthouse && project.lighthouse.performance > 0 && (
              <div className="flex gap-3 pt-1 border-t border-purple-500/10">
                {[{icon:"⚡",label:"Perf",val:project.lighthouse.performance},{icon:"♿",label:"A11y",val:project.lighthouse.accessibility},{icon:"🔍",label:"SEO",val:project.lighthouse.seo}].map(({icon,label,val}) => (
                  <div key={label} className="flex items-center gap-1 text-xs">
                    <span>{icon}</span>
                    <span className="text-[#BEC1DD]/50">{label}</span>
                    <span className={`font-semibold ${val>=95?"text-green-400":val>=90?"text-yellow-400":"text-orange-400"}`}>{val}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      );
    })}
  </div>
);

/* ── MUSEUM LIST ── */
const MuseumList = ({ projects, highlightId }) => (
  <div className="flex flex-col gap-3">
    {projects.map((project, i) => {
      const isHighlighted = project.id === highlightId;
      return (
        <motion.div
          key={project.id}
          data-projectid={project.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.04, duration: 0.3 }}
          className={`group flex gap-4 bg-[#0d0f1e] border rounded-2xl overflow-hidden transition-all duration-300 p-3 ${
            isHighlighted
              ? "border-purple-400 shadow-xl shadow-purple-500/30 scale-[1.01]"
              : "border-purple-500/10 hover:border-purple-500/40"
          }`}
        >
          <div className="relative w-28 h-20 flex-shrink-0 rounded-xl overflow-hidden">
            <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
            <div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-[#e4ecff] text-sm group-hover:text-purple-300 transition-colors truncate">{project.title}</h3>
                <span className="flex-shrink-0 text-[10px] text-purple-400/60 border border-purple-500/20 rounded-full px-2 py-0.5">#{String(project.id).padStart(2,"0")}</span>
              </div>
              <p className="text-[#BEC1DD]/60 text-xs mt-1 line-clamp-2 leading-relaxed">{project.description}</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex flex-wrap gap-1">
                {(project.technologies || []).slice(0, 3).map((tech, idx) => (
                  <span key={idx} className={`px-2 py-0.5 text-[10px] font-medium rounded-full border ${getTechColor(tech)}`}>{tech}</span>
                ))}
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-purple-600/20 hover:bg-purple-600 border border-purple-500/30 rounded-lg transition-colors">
                  <FaExternalLinkAlt size={11} className="text-purple-300" />
                </a>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-[#13162D] hover:bg-[#1a1d3a] border border-purple-500/20 rounded-lg transition-colors">
                    <FaGithub size={11} className="text-[#BEC1DD]" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      );
    })}
  </div>
);

export default RecentProjects;
