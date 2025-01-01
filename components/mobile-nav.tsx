"use client";

import Link from "next/link";
import NavLink from "./nav-links";
import { navigationLinks } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const { isSignedIn } = useUser();
  return (
    <>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border/50 py-4">
          <nav className="flex flex-col space-y-2 px-4">
            {navigationLinks.map((link) => (
              <NavLink key={link.href} href={link.href} onClick={onClose}>
                {link.label}
              </NavLink>
            ))}
            <Link
              href={isSignedIn ? "/console" : "/sign-in"}
              className="bg-white text-slate-600 border py-2 px-5 rounded-sm"
            >
              {isSignedIn ? "console" : "Login"}
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export default MobileNav;
