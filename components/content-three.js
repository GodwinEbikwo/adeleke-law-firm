import styled from "styled-components";
import { SectionBox } from "./container";
import Image from "next/image";

export default function Three() {
  return (
    <SectionBox>
      <div className="px-2 flex-container">
        <TitleLeft>
          <strong className="text-uppercase">what we can do for you</strong>
        </TitleLeft>
        <ContentRight>
          <div className="content-wrap">
            <div className="content-row">
              <aside className="content-col">
                <p>
                  We are committed to helping you recover the maximum amount of
                  compensation for your injury and financial losses. What’s
                  more, our personal approach ensures that you will not be
                  treated like just another case number. We provide
                  individualized attention to each and every one of our clients,
                  mitigating any distress or challenges and understanding that
                  this is an upsetting and difficult situation.
                </p>
              </aside>

              <aside className="content-col">
                <p>
                  At Adeleke Law Firm, we represent personal injury victims on what is
                  known as a Contingency Fee Basis. This means that you do not
                  pay our lawyers a cent unless we win your case. Not only does
                  this allow you to hire a leading personal injury lawyer in
                  Cincinnati to fight on your behalf, but it also allows you to
                  focus on your recovery without having to worry about legal
                  fees. If you are ready to take the first step towards justice,
                  you can request a free consultation.
                </p>
              </aside>
            </div>

            <div className="content-bottom flex flex-wrap">
              <div className="content-bottom-col">
                <Image
                  src="https://res.cloudinary.com/godwinebikwo/image/upload/v1628673325/rachel-mcdermott-0fN7Fxv1eWA-unsplash_ujennl.jpg"
                  width={480}
                  height={375}
                  alt="adeleke"
                />
                <div className="py-2">
                  <strong className="text-uppercase">Thomas Adeleke Snr</strong>
                </div>
              </div>

              <div className="content-bottom-col">
                <Image
                  src="https://res.cloudinary.com/godwinebikwo/image/upload/v1628672656/j-waye-covington-D38l260GHc4-unsplash_ic6yq2.jpg"
                  width={480}
                  height={375}
                  alt="adeleke"
                />
                <div className="py-2">
                  <strong className="text-uppercase">Anthong Adeleke</strong>
                </div>
              </div>
            </div>
          </div>
        </ContentRight>
      </div>
    </SectionBox>
  );
}

const TitleLeft = styled.aside`
  strong {
    display: block;
    font-weight: 500;
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
      /* max-width: 900px; */
      padding-left: 18%;
    }

    .content-row {
      @media (min-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
      }

      .content-col {
        width: 100%;
        @media (min-width: 1024px) {
          width: 50%;
          padding: 0 var(--golden-ratio);
        }

        p {
          margin-bottom: var(--spacing-lg);
          line-height: 1.5;
          @media (min-width: 1024px) {
            letter-spacing: var(--ls-sm);
            font-size: 1.125rem;
          }
        }
      }
    }

    .content-bottom {
      @media (min-width: 1024px) {
        padding: var(--spacing-md) 0;
      }
      .content-bottom-col {
        width: 50%;
        padding-right: var(--golden-ratio);
        @media (min-width: 1024px) {
          padding: 0 var(--golden-ratio);
        }
      }
    }
  }
`;
