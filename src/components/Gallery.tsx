"use client";

import { useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";

gsap.registerPlugin(Draggable);

const images = [
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
      className="border-b border-white text-white overflow-hidden bg-black py-20"
    >
      <div className="p-6 md:p-12 mb-10 border-b border-white/20">
        <h2 className="text-5xl font-black uppercase tracking-tighter md:text-8xl text-center">
          {t.gallery.title}
        </h2>
      </div>

      <div className="gallery-wrapper relative w-full overflow-hidden cursor-grab active:cursor-grabbing py-10">
        <div ref={containerRef} className="flex gap-8 px-8 w-max">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] shrink-0 rounded-xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-300 border border-white/10"
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover pointer-events-none select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
