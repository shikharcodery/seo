import React, { useEffect, useRef } from "react";

export default function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let points = [];
    let frame;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const distance = (a, b) => (a.x - b.x) ** 2 + (a.y - b.y) ** 2;

    const createPoints = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      const columns = width < 768 ? 10 : 18;
      const rows = height < 720 ? 10 : 15;
      points = [];

      for (let x = 0; x <= columns; x += 1) {
        for (let y = 0; y <= rows; y += 1) {
          const cellX = width / columns;
          const cellY = height / rows;
          points.push({
            x: x * cellX + Math.random() * cellX,
            y: y * cellY + Math.random() * cellY,
            originX: x * cellX + Math.random() * cellX,
            originY: y * cellY + Math.random() * cellY,
            vx: (Math.random() - 0.5) * 0.28,
            vy: (Math.random() - 0.5) * 0.28,
            closest: [],
          });
        }
      }

      points.forEach((point) => {
        point.closest = points
          .filter((other) => other !== point)
          .sort((a, b) => distance(point, a) - distance(point, b))
          .slice(0, 5);
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(5, 5, 6, 0.2)";
      ctx.fillRect(0, 0, width, height);

      points.forEach((point) => {
        if (!prefersReduced) {
          point.x += point.vx;
          point.y += point.vy;
          if (Math.abs(point.x - point.originX) > 42) point.vx *= -1;
          if (Math.abs(point.y - point.originY) > 42) point.vy *= -1;
        }

        const d = distance(target, point);
        const active = d < 5000 ? 0.42 : d < 19000 ? 0.18 : d < 42000 ? 0.06 : 0.018;

        point.closest.forEach((near) => {
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(near.x, near.y);
          ctx.strokeStyle = `rgba(139, 180, 255, ${active})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        });

        ctx.beginPath();
        ctx.arc(point.x, point.y, d < 19000 ? 2.2 : 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 205, 255, ${Math.min(active + 0.08, 0.55)})`;
        ctx.fill();
      });

      frame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    const onResize = () => createPoints();

    createPoints();
    draw();
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
