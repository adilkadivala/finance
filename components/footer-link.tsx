import React from "react";

import Link from "next/link";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <div>
      <Link
        href={href}
        target="_blank"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        {children}
      </Link>
    </div>
  );
}

export default FooterLink;
