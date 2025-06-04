import * as React from "react";

interface UserAvatarProps {
  initials: string;
  className?: string;
}

export function UserAvatar({ initials, className = "" }: UserAvatarProps) {
  return (
    <div className={`relative ${className}`}>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg class="user-circle" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 60px; height: 60px; position: absolute; left: 0px; top: 0px">       <circle cx="30" cy="30" r="30" fill="#81BACF"></circle>     </svg>',
          }}
        />
      </div>
      <span className="absolute top-4 left-4 h-7 text-2xl font-light text-white w-[27px] max-sm:text-lg max-sm:left-[13px] max-sm:top-[13px]">
        {initials}
      </span>
    </div>
  );
}
