"use client";

import React, { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export interface CarouselImage {
  src: string;
  alt: string;
}

export default function ImageCarousel({
  images,
  label,
  className = "mt-10",
}: {
  images: CarouselImage[];
  label: string;
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<{ pointerId: number; x: number; scrollLeft: number } | null>(null);
  const dragged = useRef(false);
  const reduceMotion = useReducedMotion();

  function goToSlide(index: number) {
    const track = trackRef.current;
    if (!track) return;

    const targetIndex = (index + images.length) % images.length;
    const slide = track.querySelectorAll<HTMLElement>("[data-carousel-slide]")[targetIndex];
    if (!slide) return;

    const trackBounds = track.getBoundingClientRect();
    const slideBounds = slide.getBoundingClientRect();
    track.scrollTo({
      left:
        track.scrollLeft +
        slideBounds.left -
        trackBounds.left -
        (track.clientWidth - slide.clientWidth) / 2,
      behavior: reduceMotion ? "instant" : "smooth",
    });
    setActiveIndex(targetIndex);
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;

    const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
    const slides = [...track.querySelectorAll<HTMLElement>("[data-carousel-slide]")];
    const closestIndex = slides.reduce((closest, slide, index) => {
      const bounds = slide.getBoundingClientRect();
      const distance = Math.abs(bounds.left + bounds.width / 2 - trackCenter);
      const closestBounds = slides[closest].getBoundingClientRect();
      const closestDistance = Math.abs(closestBounds.left + closestBounds.width / 2 - trackCenter);
      return distance < closestDistance ? index : closest;
    }, 0);
    setActiveIndex(closestIndex);
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    dragStart.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      scrollLeft: event.currentTarget.scrollLeft,
    };
    dragged.current = false;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const start = dragStart.current;
    if (!start || start.pointerId !== event.pointerId) return;

    const distance = event.clientX - start.x;
    if (Math.abs(distance) > 4) dragged.current = true;
    event.currentTarget.scrollLeft = start.scrollLeft - distance;
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (dragStart.current?.pointerId === event.pointerId) dragStart.current = null;
  }

  function preventClickAfterDrag(event: React.MouseEvent<HTMLDivElement>) {
    if (!dragged.current) return;
    event.preventDefault();
    event.stopPropagation();
    dragged.current = false;
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className={className}
    >
      <div
        ref={trackRef}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            goToSlide(activeIndex + 1);
          } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            goToSlide(activeIndex - 1);
          }
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClickCapture={preventClickAfterDrag}
        onScroll={handleScroll}
        className="case-study-image-carousel overflow-x-auto overscroll-x-contain focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)]"
        style={{
          display: "flex",
          gap: "clamp(12px, 2vw, 24px)",
          width: "100%",
          marginInline: 0,
          paddingInline: "calc((100% - clamp(240px, 40vw, 700px)) / 2)",
          scrollSnapType: "x mandatory",
          scrollBehavior: reduceMotion ? "auto" : "smooth",
          scrollbarWidth: "none",
        }}
      >
        {images.map((image, index) => (
          <div
            key={image.src}
            data-carousel-slide
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${images.length}`}
            className={`case-study-image-carousel-slide shrink-0 snap-center overflow-hidden rounded-2xl border border-[#dedede] bg-white p-3 sm:p-4 md:p-6 motion-safe:transition-[opacity,transform] motion-safe:duration-300 ${
              activeIndex === index ? "scale-100 opacity-100" : "scale-[0.94] opacity-60"
            }`}
            style={{
              width: "clamp(240px, 40vw, 700px)",
              scrollSnapAlign: "center",
              scrollSnapStop: "always",
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              draggable={false}
              className="block aspect-[4/3] h-auto w-full select-none object-cover"
            />
          </div>
        ))}
      </div>

      <p aria-live="polite" className="sr-only">
        Image {activeIndex + 1} of {images.length}
      </p>

      <div className="mt-4 flex justify-center gap-2" aria-label="Carousel position">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Show image ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            className="group flex min-h-11 min-w-11 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
          >
            <span
              aria-hidden="true"
              className={`h-2 rounded-full transition-all motion-reduce:transition-none ${
                activeIndex === index ? "w-5 bg-[#777777]" : "w-2 bg-[#bdbdbd]"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
