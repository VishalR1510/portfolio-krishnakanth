import { useState, useEffect } from "react";
import "../index.css";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Mouse movement
  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Hover logic
  useEffect(() => {
    const targets = document.querySelectorAll(".custom-target");

    const enter = () => document.body.classList.add("cursor-hover");
    const leave = () => document.body.classList.remove("cursor-hover");

    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div
      className="cursor-wrapper"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div className="custom-cursor" />
    </div>
  );
}

export default CustomCursor;
