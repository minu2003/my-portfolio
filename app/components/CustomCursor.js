"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer glow ring */}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: isHovering ? "48px" : "32px",
          height: isHovering ? "48px" : "32px",
          border: `2px solid ${isHovering ? "rgba(139, 92, 246, 0.6)" : "rgba(139, 92, 246, 0.3)"}`,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease",
          mixBlendMode: "difference",
        }}
      />
      {/* Inner dot */}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: isHovering ? "8px" : "6px",
          height: isHovering ? "8px" : "6px",
          backgroundColor: "#8b5cf6",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s ease, height 0.2s ease",
          boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)",
        }}
      />
    </>
  );
}
