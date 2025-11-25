"use client";

import Image from "next/image";
import RotatingText from "./RotatingText";

export default function About() {
  return (
    <section id="profile" className="border-b border-white text-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[500px] border-b border-black bg-gray-200 md:border-b-0 md:border-r dark:border-white dark:bg-gray-800 overflow-hidden group">
          <Image
            src="/profile-lingga.jpg"
            alt="Lingga Fani - Radio Announcer"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col justify-center p-8 md:p-16">
          <h2 className="mb-8 text-4xl font-black uppercase leading-none tracking-tighter md:text-6xl">
            <RotatingText
              texts={["About Lingga", "The Voice"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-[#ff007f] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-start rounded-lg inline-flex"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.05}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              rotationInterval={3000}
            />
          </h2>
          <p className="text-lg font-medium leading-relaxed md:text-xl">
            Lingga Fani is a professional broadcaster connecting with listeners
            through <span className="font-bold">RRI PRO 2</span>. Bringing
            energy, news, and entertainment to the airwaves.
          </p>
          <p className="mt-6 text-lg font-medium leading-relaxed md:text-xl opacity-80">
            With a passion for storytelling and a dynamic presence, Lingga has
            become a staple voice for the generation, bridging the gap between
            traditional radio and modern media consumption.
          </p>
        </div>
      </div>
    </section>
  );
}
