import { NAV, EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/content";
import { InstagramMark } from "./InstagramMark";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <span className="color-thread block" />
      <div className="mx-auto flex max-w-[1600px] flex-col gap-12 px-5 py-14 md:px-10 md:py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <Logo />
          <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Footer">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.68rem] tracking-[0.24em] text-ivory/75 uppercase transition hover:text-ivory"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-6 border-t border-ivory/10 pt-8 text-sm text-ivory/65 md:flex-row md:items-center">
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <a className="transition hover:text-ivory" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <a className="transition hover:text-ivory" href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>
            <span>Boston · Nantucket · Smoky Mountains</span>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 tracking-[0.18em] uppercase transition hover:text-ivory"
          >
            <InstagramMark className="h-4 w-4" />
            {INSTAGRAM_HANDLE}
          </a>
        </div>
        <p className="text-[0.72rem] tracking-[0.16em] text-ivory/40 uppercase">
          © 2026 Learn Diamonds
        </p>
      </div>
    </footer>
  );
}
