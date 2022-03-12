import { useState, useRef, useEffect } from "react";
import { Logo } from "./logo";
import Link from "next/link";
import FancyLink from "./fancy-link";
import styled from "styled-components";
import { Navigation } from "./mobile-menu/menu-drop";
import { MenuToggle } from "./mobile-menu/menu-toggle";
import { m, useCycle, LazyMotion, domAnimation } from "framer-motion";
import { NavigationMenuDemo } from "./nav-menu";

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
      const show = window.scrollY > 180;
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
    // boxShadow: navBackground
    //   ? "0 1px 25px rgb(0 0 0 / 0.09)"
    //   : "0 0 0 rgb(0 0 0 / 0)",
  };

  const show = {
    opacity: navBackground ? 1 : 0,
    visibility: navBackground ? "visible" : "hidden",
  };

  return (
    <HeaderBox
      className="w-full"
      initial="initial"
      animate="enter"
      exit="exit"
      style={style}
    >
      <m.nav
        ref={containerRef}
        initial={false}
        animate={isOpen ? "enter" : "exit"}
        exit="exit"
        className="flex space-between justify-center align-center px-2"
        style={{ height: "44px" }}
      >
        <div className="flex space-between">
          <Link href="/" passHref>
            <a className="flex align-center" style={{ zIndex: "100" }}>
              <LogoContainer>
                <Logo />
              </LogoContainer>
              <div className="sm-spacing">Adeleke Law firm</div>
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
                route="/resources"
                a11yText="navigates to the resources page"
                label="Resources"
              />
            </li>

            <li>
              <NavigationMenuDemo />
            </li>
          </NavList>
        </div>

        <div className="hide-for-mobile" />

        <div style={show} className="hide-for-mobile">
          <button title="Book Now" className="button button--hyperion">
            <span>
              <span>get a free consultation</span>
            </span>
          </button>
        </div>

        <m.div className="bg hide-for-desktop" variants={sidebar} />
        <m.div className="bg-2 hide-for-desktop" variants={sidebar2} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </m.nav>
    </HeaderBox>
  );
}

const HeaderBox = styled(m.header)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0.4rem 0;
  z-index: 100;
  transition: all 300ms ease;
`;

const NavList = styled.ul`
  margin-left: 6rem;

  & > li {
    &:not(:last-child) {
      padding-right: 3rem;
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
