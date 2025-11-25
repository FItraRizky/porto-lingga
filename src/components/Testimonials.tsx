"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Lingga has an undeniable energy that captivates the audience instantly. A true professional behind the mic.",
    author: "Station Manager",
    role: "RRI PRO 2",
  },
  {
    quote:
      "The perfect MC for our corporate gathering. Witty, engaging, and kept the flow seamless.",
    author: "Sarah D.",
    role: "Event Organizer",
  },
  {
    quote:
      "Voice over work was delivered fast and with exceptional quality. Highly recommended!",
    author: "Creative Director",
    role: "Ad Agency",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-b border-white text-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-1 flex items-center justify-center border-b border-black p-12 lg:col-span-4 lg:border-b-0 lg:border-r dark:border-white">
          <h2 className="text-5xl font-black uppercase leading-none tracking-tighter text-center lg:text-left">
            What <br /> They Say
          </h2>
        </div>

        <div className="col-span-1 lg:col-span-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col gap-6 border-b border-black p-12 last:border-b-0 dark:border-white"
            >
              <p className="text-2xl font-medium leading-tight md:text-3xl">
                "{item.quote}"
              </p>
              <div>
                <p className="text-lg font-black uppercase tracking-wider">
                  {item.author}
                </p>
                <p className="text-sm font-medium opacity-60 uppercase tracking-widest">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
