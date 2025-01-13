"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import FooterLink from "./footer-link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <div className="items-center hidden lg:flex">
            <Image
              src="/logolanding.svg"
              height={28}
              width={28}
              alt="side-logo"
            />
            <p className="font-semibold text-indigo-500 text-2xl ml-1">
              Finance
            </p>
          </div>
          <div className="flex gap-6">
            <FooterLink href="https://github.com/adilkadivala">
              <FaGithub size={20} className="hover:text-indigo-300" />
            </FooterLink>
            <FooterLink href="https://x.com/adil_kadival">
              <FaTwitter size={20} className="hover:text-indigo-300" />
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/adilkadival">
              <FaLinkedin size={20} className="hover:text-indigo-300" />
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
