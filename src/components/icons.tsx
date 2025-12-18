export function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6h16v12H4z"
        stroke="currentColor"
        strokeWidth="1.5"
        rx="2"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="-2 -2 28 28"
      fill="none"
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      <path
        d="M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96zM3 8.98h3.96V21H3zM8.98 8.98H13v1.64h.06c.56-1.06 1.94-2.18 4-2.18 4.28 0 5.07 2.82 5.07 6.48V21h-3.96v-5.3c0-1.26-.02-2.88-1.76-2.88-1.77 0-2.04 1.38-2.04 2.8V21H8.98z"
        fill="currentColor"
      />
    </svg>
  );
}


export function GitHubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2a10 10 0 0 0-3.16 19.48c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.18-3.36-1.18-.45-1.14-1.11-1.45-1.11-1.45-.91-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.21-.25-4.54-1.11-4.54-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LocationIcon({
  size = 16,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      {/* Outer pin */}
      <path
        d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 8 12 8 12s8-6.6 8-12c0-4.4-3.6-8-8-8z"
        fill="var(--blue-500)"
      />
      {/* Inner circle */}
      <circle
        cx="12"
        cy="10"
        r="3"
        fill="white"
        opacity="0.9"
      />
    </svg>
  );
}

