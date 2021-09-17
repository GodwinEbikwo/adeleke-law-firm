import { m } from "framer-motion";
import { MenuItem } from "./menu-item";
import styled from "styled-components";

const labelId = [
  {
    a11yText: "navigates to the Home page",
    label: "Home",
    route: "/",
  },
  {
    a11yText: "navigates to the about us page",
    label: "About us",
    route: "/",
  },
  {
    a11yText: "navigates to the Resources page",
    label: "Resources",
    route: "/",
  },
  {
    a11yText: "navigates to the Contact page",
    label: "Contact",
    route: "/",
  },
  {
    a11yText: "navigates to the Lawyers page",
    label: "Our Lawyers",
    route: "/",
  },
  {
    a11yText: "navigates to the clients Satisfaction injury",
    label: "client Satisfaction",
    route: "/",
  },
];

const variantsAni = {
  enter: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.12 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <MenuInner className="px-2">
    <m.ul variants={variantsAni} className="relative w-full hide-for-desktop">
      {labelId.map((l, index) => (
        <MenuItem
          key={index}
          label={l.label}
          route={l.route}
          a11yText={l.a11yText}
        />
      ))}
    </m.ul>
  </MenuInner>
);

const MenuInner = styled(m.div)`
  width: 100%;
  position: absolute;
  top: 40px;
  left: 0;
  margin-top: var(--spacing-lg);

  ul {
    text-transform: uppercase;
    color: var(--white);
    font-weight: var(--font-md);

    a {
      font-size: 15px;
      display: block;
      position: relative;
      padding: var(--spacing-sm) 0;
    }
  }
`;
