"use client";

import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <div>
      <Link
        href={href}
        onClick={onClick}
        className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-md hover:text-indigo-600"
      >
        {children}
      </Link>
    </div>
  );
}

export default NavLink;
