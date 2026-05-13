"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about-me" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", href: "/contact" },
  ];

  const menuVariants = {
    closed: { 
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    open: { 
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.08, type: "spring", stiffness: 200, damping: 20 },
    }),
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 backdrop-blur-2xl bg-[rgba(5,5,16,0.8)] border-b border-white/5 shadow-lg shadow-black/10"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative group">
          <span className="text-xl font-bold tracking-tight">
            <span className="gradient-text">MV</span>
            <span className="text-white/60 font-light ml-1">.</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ label, id, href }) => (
            <a
              key={id || href}
              href={href || `#${id}`}
              className="relative px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-300 group"
            >
              {label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Minuri_Viranga_Resume.pdf"
            className="ml-4 px-5 py-2 text-sm font-medium rounded-full bg-white text-black hover:shadow-lg hover:shadow-white/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-end gap-1.5 z-50"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 5, width: 24 } : { rotate: 0, y: 0, width: 24 }}
            className="block h-[2px] bg-white rounded-full origin-center"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-[2px] w-4 bg-white rounded-full"
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7, width: 24 } : { rotate: 0, y: 0, width: 10 }}
            className="block h-[2px] bg-white rounded-full origin-center"
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-screen w-80 bg-[#0a0a1a]/95 backdrop-blur-2xl border-l border-white/5 z-40 flex flex-col justify-center px-10"
            >
              <nav className="flex flex-col gap-2">
                {links.map(({ label, id, href }, i) => (
                  <motion.a
                    key={id || href}
                    href={href || `#${id}`}
                    onClick={toggleMenu}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    className="text-3xl font-light text-white/70 hover:text-white py-3 transition-colors duration-300 border-b border-white/5 hover:border-white/30"
                  >
                    {label}
                  </motion.a>
                ))}
                <motion.a
                  href="/resume.pdf"
                  download="Minuri_Viranga_Resume.pdf"
                  custom={links.length}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  className="mt-6 text-center py-3 px-6 rounded-full bg-white text-black font-medium hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
                >
                  Download Resume
                </motion.a>
              </nav>

              {/* Social links in mobile menu */}
              <motion.div 
                className="flex gap-4 mt-12 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { href: "https://github.com/minu2003", icon: "github" },
                  { href: "https://www.linkedin.com/in/minuri-viranga-b9bb3829a/", icon: "linkedin" },
                  { href: "https://www.instagram.com/minu_viranga?igsh=ZWg2NDRpamEyeHdi", icon: "instagram" },
                ].map(({ href, icon }) => (
                  <a
                    key={icon}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300"
                  >
                    {icon === "github" && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    )}
                    {icon === "linkedin" && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                      </svg>
                    )}
                    {icon === "instagram" && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                      </svg>
                    )}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
