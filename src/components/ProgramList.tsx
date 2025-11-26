"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Mic, Radio, Calendar } from "lucide-react";

export default function ProgramList() {
  const { t } = useLanguage();

  return (
    <section id="broadcasts" className="border-b border-white text-white">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 border-b border-black p-6 md:col-span-4 md:border-b-0 md:border-r dark:border-white">
          <h2 className="sticky top-24 text-5xl font-black uppercase leading-none tracking-tighter">
            {t.programs.title}
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-600 dark:text-gray-400">
            {t.programs.subtitle}
          </p>
        </div>

        <div className="col-span-1 md:col-span-8">
          {t.programs.items.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col gap-4 border-b border-black p-6 transition-colors hover:bg-black hover:text-white last:border-b-0 md:flex-row md:items-center md:justify-between dark:border-white dark:hover:bg-white dark:hover:text-black"
            >
              <div className="flex-1">
                <h3 className="text-3xl font-black uppercase tracking-tight">
                  {program.name}
                </h3>
                <p className="mt-2 text-sm font-medium opacity-70 group-hover:opacity-100">
                  {program.description}
                </p>
              </div>

              <div className="flex flex-col gap-2 md:items-end">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                  <Mic size={16} />
                  {program.role}
                </div>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                  <Radio size={16} />
                  {program.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
