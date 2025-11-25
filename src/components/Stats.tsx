"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";

const stats = [
  { label: "Years on Air", value: 5, suffix: "+" },
  { label: "Events Hosted", value: 200, suffix: "+" },
  { label: "Daily Listeners", value: 50, suffix: "k+" },
  { label: "Brand Partners", value: 30, suffix: "+" },
];

export default function Stats() {
  return (
    <section id="stats" className="border-b border-white text-white">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center border-b border-r border-white/20 p-12 last:border-r-0 md:border-b-0"
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
