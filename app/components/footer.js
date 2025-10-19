"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about-me" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "/contact" },
    {name:"Experience", href:"#experience"}
  ];

  return (
    <footer className="bg-gradient-to-r from-[#0b111b] to-gray-900 text-white border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700 mb-4"></div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400">
          © {currentYear} Minuri Viranga. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
