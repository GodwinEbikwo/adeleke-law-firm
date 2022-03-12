import styled from "styled-components";
import { SectionBox } from "./container";
import ResourceCard from "./resources";

export default function Five() {
  return (
    <SectionBox>
      <div className="px-2 flex-container">
        <TitleLeft>
          <strong className="text-uppercase">Resorces</strong>
        </TitleLeft>
        <ContentRight>
          <div className="content-wrap">
            <ResourceCard
              src="/0.jpg"
              label="The cost of a divorce"
              alt="divorce"
            />
            <ResourceCard
              src="/0.jpg"
              label="The cost of a divorce"
              alt="divorce"
            />
            <ResourceCard
              src="/0.jpg"
              label="The cost of a divorce"
              alt="divorce"
            />
            <ResourceCard
              src="/0.jpg"
              label="The cost of a divorce"
              alt="divorce"
            />
          </div>
        </ContentRight>
      </div>
    </SectionBox>
  );
}

const TitleLeft = styled.aside`
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

const ContentRight = styled.aside`
  --space: 1rem;
  --space-md: calc(var(--space) * 2);
  --gap: var(--space-md);
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: inherit;
  padding-block: var(--space-md);
  overflow-x: scroll;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    inline-size: 0 !important;
    display: none;
  }

  .content-wrap {
    margin-left: 50%;
    grid-column: 2;
    display: flex;
    gap: var(--space);
    @media (min-width: 1024px) {
      gap: 1rem;
    }

    &::after {
      content: "";
      padding-inline-end: calc(var(--gap) / 2);
    }

    & > div {
      cursor: pointer;
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      scroll-snap-align: center;
      inline-size: 100%;
      max-inline-size: 400px;
      aspect-ratio: 16 / 9;
    }
  }

  @supports not (aspect-ratio: 16 / 9) {
    .content-wrap::before {
      float: left;
      padding-top: 56.25%;
      content: "";
    }
    .content-wrap::after {
      display: block;
      content: "";
      clear: both;
    }
  }
`;
// const ContentRight = styled.aside`
//   width: 100%;
//   @media (min-width: 1024px) {
//     width: 70%;
//   }

//   .content-wrap {
//     /* display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(550px, 1fr)); */

//     width: auto;
//     display: flex;
//     flex-wrap: wrap;
//     & > div {
//       width: 50%;
//       margin-bottom: 22px;
//     }
//     @media (min-width: 1024px) {
//       padding-left: 29%;
//     }
//   }
// `;
