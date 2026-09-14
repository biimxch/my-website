"use client";

import { useEffect, useRef, useState } from "react";

type RevealImageItem = {
  src: string;
  alt: string;
  aspectRatio: string;
  className?: string; // เช่น "md:col-span-2" ให้รูปนี้กินพื้นที่ 2 คอลัมน์ในกริด
};

type ScrollImageRevealProps = {
  images: RevealImageItem[];
  className?: string;
};

function RevealImage({ src, alt, aspectRatio, className = "" }: RevealImageItem) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal-container ${isVisible ? "is-visible" : ""} ${className}`.trim()}
    >
      <div className="scroll-reveal-mask" style={{ aspectRatio }}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

export default function ScrollImageReveal({ images, className = "" }: ScrollImageRevealProps) {
  return (
    <div className={`scroll-image-reveal ${className}`.trim()}>
      {images.map((image) => (
        <RevealImage key={`${image.src}-${image.alt}`} {...image} />
      ))}

      <style>{`
        .scroll-reveal-container {
          width: 100%;
        }

        /* กรอบเริ่มเล็กกว่าตัวเอง (scale 0.88) + โปร่งใส แล้วโตเต็ม + ทึบ ตอนติด .is-visible */
        .scroll-reveal-mask {
          width: 100%;
          overflow: hidden;
          border-radius: 16px;
          transform: scale(0.88);
          opacity: 0;
          transition:
            transform 0.9s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.7s ease-out;
        }

        .scroll-reveal-container.is-visible .scroll-reveal-mask {
          transform: scale(1);
          opacity: 1;
        }

        .scroll-reveal-mask img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;

          /* ภาพซูมสวนทางเบาๆ ให้ดูมีมิติตอน mask ขยาย */
          transform: scale(1.12);
          transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scroll-reveal-container.is-visible .scroll-reveal-mask img {
          transform: scale(1);
        }
      `}</style>
    </div>
  );
}