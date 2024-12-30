"use client";

import { useUser } from "@clerk/nextjs";

export const FallBack = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-400">
      <p className="text-xl lg:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Hey {isLoaded ? ", " : ""}
        {user?.firstName} 👋 ! glad to see You 🤝
      </p>
    </div>
  );
};
