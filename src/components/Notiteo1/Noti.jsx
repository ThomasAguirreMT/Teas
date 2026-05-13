import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

import "./Noti.css";

const hexToRgb = (hex) => {
  const result =
    /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
      hex
    );

  if (!result) {
    return [1, 0.5, 0.2];
  }

  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
  ];
};

/* ======================================================
   VERTEX
====================================================== */

const vertex = `#version 300 es
precision mediump float;

in vec2 position;
in vec2 uv;

out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

/* ======================================================
   FRAGMENT OPTIMIZADO
====================================================== */

const fragment = `#version 300 es
precision mediump float;

uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uSpeed;
uniform float uScale;
uniform float uOpacity;

out vec4 fragColor;

void main() {

  vec2 uv = gl_FragCoord.xy / iResolution.xy;

  uv -= 0.5;

  uv *= uScale;

  float t = iTime * uSpeed;

  float wave =
    sin(uv.x * 8.0 + t) *
    cos(uv.y * 8.0 - t);

  float glow =
    0.25 / length(uv + wave * 0.08);

  vec3 color =
    uCustomColor * glow;

  fragColor =
    vec4(color, glow * uOpacity);
}
`;

export const Plasma = ({
  color = "#10b981",
  speed = 0.18,
  scale = 1.3,
  opacity = 0.45,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const containerEl =
      containerRef.current;

    const customColorRgb =
      hexToRgb(color);

    let renderer;

    try {
      renderer = new Renderer({
        webgl: 2,
        alpha: true,

        antialias: false,

        /* SUPER IMPORTANTE */
        dpr: 1,

        powerPreference:
          "high-performance",
      });
    } catch {
      return;
    }

    const gl = renderer.gl;

    if (!gl) return;

    const canvas = gl.canvas;

    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    containerEl.appendChild(canvas);

    const geometry =
      new Triangle(gl);

    const program =
      new Program(gl, {
        vertex,
        fragment,

        uniforms: {
          iTime: {
            value: 0,
          },

          iResolution: {
            value:
              new Float32Array([
                1,
                1,
              ]),
          },

          uCustomColor: {
            value:
              new Float32Array(
                customColorRgb
              ),
          },

          uSpeed: {
            value: speed,
          },

          uScale: {
            value: scale,
          },

          uOpacity: {
            value: opacity,
          },
        },
      });

    const mesh = new Mesh(gl, {
      geometry,
      program,
    });

    const setSize = () => {
      const rect =
        containerEl.getBoundingClientRect();

      const width = Math.max(
        1,
        Math.floor(rect.width)
      );

      const height = Math.max(
        1,
        Math.floor(rect.height)
      );

      renderer.setSize(
        width,
        height
      );

      const res =
        program.uniforms
          .iResolution.value;

      res[0] =
        gl.drawingBufferWidth;

      res[1] =
        gl.drawingBufferHeight;
    };

    const ro =
      new ResizeObserver(setSize);

    ro.observe(containerEl);

    setSize();

    let raf = 0;

    let isVisible = true;

    /* ======================================================
       FPS LIMITER
    ====================================================== */

    let lastFrame = 0;

    const FPS = 30;

    const frameDelay =
      1000 / FPS;

    const start =
      performance.now();

    const loop = (t) => {
      if (!isVisible) return;

      const elapsed =
        t - lastFrame;

      if (
        elapsed >= frameDelay
      ) {
        lastFrame = t;

        program.uniforms.iTime.value =
          (t - start) * 0.001;

        renderer.render({
          scene: mesh,
        });
      }

      raf =
        requestAnimationFrame(
          loop
        );
    };

    /* ======================================================
       ONLY RENDER WHEN VISIBLE
    ====================================================== */

    const io =
      new IntersectionObserver(
        ([entry]) => {
          const wasVisible =
            isVisible;

          isVisible =
            entry.isIntersecting;

          if (
            isVisible &&
            !wasVisible
          ) {
            cancelAnimationFrame(
              raf
            );

            raf =
              requestAnimationFrame(
                loop
              );
          }
        }
      );

    io.observe(containerEl);

    raf =
      requestAnimationFrame(
        loop
      );

    return () => {
      cancelAnimationFrame(
        raf
      );

      ro.disconnect();

      io.disconnect();

      try {
        containerEl.removeChild(
          canvas
        );
      } catch {}
    };
  }, [
    color,
    speed,
    scale,
    opacity,
  ]);

  return (
    <div
      ref={containerRef}
      className="plasma-container"
    />
  );
};

export default Plasma;