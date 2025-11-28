"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Marquee from "./Marquee";
import GradientText from "./GradientText";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[90vh] flex-col justify-between border-b border-[var(--border)] text-[var(--foreground)] overflow-hidden">
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <GradientText
            colors={["#CF4B00", "#9CC6DB", "#DDBA7D", "#CF4B00"]}
            animationSpeed={6}
            className="text-6xl font-black uppercase leading-[0.9] tracking-tighter sm:text-8xl md:text-9xl lg:text-[10rem]"
          >
            {t.hero.title}
          </GradientText>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <GradientText
            colors={["#CF4B00", "#9CC6DB", "#CF4B00"]}
            animationSpeed={4}
            className="mt-8 text-xl font-bold uppercase tracking-widest sm:text-2xl"
          >
            {t.hero.subtitle}
          </GradientText>
        </motion.div>
      </div>

      <Marquee duration={40} className="border-t border-[var(--border)]">
        <span className="text-4xl font-black uppercase mx-4">
          {t.hero.marquee.onAir}
        </span>
        <span className="text-4xl font-black uppercase mx-4">•</span>
        <span className="text-4xl font-black uppercase mx-4">
          {t.hero.marquee.frequency}
        </span>
        <span className="text-4xl font-black uppercase mx-4">•</span>
        <span className="text-4xl font-black uppercase mx-4">
          {t.hero.marquee.station}
        </span>
        <span className="text-4xl font-black uppercase mx-4">•</span>
        <span className="text-4xl font-black uppercase mx-4">
          {t.hero.marquee.live}
        </span>
        <span className="text-4xl font-black uppercase mx-4">•</span>
        <span className="text-4xl font-black uppercase mx-4">
          {t.hero.marquee.mc}
        </span>
        <span className="text-4xl font-black uppercase mx-4">•</span>
      </Marquee>
    </section>
  );
}
