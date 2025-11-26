"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="border-b border-white text-white">
      <div className="p-6 md:p-12 border-b border-black dark:border-white">
        <h2 className="text-5xl font-black uppercase tracking-tighter md:text-8xl">
          {t.gallery.title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 h-[80vh]">
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="relative h-full border-b border-black md:border-b-0 md:border-r bg-gray-100 dark:border-white dark:bg-gray-900 group overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold uppercase opacity-30">
              {t.gallery.items[0]}
            </span>
          </div>
          {/* Replace with <Image /> */}
        </motion.div>
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="relative h-full border-b border-black md:border-b-0 md:border-r bg-gray-200 dark:border-white dark:bg-gray-800 group overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold uppercase opacity-30">
              {t.gallery.items[1]}
            </span>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="relative h-full bg-gray-300 dark:bg-gray-700 group overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold uppercase opacity-30">
              {t.gallery.items[2]}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
