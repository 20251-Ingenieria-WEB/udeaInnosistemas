import * as React from "react";

interface ErrorMessageProps {
  message: string;
  iconSrc: string;
}

export function ErrorMessage({ message, iconSrc }: ErrorMessageProps) {
  return (
    <div className="flex gap-1.5 mt-2.5 text-xl text-red-600">
      <img
        src={iconSrc}
        className="object-contain shrink-0 self-start bg-red-600 rounded-sm aspect-square h-[25px] w-[25px]"
        alt="Error icon"
      />
      <p className="flex-auto">{message}</p>
    </div>
  );
}
