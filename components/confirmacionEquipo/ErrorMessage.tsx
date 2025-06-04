import React from "react";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex gap-1.5 mt-1.5 text-xl text-red-600">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2c4884f-7426-4499-9f38-a757bdad96f7?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
        className="object-contain shrink-0 self-start bg-red-600 rounded-sm aspect-square h-[25px] w-[25px]"
      />
      <p className="flex-auto">{message}</p>
    </div>
  );
};
