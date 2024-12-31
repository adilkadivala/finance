"use client";

import Link from "next/link";
import { useState } from "react";
import NavLink from "./nav-links";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigationLinks } from "@/lib/utils";
import MobileNav from "./mobile-nav";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 md:px-10 p-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#hero">
            <div className="flex items-center gap-2">
              <Zap className="w-8 h-8 text-indigo-500" />
              <span className="font-bold text-xl">ZenOps</span>
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
          <div className="hidden md:block">
            <Button>Join Waitlist</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}

export default Navbar;
