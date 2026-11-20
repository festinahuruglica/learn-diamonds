"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, NAV } from "@/lib/content";
import { InstagramMark } from "./InstagramMark";
import { Logo } from "./Logo";

export function Header() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((item) => item.href.slice(1));
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0.05, 0.2, 0.45] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-ivory transition-colors duration-500 ${
        scrolled || open ? "bg-ink/95" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.6rem] max-w-[1600px] items-center justify-between px-5 md:h-[5.15rem] md:px-10">
        <Logo />
        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={`text-[0.68rem] tracking-[0.26em] uppercase transition-colors ${
                active === item.href ? "text-champagne-soft" : "text-ivory/80 hover:text-ivory"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X strokeWidth={1.25} /> : <Menu strokeWidth={1.25} />}
        </button>
      </div>
      <span className={`color-thread block transition-opacity duration-500 ${scrolled || open ? "opacity-100" : "opacity-0"}`} />

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-x-0 top-[4.6rem] z-40 h-[calc(100svh-4.6rem)] overflow-y-auto bg-ink md:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <nav className="flex h-full flex-col justify-between px-7 py-10" aria-label="Mobile">
              <ul className="flex flex-col gap-2">
                {NAV.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * index, duration: 0.5 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-2"
                    >
                      <span className="text-[0.65rem] tracking-[0.24em] text-champagne">
                        0{index + 1}
                      </span>
                      <span className="font-serif text-[3.15rem] leading-none">{item.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-[0.72rem] tracking-[0.24em] uppercase"
              >
                <InstagramMark />
                {INSTAGRAM_HANDLE}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
