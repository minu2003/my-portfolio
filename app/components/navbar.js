"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Show navbar when scrolling up, hide when scrolling down
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const links = [
    { label: "Home", id: "home" },
    { label: "About Me", id: "about-me" },
    { label: "Projects", id: "projects" },
    { label: "Contact", href: "/contact" },
    {label:"Experience", id:"experience"},
  ];

    return (
        <nav className={`bg-gradient-to-r from-[#0b111b] to-gray-900 text-white p-5 shadow-sm flex justify-between items-center border-b-2 border-gray-800 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
            isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}>
            <h1 className="text-2xl font-normal">Minuri Viranga</h1>
            <div className="flex flex-col items-end space-y-1 cursor-pointer" onClick={toggleMenu}>
                <span className="block w-6 h-1 bg-white"></span>
                <span className="block w-4 h-1 bg-white"></span>
                <span className="block w-2 h-1 bg-white"></span>
            </div>

            <div
        className={`
          fixed top-0 right-0 h-screen bg-gray-900 text-white w-96 p-7
          transform transition-transform  ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          z-40
        `}
      >
        {/* Close button */}
        <div className="flex justify-end">
            <button
          onClick={toggleMenu}
          className="mb-8 text-xl"
          aria-label="Close menu"
        >
          &times;
        </button>
        </div>

        {/* Menu items */}
        <nav className="flex flex-col space-y-6 text-2xl font-medium">
            {links.map(({ label, id, href }) => (
                <a
                key={id || href}
                href={href ? href : `#${id}`}
                onClick={toggleMenu}
                className="border-b border-gray-600 pb-4 transition-transform duration-300 transform hover:scale-105"
                >
                {label}
                </a>
            ))}
        </nav>

      </div>

      {/* Optional: Overlay to close menu when clicking outside */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-transparent bg-opacity-50 z-30"
        ></div>
      )}
        </nav>
    );
}
