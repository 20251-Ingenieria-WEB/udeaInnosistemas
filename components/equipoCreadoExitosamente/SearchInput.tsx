import * as React from "react";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  placeholder = "Buscar...",
  className = "",
}: SearchInputProps) {
  return (
    <div
      className={`relative h-[60px] w-[321px] max-md:w-full max-md:max-w-[300px] ${className}`}
    >
      <div className="absolute top-0 left-0 rounded-md border-black border-solid border-[0.8px] h-[60px] w-[321px] max-md:w-full" />
      <input
        type="text"
        placeholder={placeholder}
        className="absolute left-3.5 text-2xl h-[45px] text-black text-opacity-60 top-[7px] w-[101px] max-sm:text-lg bg-transparent border-none outline-none"
      />
    </div>
  );
}
