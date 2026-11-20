import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GALLERY, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/content";
import { InstagramMark } from "./InstagramMark";
import { Reveal } from "./Reveal";

const TILES = [GALLERY[3], GALLERY[2], GALLERY[4], GALLERY[5], GALLERY[7], GALLERY[8]];

export function InstagramSection() {
  return (
    <section id="instagram" className="bg-ink text-ivory" aria-labelledby="instagram-heading">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-3 text-champagne-soft">
              <InstagramMark className="h-4 w-4" />
              Instagram
            </p>
            <h2 id="instagram-heading" className="display mt-5 max-w-[14ch] text-[clamp(3rem,5.6vw,5.4rem)]">
              Follow the World of Learn Diamonds.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="md:text-right">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="font-serif text-3xl tracking-wide text-ivory transition hover:text-champagne-soft"
            >
              {INSTAGRAM_HANDLE}
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory/65 md:ml-auto">
              Models, gemstones, couture, and the daily practice of looking closely. The
              photographs themselves live on the feed.
            </p>
            <a className="btn btn-line mt-6" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Follow on Instagram
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.25} />
            </a>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:mt-16">
          {TILES.map((item) => (
            <li key={item.src}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden bg-panel"
                aria-label={`Follow ${INSTAGRAM_HANDLE} on Instagram`}
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, 50vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-ink/0 transition duration-500 group-hover:bg-ink/35" />
                <span className="absolute right-3 bottom-3 grid h-9 w-9 place-items-center border border-ivory/0 text-ivory opacity-0 transition duration-500 group-hover:border-ivory/70 group-hover:opacity-100">
                  <InstagramMark className="h-4 w-4" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
