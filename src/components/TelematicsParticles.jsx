import { useEffect, useRef } from "react";

export default function TelematicsParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];
    let satellites = [];
    let dataStreams = [];
    let vehicles = [];
    const mouse = { x: 0, y: 0 };
    let isVisible = true;
    const isMobile = window.innerWidth < 768;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const count = isMobile ? 40 : 80;
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3),
          speedY: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3),
          opacity: Math.random() * 0.4 + 0.1,
          type: Math.random() > 0.6 ? "signal" : Math.random() > 0.5 ? "data" : "gps",
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02,
        });
      }
    };

    const createSatellites = () => {
      const count = isMobile ? 1 : 3;
      satellites = [];
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        satellites.push({
          angle,
          radius: Math.min(canvas.width, canvas.height) * 0.2 + (isMobile ? 30 : 50),
          speed: (0.002 + Math.random() * 0.003) * (i % 2 === 0 ? 1 : -1),
          size: 2 + Math.random() * 2,
          trail: [],
        });
      }
    };

    const createDataStreams = () => {
      const count = isMobile ? 3 : 6;
      dataStreams = [];
      for (let i = 0; i < count; i++) {
        dataStreams.push({
          startX: Math.random() * canvas.width * 0.8 + canvas.width * 0.1,
          startY: Math.random() * canvas.height * 0.8 + canvas.height * 0.1,
          length: 30 + Math.random() * 50,
          speed: 0.5 + Math.random() * 1.5,
          progress: Math.random(),
          width: 1 + Math.random() * 2,
          angle: Math.random() * Math.PI * 2,
          opacity: 0.1 + Math.random() * 0.2,
        });
      }
    };

    const createVehicles = () => {
      const count = isMobile ? 2 : 4;
      vehicles = [];
      for (let i = 0; i < count; i++) {
        vehicles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 4 + Math.random() * 3,
          speed: 0.2 + Math.random() * 0.4,
          angle: Math.random() * Math.PI * 2,
          path: [],
          pathIndex: 0,
          turnTimer: 0,
        });
      }
    };

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(246, 140, 42, 0.03)";
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      if (!isVisible) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawGrid();

      dataStreams.forEach((ds) => {
        ds.progress += ds.speed * 0.01;
        if (ds.progress > 1) ds.progress = 0;

        const cx = ds.startX + Math.cos(ds.angle) * ds.progress * 100;
        const cy = ds.startY + Math.sin(ds.angle) * ds.progress * 100;

        const gradient = ctx.createLinearGradient(cx, cy, cx + Math.cos(ds.angle) * ds.length, cy + Math.sin(ds.angle) * ds.length);
        gradient.addColorStop(0, "rgba(246, 140, 42, 0)");
        gradient.addColorStop(0.5, `rgba(246, 140, 42, ${ds.opacity})`);
        gradient.addColorStop(1, "rgba(246, 140, 42, 0)");

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(ds.angle) * ds.length, cy + Math.sin(ds.angle) * ds.length);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = ds.width;
        ctx.stroke();
      });

      vehicles.forEach((v) => {
        v.turnTimer += 0.01;
        if (v.turnTimer > 1) {
          v.angle += (Math.random() - 0.5) * Math.PI * 0.5;
          v.turnTimer = 0;
        }
        v.x += Math.cos(v.angle) * v.speed;
        v.y += Math.sin(v.angle) * v.speed;

        if (v.x < 0 || v.x > canvas.width) v.angle = Math.PI - v.angle;
        if (v.y < 0 || v.y > canvas.height) v.angle = -v.angle;

        v.path.push({ x: v.x, y: v.y });
        if (v.path.length > 20) v.path.shift();

        for (let i = 1; i < v.path.length; i++) {
          const t = i / v.path.length;
          ctx.beginPath();
          ctx.arc(v.path[i].x, v.path[i].y, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(246, 140, 42, ${t * 0.2})`;
          ctx.fill();
        }

        ctx.save();
        ctx.translate(v.x, v.y);
        ctx.rotate(v.angle);

        ctx.fillStyle = "rgba(246, 140, 42, 0.6)";
        ctx.fillRect(-v.size / 2, -v.size / 3, v.size, v.size * 0.6);

        ctx.fillStyle = "rgba(246, 140, 42, 0.3)";
        ctx.fillRect(v.size / 2, -v.size / 6, v.size * 0.3, v.size * 0.3);

        ctx.restore();
      });

      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += p.pulseSpeed;
        const pulseOpacity = 0.3 + Math.sin(p.pulse) * 0.3;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        if (!isMobile) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(246, 140, 42, ${(1 - dist / 150) * 0.25})`;
            ctx.lineWidth = 0.5;
            ctx.setLineDash([3, 3]);
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        const color = p.type === "gps" ? "246, 140, 42" : "255, 107, 0";
        gradient.addColorStop(0, `rgba(${color}, ${p.opacity * pulseOpacity})`);
        gradient.addColorStop(1, `rgba(${color}, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.opacity + 0.4})`;
        ctx.fill();

        if (!isMobile) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx2 = p.x - p2.x;
            const dy2 = p.y - p2.y;
            const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            if (dist2 < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(246, 140, 42, ${(1 - dist2 / 100) * 0.08})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      });

      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const x = cx + Math.cos(sat.angle) * sat.radius;
        const y = cy + Math.sin(sat.angle) * sat.radius;

        sat.trail.push({ x, y });
        if (sat.trail.length > 30) sat.trail.shift();

        ctx.beginPath();
        ctx.arc(x, y, sat.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(246, 140, 42, 0.8)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, sat.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(246, 140, 42, 0.1)";
        ctx.fill();

        if (!isMobile) {
          for (let i = 1; i < sat.trail.length; i++) {
            const t = i / sat.trail.length;
            ctx.beginPath();
            ctx.arc(sat.trail[i].x, sat.trail[i].y, sat.size * t * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(246, 140, 42, ${t * 0.2})`;
            ctx.fill();
          }

          particles.forEach((p) => {
            const dx = p.x - x;
            const dy = p.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 80) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(246, 140, 42, ${(1 - dist / 80) * 0.15})`;
              ctx.lineWidth = 0.5;
              ctx.setLineDash([4, 4]);
              ctx.moveTo(x, y);
              ctx.lineTo(p.x, p.y);
              ctx.stroke();
              ctx.setLineDash([]);
            }
          });
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    const handleMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };

    resize();
    createParticles();
    createSatellites();
    createDataStreams();
    createVehicles();
    animate();

    const handleResize = () => { resize(); createParticles(); createSatellites(); createDataStreams(); createVehicles(); };
    window.addEventListener("resize", handleResize);
    if (!isMobile) window.addEventListener("mousemove", handleMouse);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      if (!isMobile) window.removeEventListener("mousemove", handleMouse);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
