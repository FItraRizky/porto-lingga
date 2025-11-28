"use client";

import { useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";
import PixelCard from "./PixelCard";

gsap.registerPlugin(Draggable);

const images = [
  {
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    colors: "#c084fc,#a855f7,#7e22ce", // Purple/Concert vibes
  },
  {
    src: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    colors: "#fca5a5,#f87171,#ef4444", // Red/Warm tones
  },
  {
    src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    colors: "#38bdf8,#0ea5e9,#0284c7", // Blue/Cool tones
  },
  {
    src: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    colors: "#4ade80,#22c55e,#16a34a", // Green/Nature
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    colors: "#2dd4bf,#14b8a6,#0d9488", // Teal/Nature
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    colors: "#f472b6,#ec4899,#db2777", // Pink/Portrait
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    colors: "#fbbf24,#f59e0b,#d97706", // Amber/Warm
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      Draggable.create(containerRef.current, {
        type: "x",
        edgeResistance: 0.65,
        bounds: ".gallery-wrapper",
        inertia: false,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      className="border-b border-[var(--border)] text-[var(--foreground)] overflow-hidden bg-[var(--background)] py-20"
    >
      <div className="p-6 md:p-12 mb-10 border-b border-[var(--border)]/20">
        <h2 className="text-5xl font-black uppercase tracking-tighter md:text-8xl text-center">
          {t.gallery.title}
        </h2>
      </div>

      <div className="gallery-wrapper relative w-full overflow-hidden cursor-grab active:cursor-grabbing py-10">
        <div ref={containerRef} className="flex gap-8 px-8 w-max">
          {images.map((img, i) => (
            <PixelCard
              key={i}
              colors={img.colors}
              className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] shrink-0 group bg-[var(--muted)]"
            >
              <div className="absolute inset-0">
                <Image
                  src={img.src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover pointer-events-none select-none rounded-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  draggable={false}
                />
              </div>
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
}
