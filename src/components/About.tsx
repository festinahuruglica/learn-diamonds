import Image from "next/image";
import { ImageReveal, Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-ivory text-ink">
      <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12 lg:gap-10 lg:py-40">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-muted">Learn Diamonds</p>
            <h2 className="display mt-5 text-[clamp(3.1rem,5.6vw,5.6rem)]">
              More Than Beauty.
              <span className="mt-2 block italic">A World of Diamonds.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 max-w-xl space-y-5 text-[1.02rem] leading-relaxed text-ink/75">
              <p>
                Learn Diamonds is the practice of Willem K. Learn, couture jewelry designer,
                curator, and client advocate. The work is based between ACK, Boston, and the
                Smoky Mountains.
              </p>
              <p>
                It is a world of diamonds and precious color, of jewelry composed to be worn,
                and of the attention it takes to choose a stone for someone in particular.
                The pictures return to the same subjects: a face in diamonds, a gemstone in
                the light, and the hand that studies it.
              </p>
            </div>
            <blockquote className="mt-10 border-l border-champagne pl-5">
              <p className="font-serif text-3xl leading-tight italic md:text-4xl">
                “I’m Your Jeweler Now.”
              </p>
              <footer className="mt-3 text-[0.72rem] tracking-[0.22em] text-muted uppercase">
                Willem K. Learn
              </footer>
            </blockquote>
            <p className="mt-8 text-[0.72rem] tracking-[0.22em] text-ink/60 uppercase">
              Boston · Nantucket · Smoky Mountains
            </p>
          </Reveal>
        </div>

        <div className="relative lg:col-span-7">
          <ImageReveal className="relative aspect-[4/5] overflow-hidden bg-ink sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/expert-hands.jpg"
              alt="A jeweler’s hands holding a round brilliant diamond with tweezers, a loupe beside them on black velvet."
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover object-[center_35%]"
            />
          </ImageReveal>
          <ImageReveal className="relative z-10 -mt-20 ml-auto w-[58%] overflow-hidden border-[8px] border-ivory shadow-[0_20px_50px_rgb(11_10_9_/_0.16)] sm:w-[46%] lg:absolute lg:right-8 lg:bottom-8 lg:mt-0 lg:w-[42%]">
            <div className="relative aspect-square">
              <Image
                src="/images/diamond-macro.jpg"
                alt="Close photograph of a round brilliant diamond."
                fill
                sizes="(min-width: 1024px) 22vw, 50vw"
                className="object-cover"
              />
            </div>
          </ImageReveal>
          <p className="mt-4 text-[0.68rem] tracking-[0.24em] text-muted uppercase lg:absolute lg:-bottom-8 lg:left-0">
            Studied by hand
          </p>
        </div>
      </div>
    </section>
  );
}
