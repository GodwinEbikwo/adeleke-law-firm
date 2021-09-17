import styled from "styled-components";
import { SectionBox } from "./container";

export default function Four() {
  return (
    <SectionBox>
      <div className="px-2 flex-container">
        <TitleLeft>
          <strong className="text-uppercase">GET A FREE CONSULATION</strong>
        </TitleLeft>
        <ContentRight>
          <div className="content-wrap">
            <form id="contact-form" method="post">
              <div aria-hidden="true">
                <label htmlFor="name">Full name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
              </div>

              <div aria-hidden="true">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                />
              </div>

              <div aria-hidden="true">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                />
              </div>

              <div aria-hidden="true">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                />
              </div>

              <div aria-hidden="true">
                <label htmlFor="message">Message</label>
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  id="message"
                  name="message"
                  required
                ></textarea>
              </div>
            </form>
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
    --bg-color: var(--gray);
    @media (min-width: 1024px) {
      padding-left: 29%;
    }

    label,
    .description {
      text-transform: uppercase;
    }

    form {
      padding: var(--golden-ratio) 0;
      @media (min-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        & > * {
          width: 50%;
        }
      }
    }

    input,
    textarea,
    label {
      width: 100%;
      display: block;
      line-height: 1;
      @media (min-width: 1024px) {
        width: 23vw;
      }
    }

    input::placeholder,
    textarea::placeholder {
      color: #999;
    }

    input,
    textarea {
      font-weight: var(--font-md);
      background: transparent;
      border: none;
      border-bottom: 1px solid var(--border-color);
      padding: var(--golden-ratio) 0;
      margin-bottom: var(--golden-ratio);
      outline: none;
      overflow: visible;
    }

    textarea {
      resize: none;
    }
  }
`;
