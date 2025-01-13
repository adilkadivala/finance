"use client";

import Link from "next/link";
import NavLink from "./nav-links";
import { navigationLinks } from "@/lib/utils";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 left-0 md:px-10 p-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#hero">
            <div className="items-center flex">
              <Image
                src="/logolanding.svg"
                height={28}
                width={28}
                alt="side-logo"
              />
              <p className="font-semibold text-indigo-500 text-2xl ml-1 hidden md:flex">
                Finance
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navigationLinks.map((link) => (
              <div key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div>
            <Link
              href={isSignedIn ? "/console" : "/sign-in"}
              className="bg-white text-slate-600 border border-indigo-500 py-2 px-5 rounded-sm"
            >
              {isSignedIn ? "console" : "Login"}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
