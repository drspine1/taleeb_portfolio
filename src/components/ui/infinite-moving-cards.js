"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const durations = { fast: "20s", normal: "40s", slow: "80s" };
      containerRef.current.style.setProperty(
        "--animation-duration",
        durations[speed] || "40s"
      );
    }
  };

  // Toggle pause on tap for mobile
  const handleTouchStart = useCallback(() => {
    setPaused((prev) => !prev);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 w-screen overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        onTouchStart={handleTouchStart}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-16",
          start && "animate-scroll",
          // hover pause (desktop)
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={
          // touch pause (mobile) — overrides via inline style so it can toggle back
          paused ? { animationPlayState: "paused" } : {}
        }
      >
        {items.map((item, idx) => (
          <li
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
            key={idx}
            style={{
              background: "rgb(4,7,29)",
              backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              />
              <span className="relative z-20 text-lg italic leading-[1.6] font-normal text-[#e4ecff]">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-bold text-[#BEC1DD]">{item.name}</span>
                  <span className="text-sm leading-[1.6] font-normal text-[#BEC1DD]">{item.title}</span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>

      {/* Mobile pause indicator */}
      {paused && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-600/30 border border-purple-500/30 pointer-events-none md:hidden">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-purple-300 text-xs">Tap to resume</span>
        </div>
      )}
    </div>
  );
};
