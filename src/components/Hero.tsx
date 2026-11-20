"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

function Line({ children, delay }: { children: ReactNode; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "112%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.15, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <section id="home" ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink">
      <motion.div
        className="absolute inset-0 scale-110"
        style={reduce ? undefined : { y }}
      >
        <Image
          src="/images/hero-campaign.jpg"
          alt="Editorial portrait of a woman in black silk wearing a diamond necklace and diamond ear clips."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[30%_20%] md:object-[24%_center]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/25 md:bg-gradient-to-l md:from-ink/80 md:via-ink/20 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent md:from-ink/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-12 md:items-end md:px-12 md:pb-16 md:text-right">
        <motion.p
          className="eyebrow mb-6 text-champagne-soft"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          Boston · Nantucket · Smoky Mountains
        </motion.p>
        <h1 className="display max-w-[12ch] text-[clamp(3.35rem,7.6vw,7.15rem)] text-ivory md:ml-auto">
          <Line delay={0.2}>Discover the</Line>
          <Line delay={0.32}>
            <span className="italic">World of Diamonds.</span>
          </Line>
        </h1>
        <motion.p
          className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-ivory/80 md:text-base"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48, ease: EASE }}
        >
          Learn Diamonds is the practice of Willem K. Learn — couture jewelry designer,
          curator, and client advocate. Diamonds, precious color, and jewelry worn as art.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.62, ease: EASE }}
        >
          <a className="btn btn-light" href="#discover">
            Discover More
          </a>
          <a className="btn btn-line" href="#about">
            Explore Learn Diamonds
          </a>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-8 hidden flex-col items-center gap-3 text-[0.62rem] tracking-[0.3em] text-ivory/80 uppercase md:flex"
      >
        <span>Scroll</span>
        <span className="relative h-16 w-px overflow-hidden bg-ivory/30">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-ivory"
            animate={reduce ? undefined : { y: ["-120%", "220%"] }}
            transition={reduce ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </a>
    </section>
  );
}
