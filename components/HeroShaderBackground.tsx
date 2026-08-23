"use client";

import { useEffect, useRef, useState } from "react";
import { fragmentShader, vertexShader } from "../lib/shaders/heroGradient";

/**
 * Full-bleed WebGL fluid-gradient hero background (ogl + simplex noise).
 * - rAF loop paused via IntersectionObserver when off-screen.
 * - dpr capped at 2.
 * - prefers-reduced-motion or ANY WebGL failure → static CSS gradient fallback.
 */
export default function HeroShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const canvas = canvasRef.current;
    if (prefersReduced || !canvas) {
      setUseFallback(true);
      return;
    }

    let cleanup = () => {};

    // Whole setup guarded — if ogl/WebGL fails for any reason, fall back.
    (async () => {
      try {
        const { Renderer, Program, Mesh, Triangle } = await import("ogl");

        const renderer = new Renderer({
          canvas,
          dpr: Math.min(window.devicePixelRatio, 2),
          // Transparent canvas: before the first frame paints, the light CSS
          // gradient on the parent shows through — never an opaque black frame.
          alpha: true,
          antialias: false,
          depth: false,
        });
        renderer.gl.clearColor(0, 0, 0, 0);
        const gl = renderer.gl;
        const parent = canvas.parentElement as HTMLElement;

        // Start mid-cycle so the very first frame lands in a light part of
        // the animation (never a dark starting point).
        const TIME_OFFSET = 5.0;
        const program = new Program(gl, {
          vertex: vertexShader,
          fragment: fragmentShader,
          uniforms: {
            uTime: { value: TIME_OFFSET },
            uResolution: { value: [1, 1] },
          },
        });
        const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

        const resize = () => {
          const w = parent.clientWidth || window.innerWidth;
          const h = parent.clientHeight || window.innerHeight;
          renderer.setSize(w, h);
          program.uniforms.uResolution.value = [
            gl.canvas.width,
            gl.canvas.height,
          ];
        };
        resize();
        window.addEventListener("resize", resize);

        // Render one frame synchronously so there's no black backbuffer flash
        // before the first requestAnimationFrame tick.
        try {
          renderer.render({ scene: mesh });
        } catch {
          /* ignore */
        }

        let visible = true;
        let raf = 0;
        const start = performance.now();
        const loop = (now: number) => {
          if (!visible) {
            raf = 0;
            return;
          }
          program.uniforms.uTime.value = TIME_OFFSET + (now - start) * 0.001;
          try {
            renderer.render({ scene: mesh });
          } catch {
            /* skip a bad frame rather than crash */
          }
          raf = requestAnimationFrame(loop);
        };

        const io = new IntersectionObserver(
          ([entry]) => {
            visible = entry.isIntersecting;
            if (visible && raf === 0) raf = requestAnimationFrame(loop);
          },
          { threshold: 0 }
        );
        io.observe(canvas);
        raf = requestAnimationFrame(loop);

        cleanup = () => {
          cancelAnimationFrame(raf);
          raf = 0;
          visible = false;
          window.removeEventListener("resize", resize);
          io.disconnect();
          const ext = gl.getExtension("WEBGL_lose_context");
          if (ext) ext.loseContext();
        };
      } catch {
        setUseFallback(true);
      }
    })();

    return () => cleanup();
  }, []);

  if (useFallback) {
    return <div className="hero-fallback-bg absolute inset-0" aria-hidden />;
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full opacity-100"
      style={{ background: "transparent" }}
    />
  );
}
