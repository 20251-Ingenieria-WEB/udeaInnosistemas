// TeamMemberRow.jsx
"use client";
import React from "react";

interface TeamMemberRowProps {
  name: string;
  role: string;
  showDelete?: boolean;
  onDelete?: () => void;
  onRoleChange?: (role: string) => void;
}

export const TeamMemberRow: React.FC<TeamMemberRowProps> = ({
  name,
  role,
  showDelete = false,
  onDelete,
}) => {
  return (
    <div className="flex items-center bg-gray-500 bg-opacity-30 rounded-md p-3 h-[49px] w-full max-w-[620px] md:h-auto md:min-h-[60px] relative">
      <span className="flex-grow text-xl text-black md:text-3xl max-sm:text-2xl">
        {name}
      </span>

      <div className="relative w-[200px] md:w-[258px] flex-shrink-0">
        <div className="bg-gray-500 bg-opacity-30 rounded-md h-[34px] flex items-center px-2 md:w-full">
          <span className="flex-grow text-xl text-black md:text-3xl max-sm:text-2xl">
            {role}
          </span>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="role-dropdown" style="width: 30px; height: 18px; fill: #000;"> <path d="M13 14L0.00961876 0.5L25.9904 0.5L13 14Z" fill="black"></path> </svg>',
            }}
          />
        </div>
      </div>

      {showDelete && (
        <button onClick={onDelete} className="ml-4 flex-shrink-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6477c4866f6125dd92458cbdbae033843176a770?placeholderIfAbsent=true"
            alt="Delete member"
            className="w-5 h-5 aspect-square"
          />
        </button>
      )}
    </div>
  );
};