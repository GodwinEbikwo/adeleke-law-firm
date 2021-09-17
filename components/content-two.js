import styled from "styled-components";
import { SectionBox } from "./container";
import { FancyLinkArrow } from "./fancy-link";

export default function Two() {
  return (
    <SectionBox>
      <div className="px-2 flex-container">
        <TitleLeft>
          <strong className="text-uppercase">Our areas of speciality</strong>
        </TitleLeft>
        <ContentRight>
          <div className="content-wrap">
            <div className="content-column">
              <ul className="content-list">
                <li>
                  <FancyLinkArrow
                    a11yText="navigates to the personal injury"
                    label="Personal Injury"
                    route="/"
                  />
                </li>
                <li>
                  <FancyLinkArrow
                    a11yText="navigates to the product liability"
                    label="Product liability"
                    route="/"
                  />
                </li>
                <li>
                  <FancyLinkArrow
                    a11yText="navigates to the personal injury"
                    label="Wrongful Death"
                    route="/"
                  />
                </li>
                <li>
                  <FancyLinkArrow
                    a11yText="navigates to the personal injury"
                    label="Truck Incident"
                    route="/"
                  />
                </li>
                <li>
                  <FancyLinkArrow
                    a11yText="navigates to the personal injury"
                    label="Truck Incident"
                    route="/"
                  />
                </li>
                <li>
                  <FancyLinkArrow
                    a11yText="navigates to the personal injury"
                    label="Medical Malpractice"
                    route="/"
                  />
                </li>
              </ul>
            </div>
          </div>
        </ContentRight>
      </div>
    </SectionBox>
  );
}

export const TitleLeft = styled.aside`
  strong {
    display: block;
    font-weight: var(--font-md);
    letter-spacing: var(--ls-md);
    margin-bottom: var(--spacing-md);
    &::after {
      height: 1px;
      width: 4rem;
      content: "";
      display: block;
      background: var(--text-white);
      margin-top: 1.01vw;
    }
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

export const ContentRight = styled.aside`
  width: 100%;
  @media (min-width: 1024px) {
    width: 70%;
  }

  .content-wrap {
    @media (min-width: 1024px) {
      /* max-width: 780px; */
      padding-left: 20%;
    }
    .content-list {
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
`;
