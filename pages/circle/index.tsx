import React, { useEffect, useRef } from "react";

const CircularFigure: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const circle = circleRef.current;

    if (!container || !circle) return;

    let position = 0;
    const speed = 2; 
    const moveCircle = () => {
      position += speed;
      circle.style.transform = `translateX(${position}px)`;

      if (position >= container.offsetWidth) {
        position = -circle.offsetWidth;
      }

      requestAnimationFrame(moveCircle);
    };

    moveCircle();

    return () => {
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "400px",
        background: "green",
        height: "320px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        ref={circleRef}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "blue",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    </div>
  );
};

export default CircularFigure;
