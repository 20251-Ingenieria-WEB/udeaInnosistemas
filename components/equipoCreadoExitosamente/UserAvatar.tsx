import * as React from "react";

interface UserAvatarProps {
  initials: string;
  className?: string;
}

export function UserAvatar({ initials, className = "" }: UserAvatarProps) {
  return (
    <div className={`relative h-[60px] w-[60px] ${className}`}>
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<svg id="125:657" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="user-circle" style="width: 60px; height: 60px; fill: #81BACF; position: absolute; left: 0px; top: 0px"> <circle cx="30" cy="30" r="30" fill="#81BACF"></circle> </svg>',
        }}
      />
      <div className="absolute top-4 left-4 h-7 text-2xl font-light text-white w-[27px]">
        {initials}
      </div>
    </div>
  );
}
