import React from "react";

interface FormFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  className?: string;
}

export function FormField({
  label,
  placeholder,
  type = "text",
  className = "",
}: FormFieldProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="self-start font-bold text-black text-3xl mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="px-2.5 py-5 text-black text-3xl bg-white rounded-md border border-solid border-stone-300 max-md:pr-5 max-md:max-w-full"
      />
    </div>
  );
}
