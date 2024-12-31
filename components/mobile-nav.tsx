"use client";

import NavLink from "./nav-links";
import { navigationLinks } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileNav({ isOpen, onClose }: MobileNavProps) {
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
          </nav>
        </div>
      )}
    </>
  );
}

export default MobileNav;
