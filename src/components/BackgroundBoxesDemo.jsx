"use client";
import React from "react";
import { Boxes } from "../components/ui/BackgroundBoxes";
import { cn } from "../utils";

export function BackgroundBoxesDemo() {
  return (
    <div
      className="h-96 font-lato md:h-[600px] relative w-full overflow-hidden bg-black flex flex-col items-center justify-center ">
      <div
        className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-9xl text-xl text-white font-bold relative z-20")}>
        <span className="text-white bg-primary">C</span>alibre
      </h1>
      <p className="text-left  text-white relative z-20">
        Technology & Services
      </p>
      <p className="text-center text-4xl mt-8 text-white relative z-20">
      Learn IT. Master Skills. Get Placed — The Calibre Way!
      </p>
    </div>
  );
}
