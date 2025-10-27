"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let isVisible = false;

    const updateCursor = (e) => {
      if (!isVisible) {
        isVisible = true;
      }
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      // Check if hovering over interactive elements
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        /* Keep default cursor visible */
      `}</style>
      <div
        className="custom-cursor"
        style={{
          position: "fixed",
          left: cursorPosition.x + 15,
          top: cursorPosition.y + 15,
          width: isHovering ? "16px" : "12px",
          height: isHovering ? "16px" : "12px",
          backgroundColor: isHovering ? "#2563eb" : "#3b82f6",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s ease-out, height 0.2s ease-out, background-color 0.2s ease",
          boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
        }}
      />
    </>
  );
}

