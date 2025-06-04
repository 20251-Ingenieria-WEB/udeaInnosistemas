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
  //onRoleChange,
}) => {
  return (
    <div className="absolute left-0 h-[49px] w-[620px] max-md:box-border max-md:p-2.5 max-md:w-full max-md:h-auto">
      <div className="absolute top-0 left-0 rounded-md bg-gray-500 bg-opacity-30 h-[49px] w-[620px] max-md:w-full max-md:h-auto max-md:min-h-[60px]" />

      <span className="absolute text-3xl text-black h-[34px] left-[23px] top-[7px] w-[219px] max-md:relative max-md:top-0 max-md:left-0 max-md:mb-2.5 max-md:w-full max-sm:text-2xl">
        {name}
      </span>

      <div className="absolute h-[34px] left-[266px] top-[7px] w-[258px] max-md:relative max-md:top-0 max-md:left-0 max-md:mb-2.5 max-md:w-[200px]">
        <div className="absolute top-0 left-0 rounded-md bg-gray-500 bg-opacity-30 h-[34px] w-[258px] max-md:w-[200px]" />
        <span className="absolute top-0 left-2 text-3xl text-black h-[34px] w-[213px] max-sm:text-2xl">
          {role}
        </span>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="role-dropdown" style="width: 30px; height: 18px; fill: #000; position: absolute; left: 220px; top: 8px"> <path d="M13 14L0.00961876 0.5L25.9904 0.5L13 14Z" fill="black"></path> </svg>',
            }}
          />
        </div>
      </div>

      {showDelete && (
        <button onClick={onDelete}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6477c4866f6125dd92458cbdbae033843176a770?placeholderIfAbsent=true"
            alt="Delete member"
            className="absolute top-3.5 w-5 h-5 aspect-[1/1] left-[578px] max-md:absolute max-md:top-2.5 max-md:right-2.5"
          />
        </button>
      )}
    </div>
  );
};
