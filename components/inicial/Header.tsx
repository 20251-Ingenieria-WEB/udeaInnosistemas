"use client";
import * as React from "react";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="relative px-16 py-9 w-full text-8xl font-extrabold whitespace-nowrap bg-violet-300 border border-solid border-slate-600 border-opacity-20 text-slate-600 max-md:px-5 max-md:max-w-full max-md:text-4xl">
      {title}
    </header>
  );
}
