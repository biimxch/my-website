"use client";

import { useEffect, useRef, useState } from "react";

function clamp(v: number, a: number, b: number) {
  return Math.min(b, Math.max(a, v));
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

interface ScrollGrowImageProps {
  src: string;
  alt?: string;
  label?: string;      // ข้อความ overlay เช่นโค้ดโปรเจกต์ "J12"
  href?: string;        // ถ้าใส่ จะ wrap ด้วย <a>
  minWidthVw?: number;  // ความกว้าง (% ของ viewport) ตอนยังไม่โต
  minHeightVh?: number; // ความสูง (% ของ viewport) ตอนยังไม่โต
  maxHeightVh?: number; // ความสูงสุด ตอนโตเต็มที่ (100 = เต็มจอ)
  growStart?: number;   // 0-1: สัดส่วนของ viewport height ที่เริ่มโต (ยิ่งมาก ยิ่งเริ่มโตเร็วตอนเข้าเฟรม)
  growEnd?: number;     // 0-1: สัดส่วนที่โตเต็มที่ (ยิ่งน้อย ยิ่งโตเต็มก่อนถึงกลางจอ)
}

export default function ScrollGrowImage({
  src,
  alt = "",
  label,
  href,
  minWidthVw = 60,
  minHeightVh = 45,
  maxHeightVh = 100,
  growStart = 0.85,
  growEnd = 0.15,
}: ScrollGrowImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number;

    const compute = () => {
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // ตำแหน่ง top ของรูป เทียบเป็นสัดส่วนของความสูงจอ (1 = เพิ่งโผล่ขอบล่าง, 0 = ชนขอบบน)
        const posTop = rect.top / vh;
        const raw =
          1 - clamp((posTop - growEnd) / (growStart - growEnd), 0, 1);
        setProgress(raw);
      }
      rafId = requestAnimationFrame(compute);
    };

    rafId = requestAnimationFrame(compute);
    return () => cancelAnimationFrame(rafId);
  }, [growStart, growEnd]);

  const width = lerp(minWidthVw, 100, progress);
  const height = lerp(minHeightVh, maxHeightVh, progress);

  const frame = (
    <div
      ref={ref}
      style={{
        width: `${width}vw`,
        height: `${height}vh`,
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      {label && (
        <span
          style={{
            position: "absolute",
            left: 24,
            bottom: 24,
            color: "#fff",
            fontSize: "1.5rem",
            fontWeight: 500,
            pointerEvents: "none",
          }}
        >
          {label}
        </span>
      )}
    </div>
  );

  return href ? (
    <a href={href} style={{ display: "block" }}>
      {frame}
    </a>
  ) : (
    frame
  );
}