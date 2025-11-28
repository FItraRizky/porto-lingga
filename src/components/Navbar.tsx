"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import StaggeredMenu from "./StaggeredMenu";

const navLinks = [
  { name: "Profile", href: "#profile" },
  { name: "Broadcasts", href: "#broadcasts" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show navbar at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm text-[var(--foreground)]"
        >
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter uppercase"
            >
              Lingga Fani
            </Link>

            <div className="flex items-center gap-6">
              {/* Language Toggle */}
              <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm">
                <button
                  onClick={() => setLanguage("en")}
                  className={`${
                    language === "en"
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted-foreground)]"
                  } transition-colors hover:text-[var(--foreground)]`}
                >
                  EN
                </button>
                <span className="text-[var(--muted-foreground)]">/</span>
                <button
                  onClick={() => setLanguage("id")}
                  className={`${
                    language === "id"
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted-foreground)]"
                  } transition-colors hover:text-[var(--foreground)]`}
                >
                  ID
                </button>
              </div>

              {/* Mobile Menu */}
              <StaggeredMenu
                items={[
                  {
                    label: t.menu.profile,
                    link: "#profile",
                    ariaLabel: t.menu.profile,
                  },
                  {
                    label: t.menu.stats,
                    link: "#stats",
                    ariaLabel: t.menu.stats,
                  },
                  {
                    label: t.menu.broadcasts,
                    link: "#broadcasts",
                    ariaLabel: t.menu.broadcasts,
                  },
                  {
                    label: t.menu.services,
                    link: "#services",
                    ariaLabel: t.menu.services,
                  },
                  {
                    label: t.menu.achievements,
                    link: "#achievements",
                    ariaLabel: t.menu.achievements,
                  },
                  {
                    label: t.menu.testimonials,
                    link: "#testimonials",
                    ariaLabel: t.menu.testimonials,
                  },
                  {
                    label: t.menu.gallery,
                    link: "#gallery",
                    ariaLabel: t.menu.gallery,
                  },
                  {
                    label: t.menu.contact,
                    link: "#contact",
                    ariaLabel: t.menu.contact,
                  },
                ]}
                socialItems={[
                  { label: "Instagram", link: "https://instagram.com" },
                  { label: "LinkedIn", link: "https://linkedin.com" },
                  { label: "Twitter", link: "https://twitter.com" },
                ]}
                menuButtonColor="#CF4B00"
                openMenuButtonColor="#CF4B00"
                accentColor="#CF4B00"
                position="right"
              />
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
