"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import React, { JSX } from 'react';

export interface CarouselItem {
  id: string | number;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string; 
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
  activeIndex?: number; 
  onChange?: (index: number) => void; 
}

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 0; // 🎯 ปรับ Gap ระหว่างหน้าสไลด์เป็น 0 เพื่อให้ภาพชนขอบเนียนตา
const SPRING_OPTIONS = { type: 'spring' as const, stiffness: 300, damping: 30 };

interface CarouselItemProps {
  item: CarouselItem;
  index: number;
  itemWidth: number;
  round: boolean;
  trackItemOffset: number;
  x: any;
  transition: any;
}

function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition }: CarouselItemProps) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  return (
    <motion.div
      key={`${item?.id ?? index}-${index}`}
      className="relative shrink-0 flex flex-col bg-stone-100 overflow-hidden cursor-grab active:cursor-grabbing w-full h-full"
      style={{
        width: itemWidth,
        height: '100%',
        rotateY: rotateY,
      }}
      transition={transition}
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.title || "Project Screenshot"}
          className="w-full h-full object-cover pointer-events-none"
        />
      )}
    </motion.div>
  );
}

export default function Carousel({
  items = [],
  baseWidth = 500,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
  activeIndex,
  onChange
}: CarouselProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 🎯 เปลี่ยนสเตตัสจากค่าคงที่ เป็นสเตตไดนามิกคอยวัดขนาดกล่องจริงแบบเรียลไทม์
  const [computedWidth, setComputedWidth] = useState(baseWidth);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const width = entries[0].contentRect.width;
      if (width > 0) {
        setComputedWidth(width); // 🎯 ดักจับขนาดกรอบนอกแล้วสั่งยืดความกว้างสไลด์ตามทันที
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const itemWidth = computedWidth; // 🎯 บังคับให้ขนาดการ์ดกว้างเท่ากรอบใหญ่เป๊ะๆ
  const trackItemOffset = itemWidth + GAP;
  
  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState<number>(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isJumping, setIsJumping] = useState<boolean>(false);

  const lastProcessedIndexRef = useRef<number | null>(null);

  useEffect(() => {
    if (activeIndex !== undefined && activeIndex !== null) {
      if (activeIndex !== lastProcessedIndexRef.current) {
        const targetPosition = loop ? activeIndex + 1 : activeIndex;
        setPosition(targetPosition);
        lastProcessedIndexRef.current = activeIndex;
      }
    }
  }, [activeIndex, loop]);

  const currentComputedIndex = useMemo(() => {
    if (items.length === 0) return 0;
    return loop 
      ? (position - 1 + items.length) % items.length 
      : Math.min(position, items.length - 1);
  }, [position, items.length, loop]);

  useEffect(() => {
    if (
      onChange &&
      activeIndex !== null &&
      activeIndex !== undefined &&
      currentComputedIndex !== activeIndex
    ) {
      lastProcessedIndexRef.current = currentComputedIndex;
      onChange(currentComputedIndex);
    }
  }, [currentComputedIndex, activeIndex, onChange]);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) return;
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
      });
      return;
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition(prev => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0
        }
      };

  return (
    // 🎯 เอาอะตอม padding แผงเก่าออก ปล่อยให้มันกางเต็มตัวถัง w-full h-full
    <div ref={containerRef} className="relative overflow-hidden w-full h-full flex items-center justify-center">
      <motion.div
        className="flex h-full items-center"
        drag="x" 
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselItem
            key={`${item?.id ?? index}-${index}`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>
    </div>
  );
}