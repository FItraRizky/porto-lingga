"use client";

import Link from "next/link";
import { useRef } from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Footer() {
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
      className="bg-black text-white dark:bg-white dark:text-black overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <motion.h2
          style={{ y, opacity }}
          className="mb-8 text-6xl font-black uppercase tracking-tighter sm:text-8xl md:text-9xl"
        >
          Tune In.
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

      <div className="flex justify-between border-t border-white/20 px-6 py-4 text-xs font-medium uppercase tracking-wider dark:border-black/20">
        <span>© {new Date().getFullYear()} Lingga Fani.</span>
        <span>All Rights Reserved.</span>
      </div>
    </footer>
  );
}
