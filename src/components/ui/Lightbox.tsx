"use client";

import React, { useEffect, useRef, useState } from "react";

interface LightboxProps {
  src: string;
  alt?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ src, alt = "", isOpen, onClose }: LightboxProps) {
  const [zoom, setZoom] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const lastRef = useRef<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setZoom(1);
      setPos({ x: 0, y: 0 });
    }
  }, [isOpen]);

  useEffect(() => {
    if (zoom <= 1) setPos({ x: 0, y: 0 });
  }, [zoom]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(4, +(z + 0.25).toFixed(2)));
      if (e.key === "-") setZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

  function handleWheel(e: React.WheelEvent) {
    e.preventDefault();
    const delta = -e.deltaY;
    const factor = delta > 0 ? 1.08 : 0.92;
    setZoom((z) => clamp(+(z * factor).toFixed(3), 1, 4));
  }

  function onPointerDown(e: React.PointerEvent) {
    if (zoom <= 1) return;
    (e.target as Element).setPointerCapture(e.pointerId);
    setIsPanning(true);
    lastRef.current = { x: e.clientX, y: e.clientY };
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!isPanning || !lastRef.current) return;
    const dx = e.clientX - lastRef.current.x;
    const dy = e.clientY - lastRef.current.y;
    lastRef.current = { x: e.clientX, y: e.clientY };
    setPos((p) => ({ x: p.x + dx, y: p.y + dy }));
  }

  function onPointerUp(e: React.PointerEvent) {
    try {
      (e.target as Element).releasePointerCapture?.(e.pointerId);
    } catch {}
    setIsPanning(false);
    lastRef.current = null;
  }

  function reset() {
    setZoom(1);
    setPos({ x: 0, y: 0 });
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
      onWheel={handleWheel}
      role="dialog"
      aria-modal="true"
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-6 right-6 z-60 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center"
      >
        ✕
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-60 flex gap-2">
        <button
          onClick={() => setZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)))}
          className="bg-white/10 hover:bg-white/20 text-white rounded px-3 py-2"
          aria-label="Zoom out"
        >
          −
        </button>
        <button
          onClick={() => setZoom((z) => Math.min(4, +(z + 0.25).toFixed(2)))}
          className="bg-white/10 hover:bg-white/20 text-white rounded px-3 py-2"
          aria-label="Zoom in"
        >
          +
        </button>
        <button onClick={reset} className="bg-white/10 hover:bg-white/20 text-white rounded px-3 py-2">
          Reset
        </button>
      </div>

      <div className="max-w-[95%] max-h-[95%] w-full h-full flex items-center justify-center">
        <div
          className={`relative w-full h-full overflow-hidden ${zoom > 1 ? "cursor-grab" : "cursor-zoom-out"}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onDoubleClick={() => setZoom((z) => (z > 1 ? 1 : 2))}
        >
          <img
            src={src}
            alt={alt}
            draggable={false}
            style={{
              transform: `translate(${pos.x}px, ${pos.y}px) scale(${zoom})`,
              transition: isPanning ? "none" : "transform 160ms ease",
              willChange: "transform",
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
            }}
            className="block m-auto select-none"
          />
        </div>
      </div>
    </div>
  );
}
