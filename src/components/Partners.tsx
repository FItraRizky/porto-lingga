"use client";

import { useLanguage } from "@/context/LanguageContext";
import LogoLoop from "./LogoLoop";

export default function Partners() {
  const { t } = useLanguage();

  const logos = [
    {
      src: "/pro-2-rri-bandarlampung-seeklogo.png",
      alt: "RRI PRO 2 Bandar Lampung",
      width: 120,
      height: 120,
    },
    {
      src: "/187867e7-fc9f-49df-9739-60bd216a0807_removalai_preview.png",
      alt: "SMAN 5 Bandar Lampung",
      width: 120,
      height: 120,
    },
    {
      src: "/pro-2-rri-bandarlampung-seeklogo.png",
      alt: "RRI PRO 2 Bandar Lampung",
      width: 120,
      height: 120,
    },
    {
      src: "/187867e7-fc9f-49df-9739-60bd216a0807_removalai_preview.png",
      alt: "SMAN 5 Bandar Lampung",
      width: 120,
      height: 120,
    },
  ];

  return (
    <section className="border-b border-[var(--border)] text-[var(--foreground)] py-16">
      <div className="p-6 md:p-12 border-b border-[var(--border)]">
        <h2 className="text-5xl font-black uppercase tracking-tighter md:text-8xl text-center">
          {t.partners?.title || "Partners"}
        </h2>
      </div>

      <div className="py-12">
        <LogoLoop
          logos={logos}
          speed={80}
          direction="left"
          logoHeight={80}
          gap={64}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="var(--background)"
        />
      </div>
    </section>
  );
}
