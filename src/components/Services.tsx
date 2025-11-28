"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Mic2, Megaphone, PenTool, Users } from "lucide-react";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.radio.title,
      icon: Mic2,
      description: t.services.radio.desc,
    },
    {
      title: t.services.vo.title,
      icon: Megaphone,
      description: t.services.vo.desc,
    },
    {
      title: t.services.mc.title,
      icon: Users,
      description: t.services.mc.desc,
    },
    {
      title: t.services.script.title,
      icon: PenTool,
      description: t.services.script.desc,
    },
  ];

  return (
    <section
      id="services"
      className="border-b border-[var(--border)] text-[var(--foreground)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="group flex flex-col justify-between border-b border-[var(--border)] p-8 last:border-b-0 md:border-b-0 md:border-r lg:border-r"
          >
            <div className="mb-8">
              <service.icon size={48} strokeWidth={1.5} className="mb-6" />
              <h3 className="text-2xl font-black uppercase leading-tight tracking-tight">
                {service.title}
              </h3>
            </div>
            <p className="text-sm font-medium leading-relaxed opacity-70 group-hover:opacity-100">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
