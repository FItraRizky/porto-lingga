"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import CountUp from "./CountUp";

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { label: t.stats.years, value: 5, suffix: "+" },
    { label: t.stats.events, value: 200, suffix: "+" },
    { label: t.stats.listeners, value: 50, suffix: "k+" },
    { label: t.stats.partners, value: 30, suffix: "+" },
  ];

  return (
    <section
      id="stats"
      className="border-b border-[var(--border)] text-[var(--foreground)]"
    >
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center border-b border-r border-[var(--border)]/20 p-12 last:border-r-0 md:border-b-0"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="text-6xl font-black tracking-tighter md:text-7xl"
            >
              <CountUp
                to={stat.value}
                from={0}
                duration={2.5}
                delay={index * 0.1}
                className="inline-block"
              />
              <span>{stat.suffix}</span>
            </motion.div>
            <span className="mt-2 text-sm font-bold uppercase tracking-widest opacity-60">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
