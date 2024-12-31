"use client";

import { Zap } from "lucide-react";
import FooterLink from "./footer-link";

function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Zap className="w-8 h-8 text-purple-500" />
            <span className="text-sm text-muted-foreground">
              © 2024 Your Company, Inc.
            </span>
          </div>
          <div className="flex gap-6">
            <FooterLink href="https://twitter.com">𝕏</FooterLink>
            <FooterLink href="https://instagram.com">Instagram</FooterLink>
            <FooterLink href="https://youtube.com">YouTube</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
