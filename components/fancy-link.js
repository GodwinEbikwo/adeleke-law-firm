import Link from "next/link";
import Arrow from "./arrow";

export default function FancyLink({ route, a11yText, label }) {
  return (
    <Link href={route}>
      <a aria-label={a11yText} className="link link--metis">
        {label}
      </a>
    </Link>
  );
}

export function FancyLinkArrow({ route, a11yText, label }) {
  return (
    <Link href={route}>
      <a aria-label={a11yText}>
        <div className="flex space-between w-full align-center">
          <strong>{label}</strong>
          <Arrow />
        </div>
      </a>
    </Link>
  );
}

export function FancyLinkArrowWhite({ route, a11yText, label }) {
  return (
    <Link href={route}>
      <a aria-label={a11yText}>
        <div className="flex space-between w-full align-center">
          <strong>{label}</strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-right"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </a>
    </Link>
  );
}
