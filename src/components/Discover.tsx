import Image from "next/image";
import { Reveal } from "./Reveal";

const PANELS = [
  {
    index: "01",
    title: "Diamonds",
    copy: "Light, held still. Diamonds appear here the way they do in the work — close, brilliant, and worth a longer look.",
    image: "/images/diamond-macro.jpg",
    alt: "A round brilliant diamond filling the frame.",
    href: "#gallery",
    layout: "full" as const,
    position: "object-center",
  },
  {
    index: "02",
    title: "Precious Gemstones",
    copy: "Orange, green, purple, and blue recur through the world of Learn Diamonds. Precious color, shown as something to be held and worn.",
    image: "/images/gemstones-still.jpg",
    alt: "Orange, lime, purple, and blue gemstones on ivory silk.",
    href: "#gallery",
    layout: "split" as const,
    imageFirst: false,
    position: "object-center",
  },
  {
    index: "03",
    title: "Fine Jewelry",
    copy: "Couture jewelry on the body. Necklines, ears, and hands — composed with the calm of a fashion campaign.",
    image: "/images/model-ivory.jpg",
    alt: "A woman in ivory silk wearing diamond earrings and a diamond necklace.",
    href: "#gallery",
    layout: "full" as const,
    position: "object-[center_20%]",
  },
  {
    index: "04",
    title: "Diamond Expertise",
    copy: "The other half of the picture is time spent with a single stone. Designer, curator, and client advocate — the practice of looking closely.",
    image: "/images/loupe-still.jpg",
    alt: "A jeweler’s loupe, a loose diamond, and a glove on black velvet.",
    href: "#expertise",
    layout: "split" as const,
    imageFirst: true,
    position: "object-center",
  },
];

function DiscoverLink({ href, tone }: { href: string; tone: "light" | "dark" }) {
  return (
    <a href={href} className={`link-discover mt-8 ${tone === "light" ? "text-ivory" : "text-ink"}`}>
      Discover
      <span className="rule" />
    </a>
  );
}

export function Discover() {
  return (
    <section id="discover" className="bg-ink text-ivory">
      <div className="mx-auto max-w-[1600px] px-5 pt-24 pb-14 md:px-10 md:pt-32 md:pb-16">
        <Reveal>
          <p className="eyebrow text-champagne-soft">Discover</p>
          <h2 className="display mt-5 max-w-[12ch] text-[clamp(3.2rem,6.4vw,6.2rem)]">
            The world, <span className="italic">seen closely.</span>
          </h2>
        </Reveal>
      </div>

      <div>
        {PANELS.map((panel) =>
          panel.layout === "full" ? (
            <article key={panel.title} className="group relative min-h-[92svh] overflow-hidden">
              <Image
                src={panel.image}
                alt={panel.alt}
                fill
                sizes="100vw"
                className={`kenburns object-cover ${panel.position}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/25" />
              <div className="relative z-10 flex min-h-[92svh] flex-col justify-end px-5 py-12 md:px-14 md:py-16">
                <p className="eyebrow text-champagne-soft">
                  {panel.index}
                  <span className="mx-3 opacity-50">/</span>
                  {panel.title}
                </p>
                <h3 className="display mt-4 max-w-[10ch] text-[clamp(3.4rem,7vw,7rem)]">{panel.title}</h3>
                <p className="discover-reveal mt-5 max-w-md text-[0.98rem] leading-relaxed text-ivory/85">
                  {panel.copy}
                </p>
                <div className="discover-reveal">
                  <DiscoverLink href={panel.href} tone="light" />
                </div>
              </div>
            </article>
          ) : (
            <article
              key={panel.title}
              className="group grid min-h-[88svh] bg-ink lg:grid-cols-2"
            >
              <div className={`relative min-h-[68vh] overflow-hidden ${panel.imageFirst ? "lg:order-1" : "lg:order-2"}`}>
                <Image
                  src={panel.image}
                  alt={panel.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`kenburns object-cover ${panel.position}`}
                />
              </div>
              <div
                className={`flex flex-col justify-end bg-ivory px-5 py-16 text-ink md:px-16 md:py-20 ${
                  panel.imageFirst ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <p className="eyebrow text-muted">
                  {panel.index}
                  <span className="mx-3">/</span>
                  Learn Diamonds
                </p>
                <h3 className="display mt-5 text-[clamp(3.2rem,5vw,5.4rem)]">{panel.title}</h3>
                <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-ink/75">{panel.copy}</p>
                <DiscoverLink href={panel.href} tone="dark" />
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  );
}
