"use client";

import { motion } from "framer-motion";
import { Award, Radio, Mic, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Best Radio Personality 2024",
    org: "Indonesian Radio Awards",
  },
  {
    icon: Radio,
    title: "Top Morning Show Host",
    org: "RRI PRO 2 Excellence",
  },
  {
    icon: Mic,
    title: "Outstanding Voice Over Artist",
    org: "Creative Voice Indonesia",
  },
  {
    icon: Trophy,
    title: "MC of the Year Nominee",
    org: "Event Industry Awards",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="border-b border-white text-white"
    >
      <div className="p-6 md:p-12 border-b border-black dark:border-white">
        <h2 className="text-5xl font-black uppercase tracking-tighter md:text-8xl">
          Recognition
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group flex items-start gap-6 border-b border-black p-8 md:border-r md:last:border-r-0 dark:border-white"
          >
            <div className="flex-shrink-0">
              <item.icon size={48} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase leading-tight tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-widest opacity-60">
                {item.org}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
