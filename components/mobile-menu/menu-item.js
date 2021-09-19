import { m } from "framer-motion";
import Link from "next/link";

const revealIn = {
  initial: { y: "110%" },
  enter: {
    y: 0,
    transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] },
  },
  exit: {
    y: "110%",
    transition: { duration: 0.25, ease: [0.83, 0, 0.17, 1] },
  },
};

export const MenuItem = ({ route, a11yText, label }) => {
  return (
    <li>
      <Link href={route} passHref>
        <a aria-label={a11yText}>
          <div className="overflow-hidden relative flex space-between  align-cente">
            <m.div className="nav-item" variants={revealIn}>
              {label}
            </m.div>
            <m.svg
              variants={revealIn}
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
            </m.svg>
          </div>
        </a>
      </Link>
    </li>
  );
};
