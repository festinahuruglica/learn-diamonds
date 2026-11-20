"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { GALLERY } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Gallery() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const open = active !== null;

  const close = useCallback(() => setActive(null), []);
  const step = useCallback((direction: number) => {
    setActive((current) => {
      if (current === null) return current;
      return (current + direction + GALLERY.length) % GALLERY.length;
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = window.requestAnimationFrame(() => closeRef.current?.focus());
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const onTrap = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !dialogRef.current) return;
    const nodes = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>("button, [href]"),
    );
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const current = active !== null ? GALLERY[active] : null;

  return (
    <section id="gallery" className="bg-ivory-deep text-ink">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow text-muted">Gallery</p>
            <h2 className="display mt-4 max-w-[14ch] text-[clamp(3.1rem,6vw,5.8rem)]">
              An editorial <span className="italic">of light.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-sm text-[0.98rem] leading-relaxed text-ink/70">
              Portraits, stones, and the quiet tools of the bench — arranged as a fashion story,
              not a catalogue.
            </p>
          </Reveal>
        </div>

        <div className="mosaic">
          {GALLERY.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className={`group relative block h-full min-h-0 w-full cursor-zoom-in overflow-hidden bg-ink text-left ${item.mobileAspect} lg:aspect-auto ${item.area}`}
              onClick={() => setActive(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 md:p-5">
                <span>
                  <span className="block font-serif text-2xl text-ivory md:text-3xl">{item.title}</span>
                  <span className="mt-1 hidden text-[0.78rem] text-ivory/75 sm:block">{item.caption}</span>
                </span>
                <span className="text-[0.62rem] tracking-[0.22em] text-champagne-soft uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current && active !== null && (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="fixed inset-0 z-[70] flex flex-col bg-ink/95 text-ivory backdrop-blur-md"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onKeyDown={onTrap}
          >
            <div className="flex items-center justify-between px-5 py-4 md:px-8">
              <p className="text-[0.68rem] tracking-[0.28em] uppercase">
                {String(active + 1).padStart(2, "0")}
                <span className="mx-2 text-ivory/40">/</span>
                {String(GALLERY.length).padStart(2, "0")}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="grid h-11 w-11 place-items-center border border-ivory/30 transition hover:border-ivory"
              >
                <span className="sr-only">Close gallery</span>
                <X strokeWidth={1.25} />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-20">
              <button
                type="button"
                onClick={() => step(-1)}
                className="absolute left-3 z-10 hidden h-12 w-12 place-items-center border border-ivory/25 transition hover:border-ivory md:grid"
                aria-label="Previous image"
              >
                <ArrowLeft strokeWidth={1.25} />
              </button>
              <motion.div
                key={current.src}
                className="relative h-[68vh] w-full max-w-5xl"
                drag={reduce ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -70) step(1);
                  if (info.offset.x > 70) step(-1);
                }}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </motion.div>
              <button
                type="button"
                onClick={() => step(1)}
                className="absolute right-3 z-10 hidden h-12 w-12 place-items-center border border-ivory/25 transition hover:border-ivory md:grid"
                aria-label="Next image"
              >
                <ArrowRight strokeWidth={1.25} />
              </button>
            </div>

            <div className="flex items-end justify-between gap-6 px-5 py-6 md:px-10">
              <div>
                <h3 id={titleId} className="font-serif text-3xl md:text-4xl">
                  {current.title}
                </h3>
                <p className="mt-2 max-w-md text-sm text-ivory/70">{current.caption}</p>
              </div>
              <div className="flex gap-2 md:hidden">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="grid h-11 w-11 place-items-center border border-ivory/30"
                  aria-label="Previous image"
                >
                  <ArrowLeft strokeWidth={1.25} />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="grid h-11 w-11 place-items-center border border-ivory/30"
                  aria-label="Next image"
                >
                  <ArrowRight strokeWidth={1.25} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
