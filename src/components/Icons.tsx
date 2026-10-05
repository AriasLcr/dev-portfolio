interface IconProps {
  className?: string;
}

export function WorkIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="8 6 2 12 8 18" />
      <polyline points="16 6 22 12 16 18" />
      <line x1="13" y1="4" x2="11" y2="20" />
    </svg>
  );
}

export function AnimationIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="5" width="20" height="14" />
      <line x1="2" y1="9" x2="22" y2="9" />
      <line x1="2" y1="15" x2="22" y2="15" />
      <line x1="7" y1="5" x2="7" y2="9" />
      <line x1="12" y1="5" x2="12" y2="9" />
      <line x1="17" y1="5" x2="17" y2="9" />
      <line x1="7" y1="15" x2="7" y2="19" />
      <line x1="12" y1="15" x2="12" y2="19" />
      <line x1="17" y1="15" x2="17" y2="19" />
    </svg>
  );
}

export function AboutIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  );
}
