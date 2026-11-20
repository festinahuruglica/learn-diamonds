type LogoProps = {
  className?: string;
  href?: string;
};

export function Logo({ className = "", href = "#home" }: LogoProps) {
  const mark = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative grid h-9 w-9 shrink-0 place-items-center" aria-hidden="true">
        <span className="absolute inset-[2px] rotate-45 border border-current" />
        <span className="font-serif text-[0.95rem] leading-none tracking-[-0.04em]">LD</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.2rem] tracking-[0.16em] uppercase">Learn</span>
        <span className="mt-[0.28rem] text-[0.58rem] tracking-[0.34em] uppercase opacity-75">
          Diamonds
        </span>
      </span>
    </span>
  );

  if (!href) return mark;

  return (
    <a href={href} className="inline-flex rounded-sm" aria-label="Learn Diamonds, home">
      {mark}
    </a>
  );
}
