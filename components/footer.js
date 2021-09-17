import { SectionBox } from "./container";
import styled from "styled-components";
import FancyLink from "./fancy-link";

export default function Footer() {
  return (
    <SectionBox style={{ background: "var(--gray)" }} className="border-top">
      <>
        <FooterContainer>
          <div className="px-2 flex-container">
            <aside className="one-q">
              <address>
                <p className="address">1060 NIMITZVIEW</p>
                <p className="address"> DRIVE SUITE</p>
                <p className="address"> 200 CINCINNATI</p>
                <p className="address"> OH 45230</p>
              </address>
            </aside>

            <aside className="one-q">
              <ul>
                <li>
                  <FancyLink
                    route="/"
                    a11yText="navigates to the about page"
                    label="About"
                  />
                </li>
                <li>
                  <FancyLink
                    route="/"
                    a11yText="navigates to the our lawyers page"
                    label="our lawyers"
                  />
                </li>
                <li>
                  <FancyLink
                    route="/"
                    a11yText="navigates to the contact page"
                    label="contact"
                  />
                </li>
                <li>
                  <FancyLink
                    route="/"
                    a11yText="navigates to the areas of specialization page"
                    label="areas of specialization"
                  />
                </li>
                <li>
                  <FancyLink
                    route="/"
                    a11yText="navigates to the resources page"
                    label="resources"
                  />
                </li>
                <li>
                  <FancyLink
                    route="/"
                    a11yText="navigates to the privacy policy page"
                    label="privacy policy"
                  />
                </li>
              </ul>
            </aside>

            <aside className="one-q">
              <ul>
                <li>
                  <FancyLink
                    route="/"
                    a11yText="navigates to the about page"
                    label="facebook"
                  />
                </li>
                <li>
                  <FancyLink
                    route="/"
                    a11yText="navigates to the contact page"
                    label="twitter"
                  />
                </li>
                <li>
                  <FancyLink
                    route="/"
                    a11yText="navigates to the resources page"
                    label="instagram"
                  />
                </li>
              </ul>
            </aside>

            <aside className="one-q">
              <address>
                1060 NIMITZVIEW DRIVE SUITE 200 CINCINNATI OH 45230
              </address>
            </aside>
          </div>
        </FooterContainer>
        <div className="px-2 flex-container space-between align-center">
          <p className="text-center py-2 text-uppercase">
            © 2021 The Adeleke Law Firm. All Rights Reserved
          </p>
        </div>
      </>
    </SectionBox>
  );
}

const FooterContainer = styled.footer`
  padding: var(--spacer-md) 0;

  .one-q {
    .address {
      padding: 4px 0;
      font-weight: var(--font-md);
    }

    padding: var(--golden-ratio) 0;
    @media (min-width: 1024px) {
      display: flex;
      flex-wrap: wrap;
      width: 25%;
    }
    ul {
      text-transform: uppercase;
      &:hover > li {
        transition: opacity 400ms var(--easing);
        opacity: 0.35;
      }

      &:hover > li:hover {
        opacity: 1;
      }

      li {
        padding: 4px 0;
        @media (min-width: 1024px) {
          width: 50%;
          padding-right: var(--golden-ratio);
        }
      }

      a {
        font-weight: var(--font-md);
        display: block;
        position: relative;
        transition: border-top 0.35s var(--easing) 0s;
      }
    }
  }
`;
