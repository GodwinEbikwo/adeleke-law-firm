import styled from "styled-components";
import { SectionBox } from "./container";
import Accordion from "./accordion";
import { data } from "@/helpers/data";

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
              <aside className="content-list">
                <div className="content-list-item">
                  {data.map((i, _) => (
                    <Accordion
                      key={i.id}
                      id={i.id}
                      title={i.title}
                      content={i.content}
                    />
                  ))}
                </div>
              </aside>
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
      padding-left: 29%;
    }
    .content-list {
      text-transform: uppercase;
      @media (min-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
      }

      /* &:hover > li {
        transition: opacity 400ms var(--easing);
        opacity: 0.35;
      }

      &:hover > li:hover {
        opacity: 1;
      } */

      .content-list-item {
        @media (min-width: 1024px) {
          width: 100%;
          padding-right: var(--golden-ratio);
        }
      }
    }
  }
`;
