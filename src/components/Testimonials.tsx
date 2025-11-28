"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section
      id="testimonials"
      className="border-b border-[var(--border)] text-[var(--foreground)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-1 flex items-center justify-center border-b border-[var(--border)] p-12 lg:col-span-4 lg:border-b-0 lg:border-r">
          <h2 className="text-5xl font-black uppercase leading-none tracking-tighter text-center lg:text-left">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="col-span-1 lg:col-span-8">
          {t.testimonials.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col gap-6 border-b border-[var(--border)] p-12 last:border-b-0"
            >
              <p className="text-2xl font-medium leading-tight md:text-3xl">
                "{item.quote}"
              </p>
              <div>
                <p className="text-lg font-black uppercase tracking-wider">
                  {item.author}
                </p>
                <p className="text-sm font-medium opacity-60 uppercase tracking-widest">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
