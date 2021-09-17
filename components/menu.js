import styled from "styled-components";
import { m } from "framer-motion";
import { FancyLinkArrowWhite } from "./fancy-link";
import { TitleLeft, ContentRight } from "./content-two";

const variantsAni = {
  enter: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.375 },
  },
  exit: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

export default function Menu({ open }) {
  return (
    <m.section animate="enter" initial="initial" exit="exit">
      <MenuContainer open={open}>
        <MenuInner>
          <div className="px-2">
            {/* <TitleLeft>
              <p className="text-uppercase hide-for-mobile">
                call us at 070180924501
              </p>
            </TitleLeft> */}
            <MenuRight>
              <div className="menu-wrap">
                <div className="menu-list-col">
                  <ul className="menu-list">
                    <li>
                      <FancyLinkArrowWhite
                        a11yText="navigates to the Home page"
                        label="Home"
                        route="/"
                      />
                    </li>
                    <li>
                      <FancyLinkArrowWhite
                        a11yText="navigates to the about us page"
                        label="About us"
                        route="/"
                      />
                    </li>
                    <li>
                      <FancyLinkArrowWhite
                        a11yText="navigates to the Resources page"
                        label="Resources"
                        route="/"
                      />
                    </li>
                    <li>
                      <FancyLinkArrowWhite
                        a11yText="navigates to the Contact page"
                        label="Contact"
                        route="/"
                      />
                    </li>
                    <li>
                      <FancyLinkArrowWhite
                        a11yText="navigates to the Lawyers page"
                        label="Our Lawyers"
                        route="/"
                      />
                    </li>
                    <li>
                      <FancyLinkArrowWhite
                        a11yText="navigates to the clients Satisfaction injury"
                        label="client Satisfaction"
                        route="/"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </MenuRight>
          </div>
        </MenuInner>
      </MenuContainer>
    </m.section>
  );
}
const MenuInner = styled(m.div)`
  padding: calc(var(--spacing-lg) * 5) 0;
  @media (min-width: 1024px) {
    padding: calc(var(--spacing-lg) * 5.5) 0 99px;
    padding-bottom: 50px;
  }
`;

const MenuRight = styled(m.div)`
  width: 100%;
  @media (min-width: 1024px) {
    width: 70%;
    margin-left: auto;
  }

  .menu-wrap {
    .menu-list-col {
      width: 100%;
      @media (min-width: 1024px) {
        padding: 0 var(--golden-ratio);
      }

      .menu-list {
        text-transform: uppercase;
        @media (min-width: 1024px) {
          display: flex;
          flex-wrap: wrap;
        }

        &:hover > li {
          transition: opacity 400ms var(--easing);
          opacity: 0.35;
        }

        &:hover > li:hover {
          opacity: 1;
        }

        li {
          @media (min-width: 1024px) {
            width: 50%;
            padding-right: var(--golden-ratio);
          }
        }

        a {
          display: block;
          position: relative;
          transition: border-top 0.35s var(--easing) 0s;
          border-top: 1px solid var(--border-color);
          padding: var(--golden-ratio) 0;
        }
      }
    }
  }
`;

const MenuContainer = styled.div`
  height: 100vh;
  background-color: #0a0a0a;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 100%;
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.77, 0, 0.18, 1);
  will-change: transform;
  z-index: 4;
  color: var(--white);

  @media (min-width: 1024px) {
    visibility: hidden;
  }

  ${(props) =>
    props.open &&
    `opacity: 1; 
      transition: opacity 1s cubic-bezier(.76,0,.24,1);
      cursor: pointer;
    `};
`;
