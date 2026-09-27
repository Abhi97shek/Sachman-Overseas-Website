export function InstagramIcon({ className = "size-[18px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className = "size-[18px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M14.5 8.4h2.3V5.7h-2.3c-2.2 0-3.8 1.7-3.8 3.9v1.7H8.4v2.7h2.3V20h2.8v-6h2.3l.4-2.7h-2.7V9.6c0-.7.4-1.2 1-1.2Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "size-[18px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M6.2 9.1H3.7V20h2.5V9.1ZM4.9 3.8c-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6 1.6-.7 1.6-1.6-.7-1.6-1.6-1.6ZM20.2 20h-2.5v-5.4c0-1.5-.5-2.4-1.8-2.4-1 0-1.5.7-1.8 1.3-.1.2-.1.5-.1.9V20H11.5V9.1h2.4v1.5c.4-.7 1.2-1.6 3-1.6 2.2 0 3.3 1.4 3.3 4.5V20Z" />
    </svg>
  );
}
