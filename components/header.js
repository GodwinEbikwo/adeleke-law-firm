import { useState, useRef, useEffect } from "react";
import { Logo } from "./logo";
import Link from "next/link";
import FancyLink from "./fancy-link";
import styled from "styled-components";
import { Navigation } from "./mobile-menu/menu-drop";
import { MenuToggle } from "./mobile-menu/menu-toggle";
import { m, useCycle, LazyMotion, domAnimation } from "framer-motion";

const sidebar = {
  enter: () => ({
    y: "50%",
    originX: 0.5,
    originY: 0,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  }),
  exit: {
    y: "-100%",
    transition: {
      duration: 1,
      ease: [0.77, 0, 0.18, 1],
    },
  },
};

const sidebar2 = {
  enter: () => ({
    y: "-50%",
    originX: 0.5,
    originY: 0,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  }),
  exit: {
    y: "-100%",
    transition: {
      duration: 1,
      ease: [0.77, 0, 0.18, 1],
    },
  },
};

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 240;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const style = {
    backgroundColor: navBackground ? "var(--bg)" : "transparent",
    borderBottom: navBackground
      ? "1px solid var(--border-color)"
      : "1px solid transparent",
    transition: "all 150ms linear",
    boxShadow: navBackground
      ? "0 1px 25px rgb(0 0 0 / 0.09)"
      : "0 0 0 rgb(0 0 0 / 0)",
  };

  return (
    <LazyMotion features={domAnimation}>
      <HeaderBox
        className="w-full"
        initial="initial"
        animate="enter"
        exit="exit"
        style={style}
      >
        <HeaderBoxInner>
          <m.nav
            ref={containerRef}
            initial={false}
            animate={isOpen ? "enter" : "exit"}
            exit="exit"
            className="flex space-between justify-center align-center px-2"
            style={{ height: "44px" }}
          >
            <Link href="/" passHref>
              <a className="flex align-center" style={{ zIndex: "100" }}>
                <LogoContainer>
                  <Logo />
                </LogoContainer>
                <div className="sm-spacing text-uppercase">Adeleke</div>
              </a>
            </Link>

            <NavList className="inline-flex space-between align-center hide-for-mobile">
              <li>
                <FancyLink
                  route="/about"
                  a11yText="navigates to the about page"
                  label="About"
                />
              </li>
              <li>
                <FancyLink
                  route="/contact"
                  a11yText="navigates to the contact page"
                  label="Free consulation"
                />
              </li>
              <li>
                <FancyLink
                  route="/resources"
                  a11yText="navigates to the resources page"
                  label="Resources"
                />
              </li>
            </NavList>

            <m.div className="bg hide-for-desktop" variants={sidebar} />
            <m.div className="bg-2 hide-for-desktop" variants={sidebar2} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
          </m.nav>
        </HeaderBoxInner>
      </HeaderBox>
    </LazyMotion>
  );
}

const HeaderBoxInner = styled(m.div)``;

const HeaderBox = styled(m.header)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0.35rem 0;
  z-index: 100;
`;

const NavList = styled.ul`
  margin-left: 3rem;

  & > li {
    text-transform: uppercase;
    &:not(:last-child) {
      padding-right: 3rem;
    }
    a {
      letter-spacing: var(--ls-sm);
      /* font-weight: var(--font-md); */
    }
  }
`;

const LogoContainer = styled.div`
  height: 38px;
  width: 38px;
  border-radius: 50%;
  background: var(--accent);
  display: flex;
  justify-content: center;
  align-items: center;
`;
