import styled from "styled-components";
import { SectionBox } from "./container";

export default function One() {
  return (
    <SectionBox>
      <div className="px-2 flex-container">
        <TitleLeft>
          <strong className="text-uppercase">what we can do for you</strong>
        </TitleLeft>
        <ContentRight>
          <div className="content-wrap">
            <p>
              A tailored approach from a team that really understands family
              law. We work hard to make family law easier for you to understand
              and believe that every case is unique – each one needing tailored
              support and handled with care.
            </p>

            <p>
              If you have been injured or have lost a loved one as a result of
              another persons negligence, you should not be forced to pay the
              price for your emotional, physical and financial suffering. It is
              your legal right to be fully compensated.
            </p>

            <button
              title="Learn more"
              aria-label="Learn more"
              className="button button--hyperion"
            >
              <span>
                <span>Learn more </span>
              </span>
            </button>
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
  width: 100%;
  @media (min-width: 1024px) {
    width: 70%;
  }

  .content-wrap {
    @media (min-width: 1024px) {
      /* max-width: 780px; */
      padding-left: 29%;
    }

    p {
      margin-bottom: var(--spacing-lg);
      @media (min-width: 1024px) {
        /* letter-spacing: var(--ls-sm); */
        /* font-size: 1.125rem; */
        max-width: 50ch;
      }
    }
  }
`;
