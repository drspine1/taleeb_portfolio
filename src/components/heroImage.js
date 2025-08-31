"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export function BackgroundRippleEffectDemo() {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <div className="absolute inset-0  h-full w-full  ">
        <BackgroundRippleEffect />
      </div>
      <div className="mt-60 w-full">
     
      </div>
    </div>
  );
}
