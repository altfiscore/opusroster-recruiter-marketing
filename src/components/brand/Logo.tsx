// src/components/brand/Logo.tsx
// OpusRoster brand logo - uses EXACT paths from Asset 1.svg (Variant 1, White/Black backgrounds).
// Path 1 (cls-1): teal "o" (irregular oval with hook) - #3AB0A2
// Path 2 (cls-2): coral "r" (swerving) - #FF6B6B
// Brand rule: Logo MUST always be upright (no rotation).

interface LogoProps {
  size?: number;
  /** "color" = brand teal+coral. "white" = solid white (for dark bg). "dark" = solid graphite (for monochrome) */
  variant?: "color" | "white" | "dark";
  className?: string;
  ariaLabel?: string;
}

export function Logo({
  size = 28,
  variant = "color",
  className,
  ariaLabel = "OpusRoster",
}: LogoProps) {
  const fillO =
    variant === "white" ? "#FFFFFF" : variant === "dark" ? "#2A2D30" : "#3AB0A2";
  const fillR =
    variant === "white" ? "#FFFFFF" : variant === "dark" ? "#2A2D30" : "#FF6B6B";

  // viewBox is 338.1 x 330.75 from official brand asset
  const aspect = 330.75 / 338.1;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 338.1 330.75"
      width={size}
      height={size * aspect}
      role="img"
      aria-label={ariaLabel}
      className={className}
    >
      <path
        d="m253.03,156.81c-11.45-56.19-103.77-143.19-179.76-122.42C8.01,52.22-15.49,131.34,10.2,199.02c15.96,42.05,69.66,127.66,144.75,131.61,76.52,4.03,113.87-96.32,98.08-173.83Zm-105.29,113.14c-61.8-3.04-88.12-70.43-93.21-86.42-8.07-25.33-12.47-83.99,34.45-96.97,42.14-11.65,108.81,25.84,121.07,72.95,12.66,48.63-13.69,112.83-62.31,110.44Z"
        fill={fillO}
      />
      <path
        d="m220.06,32.93l48.63-6.59,2.03,34.45s5.54-23.24,9.63-31.41c6.08-12.16,20.96-22.92,35.16-26.34C329.32-.28,335.56,0,335.56,0l2.53,54.71s-17.04,1.64-24.06,5.7c-26.09,15.07-27.25,48.82-30.65,73.33-5.45,39.26-10.29,76.58-17.6,103.72-17.1,63.45-66.65,82.37-66.65,82.37,0,0,5.16-25,0-38.67-5.16-13.68-20.73-19.69-20.73-19.69,0,0,30.24-19.57,34.68-69.72,4.44-50.15,7.48-102.58,7.48-116.26s-.51-42.55-.51-42.55Z"
        fill={fillR}
      />
    </svg>
  );
}

/** Logo + "OpusRoster" wordmark — for headers, sidebars */
export function LogoWordmark({
  size = 26,
  variant = "color",
  textColor,
  className,
}: LogoProps & { textColor?: string }) {
  const resolvedTextColor =
    textColor ?? (variant === "white" ? "#FFFFFF" : "#2A2D30");

  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <Logo size={size} variant={variant} />
      <span
        className="font-semibold tracking-tight"
        style={{ color: resolvedTextColor, fontSize: `${Math.max(15, size * 0.62)}px` }}
      >
        OpusRoster
      </span>
    </div>
  );
}

/**
 * Decorative large-scale logo used as background ornament.
 * Use on sign-in/marketing right panels — fills most of viewport with very low opacity.
 */
export function LogoBreathe({
  className,
  variant = "color",
}: { className?: string; variant?: "color" | "white" | "dark" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      <div className="absolute right-[-15%] top-1/2 -translate-y-1/2 opacity-[0.05]">
        <Logo size={780} variant={variant} />
      </div>
    </div>
  );
}
