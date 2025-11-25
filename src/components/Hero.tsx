"use client";

import { motion } from "framer-motion";
import Marquee from "./Marquee";
import GradientText from "./GradientText";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-between border-b border-white text-white overflow-hidden">
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <GradientText
            colors={["#ffffff", "#a855f7", "#3b82f6", "#ffffff"]}
            animationSpeed={6}
            className="text-6xl font-black uppercase leading-[0.9] tracking-tighter sm:text-8xl md:text-9xl lg:text-[10rem]"
          >
            The Voice <br />
            Of Generation
          </GradientText>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <GradientText
            colors={["#ffffff", "#60a5fa", "#ffffff"]}
            animationSpeed={4}
            className="mt-8 text-xl font-bold uppercase tracking-widest sm:text-2xl"
          >
            Radio Announcer at RRI PRO 2
          </GradientText>
        </motion.div>
      </div>

      <Marquee
        duration={40}
        className="border-t border-black dark:border-white"
      >
        <span className="text-4xl font-black uppercase mx-4">ON AIR</span>
        <span className="text-4xl font-black uppercase mx-4">•</span>
        <span className="text-4xl font-black uppercase mx-4">95.3 FM</span>
        <span className="text-4xl font-black uppercase mx-4">•</span>
        <span className="text-4xl font-black uppercase mx-4">RRI PRO 2</span>
        <span className="text-4xl font-black uppercase mx-4">•</span>
        <span className="text-4xl font-black uppercase mx-4">
          LIVE BROADCAST
        </span>
        <span className="text-4xl font-black uppercase mx-4">•</span>
        <span className="text-4xl font-black uppercase mx-4">
          MASTER OF CEREMONY
        </span>
        <span className="text-4xl font-black uppercase mx-4">•</span>
      </Marquee>
    </section>
  );
}
