import "./HeroComponent.css";
import { useEffect, useRef } from "react";
import { BsLinkedin, BsGithub, BsEnvelopeFill } from "react-icons/bs";

export default function HeroComponent() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const canvasEl = canvasRef.current;

    if (!sectionEl || !canvasEl) {
      return undefined;
    }

    const ctx = canvasEl.getContext("2d");
    if (!ctx) {
      return undefined;
    }

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frameId = 0;
    const nodes = [];
    const pointer = { x: 0, y: 0, active: false };

    const spawnNode = () => {
      const speed = 0.1 + Math.random() * 0.45;
      const angle = Math.random() * Math.PI * 2;

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 2.1 + Math.random() * 2.6,
      };
    };

    const resize = () => {
      const rect = sectionEl.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = window.devicePixelRatio || 1;

      canvasEl.width = Math.round(width * dpr);
      canvasEl.height = Math.round(height * dpr);
      canvasEl.style.width = `${width}px`;
      canvasEl.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = width * height;
      const nodeCount = Math.max(34, Math.min(95, Math.round(area / 18000)));
      nodes.length = 0;

      for (let i = 0; i < nodeCount; i += 1) {
        nodes.push(spawnNode());
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x <= 0 || node.x >= width) node.vx *= -1;
        if (node.y <= 0 || node.y >= height) node.vy *= -1;

        if (pointer.active) {
          const dx = node.x - pointer.x;
          const dy = node.y - pointer.y;
          const distSq = dx * dx + dy * dy;
          const repelDist = 130;

          if (distSq > 0 && distSq < repelDist * repelDist) {
            const dist = Math.sqrt(distSq);
            const push = (repelDist - dist) / repelDist;
            node.x += (dx / dist) * push * 1.2;
            node.y += (dy / dist) * push * 1.2;
          }
        }
      }

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];

        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 145;

          if (distance < maxDistance) {
            const alpha = (1 - distance / maxDistance) * 0.72;
            ctx.strokeStyle = `rgba(188, 116, 27, ${alpha})`;
            ctx.lineWidth = 1.45;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = "rgba(255, 248, 236, 0.96)";
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      frameId = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event) => {
      const rect = sectionEl.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    sectionEl.addEventListener("pointermove", handlePointerMove);
    sectionEl.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("resize", resize);
      sectionEl.removeEventListener("pointermove", handlePointerMove);
      sectionEl.removeEventListener("pointerleave", handlePointerLeave);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section id="hero" className="hero-section" ref={sectionRef}>
      <canvas
        ref={canvasRef}
        className="hero-network-canvas"
        aria-hidden="true"
      />
      <div className="hero-network-overlay" aria-hidden="true" />

      <div className="hero-main">
        <h2 className="hero-title">Manav&nbsp;Patel</h2>

        <div className="hero-subtitle">
          <p className="hero-role-title">Software Engineer</p>
          <p className="hero-role-tags">
            Backend · Machine Learning · Data · Systems · Cloud
          </p>
        </div>

        <div className="hero-icons">
          <a
            href="https://www.linkedin.com/in/manavpat/"
            target="_blank"
            rel="noreferrer"
            className="hero-icon"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/mpat247"
            target="_blank"
            rel="noreferrer"
            className="hero-icon"
            aria-label="GitHub"
          >
            <BsGithub />
          </a>
          <a
            href="mailto:manavpatel.dev@gmail.com"
            className="hero-icon"
            aria-label="Email"
          >
            <BsEnvelopeFill />
          </a>
        </div>
      </div>
    </section>
  );
}
