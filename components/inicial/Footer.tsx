"use client";
import * as React from "react";

interface FooterProps {
  tagline: string;
  brandName: string;
}

export function Footer({ tagline, brandName }: FooterProps) {
  return (
    <footer className="flex relative flex-wrap gap-5 justify-between px-4 pt-5 pb-2.5 mt-72 w-full bg-purple-400 border border-solid border-slate-600 border-opacity-20 max-md:mt-10 max-md:max-w-full">
      <p className="my-auto text-4xl text-white max-md:max-w-full">{tagline}</p>
      <div className="text-6xl font-bold text-emerald-800 max-md:text-4xl">
        {brandName}
      </div>
    </footer>
  );
}
