// Minimal outline icon set used across Roavio in place of emoji.
// Consistent stroke style (24x24 viewBox, currentColor) so icons inherit
// text color and size from their parent via className.

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconCoin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.5 9.3c0-1 .9-1.6 2.2-1.6 1.4 0 2.3.6 2.3 1.5 0 1.9-4.5 1.3-4.5 3.3 0 1 1 1.6 2.3 1.6 1.3 0 2.2-.6 2.2-1.6" />
      <line x1="12" y1="6.3" x2="12" y2="7.7" />
      <line x1="12" y1="16.3" x2="12" y2="17.7" />
    </svg>
  );
}

export function IconWifi(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 8.8a14.5 14.5 0 0 1 19 0" />
      <path d="M5.5 12.4a10 10 0 0 1 13 0" />
      <path d="M8.7 16a5.5 5.5 0 0 1 6.6 0" />
      <circle cx="12" cy="19.3" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2 19 6v5.5c0 4.8-3 8-7 9.3-4-1.3-7-4.5-7-9.3V6l7-2.8z" />
      <path d="M9 12.2 11.2 14.4 15.4 10" />
    </svg>
  );
}

export function IconSun(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4.2" />
      <line x1="12" y1="2.2" x2="12" y2="4.6" />
      <line x1="12" y1="19.4" x2="12" y2="21.8" />
      <line x1="2.2" y1="12" x2="4.6" y2="12" />
      <line x1="19.4" y1="12" x2="21.8" y2="12" />
      <line x1="4.9" y1="4.9" x2="6.6" y2="6.6" />
      <line x1="17.4" y1="17.4" x2="19.1" y2="19.1" />
      <line x1="4.9" y1="19.1" x2="6.6" y2="17.4" />
      <line x1="17.4" y1="6.6" x2="19.1" y2="4.9" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.3 14.6 9.1 21 9.7 16.2 14 17.6 20.3 12 17.1 6.4 20.3 7.8 14 3 9.7 9.4 9.1 12 3.3Z" />
    </svg>
  );
}

export function IconUmbrella(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12.5a8 8 0 0 1 16 0H4Z" />
      <line x1="12" y1="12.5" x2="12" y2="20" />
      <path d="M12 20a2 2 0 0 1-3.5 1.3" />
      <line x1="12" y1="4.5" x2="12" y2="6.3" />
    </svg>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21.5s6.7-7 6.7-12.2a6.7 6.7 0 1 0-13.4 0c0 5.2 6.7 12.2 6.7 12.2Z" />
      <circle cx="12" cy="9.3" r="2.3" />
    </svg>
  );
}

export function IconMessage(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20.5 11.3a8 8 0 0 1-8 8H12a7.9 7.9 0 0 1-3.6-.85L3.5 20l1.4-4.6A7.9 7.9 0 0 1 4 11.3a8 8 0 0 1 8-8h.5a8 8 0 0 1 8 8Z" />
    </svg>
  );
}

export function IconScale(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <line x1="12" y1="3" x2="12" y2="20.5" />
      <line x1="6.5" y1="18.5" x2="17.5" y2="18.5" />
      <path d="M5 7h5.5M13.5 7H19" />
      <path d="M5 7 2.5 12a2.6 2.6 0 0 0 5 0L5 7Z" />
      <path d="M19 7 16.5 12a2.6 2.6 0 0 0 5 0L19 7Z" />
    </svg>
  );
}

export function IconHeart(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M12 20.3c-.3 0-.6-.1-.8-.3-3.8-3.1-6.3-5.3-7.9-7.4C1.7 10.7 1 9.1 1 7.5 1 4.9 3.1 3 5.6 3c1.5 0 2.9.7 3.9 1.9.2.3.6.3.9 0C11.4 3.7 12.8 3 14.4 3 16.9 3 19 4.9 19 7.5c0 1.6-.7 3.2-2.3 5.1-1.6 2.1-4.1 4.3-7.9 7.4-.2.2-.5.3-.8.3z" />
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <line x1="16.3" y1="16.3" x2="21" y2="21" />
    </svg>
  );
}
