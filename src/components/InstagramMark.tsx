export function InstagramMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="17.15" cy="6.85" r="0.8" fill="currentColor" />
    </svg>
  );
}
