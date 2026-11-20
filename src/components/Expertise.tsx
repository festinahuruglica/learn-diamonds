import Image from "next/image";
import { Reveal } from "./Reveal";

const PRINCIPLES = [
  {
    index: "01",
    title: "Design",
    copy: "Couture jewelry, drawn for the person who will wear it.",
  },
  {
    index: "02",
    title: "Curation",
    copy: "Diamonds and colored gemstones, gathered with a point of view.",
  },
  {
    index: "03",
    title: "Advocacy",
    copy: "A client, met directly. The work of a client advocate.",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="bg-ink text-ivory">
      <div className="grid lg:min-h-[100svh] lg:grid-cols-12">
        <div className="relative min-h-[78vh] lg:col-span-7 lg:min-h-full">
          <Image
            src="/images/expert-hands.jpg"
            alt="Hands in a dark suit examining a round brilliant diamond with tweezers."
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/20 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-ink" />
        </div>
        <div className="flex flex-col justify-center px-5 py-20 md:px-12 lg:col-span-5 lg:py-24 lg:pr-16 lg:pl-10">
          <Reveal>
            <p className="eyebrow text-champagne-soft">The practice</p>
            <h2 className="display mt-5 text-[clamp(3.15rem,5vw,5.2rem)]">
              Every Diamond <span className="italic">Has a Story.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 space-y-5 text-[1.02rem] leading-relaxed text-ivory/75">
              <p>
                The story begins with looking. A diamond is turned in the hand. Color is chosen
                beside it. Jewelry is designed to live on the body, not only in a case.
              </p>
              <p>
                Willem K. Learn works as a couture jewelry designer, curator, and client advocate —
                in Boston, on Nantucket, and in the Smoky Mountains. Learn Diamonds is that
                practice.
              </p>
            </div>
            <ul className="mt-12 divide-y divide-ivory/15 border-y border-ivory/15">
              {PRINCIPLES.map((item) => (
                <li key={item.title} className="grid grid-cols-[auto_1fr] gap-5 py-5">
                  <span className="pt-1 text-[0.68rem] tracking-[0.22em] text-champagne">{item.index}</span>
                  <span>
                    <span className="block font-serif text-2xl">{item.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ivory/65">{item.copy}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
