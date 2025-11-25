"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const menuItems = [
  { name: "Profile", href: "#profile" },
  { name: "Stats", href: "#stats" },
  { name: "Broadcasts", href: "#broadcasts" },
  { name: "Services", href: "#services" },
  { name: "Achievements", href: "#achievements" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function StaggeredMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="relative z-[70] flex items-center gap-2 font-bold uppercase tracking-widest"
      >
        <span className="text-sm">Menu</span>
        {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 z-[60] h-screen w-full origin-top bg-black text-white p-10 flex flex-col justify-center"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-lg font-black uppercase tracking-tighter">
                  Lingga Fani
                </span>
              </div>

              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-4"
              >
                {menuItems.map((link) => (
                  <div key={link.name} className="overflow-hidden">
                    <motion.div
                      variants={mobileLinkVars}
                      className="text-5xl font-black uppercase tracking-tighter sm:text-7xl"
                    >
                      <Link
                        href={link.href}
                        onClick={toggleMenu}
                        className="flex items-center gap-4 group"
                      >
                        {link.name}
                        <ArrowRight
                          className="opacity-0 -translate-x-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                          size={48}
                        />
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </motion.div>

              <div className="flex justify-between text-sm font-medium uppercase tracking-widest text-gray-400">
                <span>Bandar Lampung, ID</span>
                <span>Est. 2025</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
