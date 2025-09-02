"use client";
import { motion } from "motion/react";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Quote() {
  return (
<section  id="quotes" className="w-full  mt-40  mx-auto text-center"> 
  <div className="w-full max-w-7xl  text-center px-6 md:px-0">
      <motion.h2 
        initial={{y:"10px",opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true, amount:0.2}}
        transition={{delay:0.2,duration:0.4}}
      className=" text-xl md:text-xl pt-10 pb-2 uppercase text-[#e4ecff]">my favorite <span className="text-purple-400">&quot;quotes&quot;</span></motion.h2>
      <motion.p 
        initial={{y:"10px",opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true, amount:0.2}}
        transition={{delay:0.4,duration:0.4}}
      className="text-[#BEC1DD] pb-8 md:pb-0 text-lg">A collection of timeless quotes from classic literature that inspire and provoke thought.</motion.p>
  </div>
      <div
  className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
     
      >
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow"
     
      />
    </div>
</section>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
