"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

// Types
interface iCardItem {
  title: string;
  description: string;
  tag: string;
  year?: string | number;
  src: string;
  link: string;
  color: string;
  textColor: string;
}

interface iCardProps
  extends Omit<iCardItem, "src" | "link" | "tag"> {
  i: number;
  src: string;
  link: string;
  tag: string;
}

// Components
const Card: FC<iCardProps> = ({
  title,
  description,
  tag,
  year,
  color,
  textColor,
  i,
  src,
  link,
}) => {
  return (
    <div className="sticky top-0 flex h-screen items-center justify-center px-4 md:p-0">
      <Link
        href={link}
        className="group relative mx-auto flex h-[360px] w-full max-w-[860px] items-center justify-center overflow-hidden
          bg-zinc-900 px-3 pb-4 pl-3 pr-3 pt-3 shadow-md
          md:h-[500px] md:w-[760px]
          focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4"
        aria-label={`View ${title} project`}
      >
        {/* Background image */}
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) calc(100vw - 32px), 600px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          priority={i === 0}
        />

        {/* Base dark overlay */}
        <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/20" />

        {/* Gradient overlay */}
        <div
          className="
            absolute inset-x-0 bottom-0 h-[65%]
            bg-gradient-to-t from-black/90 via-black/45 to-transparent
            opacity-70
            transition-opacity duration-500 ease-out
            group-hover:opacity-100
          "
        />

        {/* Project information */}
        <div
          className="
            absolute inset-x-0 bottom-0 z-10
            flex items-end justify-between gap-4
            p-6 md:p-8
            opacity-0
            translate-y-3
            transition-all duration-500 ease-out
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          {/* Title + year */}
          <div className="flex min-w-0 flex-col gap-1">
            <h3
              className="truncate font-['Montserrat'] text-2xl font-medium md:text-3xl"
              style={{ color: textColor }}
            >
              {title}
            </h3>

            {year && (
              <span className="font-['Montserrat'] text-sm font-normal text-gray-200">
                {year}
              </span>
            )}
          </div>

          {/* Category */}
          <p
            className="shrink-0 text-right font-['Montserrat'] text-sm font-normal md:text-base"
            style={{ color: textColor }}
          >
            {tag}
          </p>
        </div>
      </Link>
    </div>
  );
};

/**
 * CardSlide component displays a series of cards
 * in a vertical sticky stacking scroll layout.
 */
interface iCardSlideProps {
  items: iCardItem[];
}

const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
  return (
    <div className="min-h-screen">
      {items.map((project, i) => (
        <Card
          key={`p_${i}`}
          {...project}
          i={i}
        />
      ))}
    </div>
  );
};

export {
  CardsParallax,
  type iCardItem,
};