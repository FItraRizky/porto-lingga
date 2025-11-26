"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import FlowingMenu from "./FlowingMenu";

export default function StaggeredMenu() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: t.menu.profile, href: "#profile" },
    { name: t.menu.stats, href: "#stats" },
    { name: t.menu.broadcasts, href: "#broadcasts" },
    { name: t.menu.services, href: "#services" },
    { name: t.menu.achievements, href: "#achievements" },
    { name: t.menu.testimonials, href: "#testimonials" },
    { name: t.menu.gallery, href: "#gallery" },
    { name: t.menu.contact, href: "#contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0] as [number, number, number, number],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
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

  return (
    <>
      <button
        onClick={toggleMenu}
        className="relative z-[70] flex items-center gap-2 font-bold uppercase tracking-widest"
      >
        <span className="text-sm">{t.menu.label}</span>
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
                className="flex-1 w-full relative z-50 overflow-hidden"
              >
                <FlowingMenu
                  items={menuItems.map((item) => ({
                    link: item.href,
                    text: item.name,
                    image: "/profile-lingga.jpg",
                    onClick: toggleMenu,
                  }))}
                />
              </motion.div>

              <div className="flex justify-between text-sm font-medium uppercase tracking-widest text-gray-400">
                <span>{t.menu.location}</span>
                <span>{t.menu.est}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
