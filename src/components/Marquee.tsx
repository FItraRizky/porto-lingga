"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
}

export default function Marquee({
  className,
  children,
  reverse = false,
  duration = 20,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "flex overflow-hidden whitespace-nowrap border-y border-black bg-white py-4 text-black dark:border-white dark:bg-black dark:text-white",
        className
      )}
    >
      <motion.div
        className="flex min-w-full shrink-0 items-center gap-10 px-5"
        initial={{ x: reverse ? "-100%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-100%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
      <motion.div
        className="flex min-w-full shrink-0 items-center gap-10 px-5"
        initial={{ x: reverse ? "-100%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-100%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}
