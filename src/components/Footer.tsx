"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useRef } from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import DotGrid from "./DotGrid";

export default function Footer() {
  const { t } = useLanguage();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <footer
      ref={container}
      id="contact"
      className="relative bg-[var(--foreground)] text-[var(--background)] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-30">
        <DotGrid
          baseColor="#DDBA7D"
          activeColor="#FCF6D9"
          dotSize={5}
          gap={20}
          proximity={100}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center py-20 text-center">
        <motion.h2
          style={{ y, opacity }}
          className="mb-8 text-6xl font-black uppercase tracking-tighter sm:text-8xl md:text-9xl"
        >
          {t.footer.tuneIn}
        </motion.h2>
        <a
          href="mailto:hello@linggafani.com"
          className="mb-12 text-xl font-bold uppercase tracking-widest hover:underline underline-offset-8"
        >
          hello@linggafani.com
        </a>

        <div className="flex gap-8">
          <Link
            href="#"
            className="transform transition-transform hover:scale-110"
          >
            <Instagram size={32} />
          </Link>
          <Link
            href="#"
            className="transform transition-transform hover:scale-110"
          >
            <Linkedin size={32} />
          </Link>
          <Link
            href="#"
            className="transform transition-transform hover:scale-110"
          >
            <Twitter size={32} />
          </Link>
        </div>
      </div>

      <div className="relative z-10 flex justify-between border-t border-[var(--background)]/20 px-6 py-4 text-xs font-medium uppercase tracking-wider">
        <span>© {new Date().getFullYear()} Lingga Fani.</span>
        <span>{t.footer.rights}</span>
      </div>
    </footer>
  );
}
