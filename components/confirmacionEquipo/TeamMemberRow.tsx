import React from "react";

interface TeamMemberRowProps {
  memberName: string;
  showRemoveButton?: boolean;
  isFirstMember?: boolean;
}

export const TeamMemberRow: React.FC<TeamMemberRowProps> = ({
  memberName,
  showRemoveButton = false,
  isFirstMember = false,
}) => {
  return (
    <div className="flex flex-wrap gap-10 py-2 pr-20 pl-6 mt-3 max-w-full rounded-md bg-gray-500 bg-opacity-30 w-[620px] max-md:px-5">
      <span className="grow shrink w-[115px]">{memberName}</span>
      <div className="flex gap-6">
        {isFirstMember ? (
          <>
            <span className="grow">Seleccionar rol</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c01c461993821ced57ad8c0b8a7dcdcd81f9c1ba?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
              className="object-contain shrink-0 my-auto aspect-[2] w-[26px]"
            />
          </>
        ) : (
          <div className="flex gap-10">
            <div className="flex flex-auto gap-6 px-2.5 rounded-md bg-gray-500 bg-opacity-30">
              <span className="grow">Seleccionar rol</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c01c461993821ced57ad8c0b8a7dcdcd81f9c1ba?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
                className="object-contain shrink-0 my-auto aspect-[2] w-[26px]"
              />
            </div>
            {showRemoveButton && (
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a28d7c78d4fba68717e752f326979431642862e7?placeholderIfAbsent=true&apiKey=5c9e6ea2079e4392aa5a607e9bacdc7f"
                className="object-contain shrink-0 my-auto w-5 aspect-square"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
