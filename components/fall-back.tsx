"use client";

import { useUser } from "@clerk/nextjs";

export const FallBack = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h2 className="text-2xl lg:text-4xl text-white font-medium">
        Hey {isLoaded ? ", " : ""}
        {user?.firstName} 👋
      </h2>
      <p className="text-sm lg:text-base text-[#89b6fd]">
        This is Financial overview report
      </p>
    </div>
  );
};
