"use client";

import { Mic2, Megaphone, PenTool, Users } from "lucide-react";

const services = [
  {
    title: "Radio Broadcasting",
    icon: Mic2,
    description:
      "Professional on-air personality with experience in news, entertainment, and interviews.",
  },
  {
    title: "Voice Over (VO)",
    icon: Megaphone,
    description:
      "Versatile voice talent for commercials, narrations, and brand identities.",
  },
  {
    title: "Public Speaking (MC)",
    icon: Users,
    description:
      "Engaging Master of Ceremony for corporate events, weddings, and concerts.",
  },
  {
    title: "Scriptwriting",
    icon: PenTool,
    description:
      "Creative copywriting for radio ads, content planning, and broadcast scripts.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-b border-white text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="group flex flex-col justify-between border-b border-black p-8 last:border-b-0 md:border-b-0 md:border-r lg:border-r dark:border-white"
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
