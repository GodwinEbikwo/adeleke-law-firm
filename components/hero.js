/* eslint-disable react/no-unescaped-entities */
import Div100vh from "react-div-100vh";
import styled from "styled-components";
import Image from "next/image";
import { SplitText } from "@/helpers/split-text";
import { m } from "framer-motion";
import herobg from "@/public/0.jpg";

const variantsAni = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    duration: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.35 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function Hero() {
  return (
    <HeroBox>
      <Div100vh>
        <HeroGrid variants={variantsAni}>
          <HeroLeft>
            <div className="h-left-inner">
              <h1>Experienced Lawyers for the tough situations.</h1>
            </div>

            <div className="h-left-side">
              <p>
                At Adeleke Family Law, we are the only national law firm
                dedicated to family matters with the largest team of specialist
                family lawyers in nigeria.
              </p>
            </div>

            <div className="btn-container">
              <button
                title="Book Now"
                aria-label="Book Now"
                className="button button--hyperion"
              >
                <span>
                  <span>get a free consultation</span>
                </span>
              </button>
            </div>
          </HeroLeft>

          <HeroRight>
            <Image
              src={herobg}
              placeholder="blur"
              alt="adeleke"
              layout="fill"
              className="bg-full"
            />
          </HeroRight>
        </HeroGrid>
      </Div100vh>
    </HeroBox>
  );
}

const HeroBox = styled.section`
  position: relative;
`;

const HeroGrid = styled(m.div)`
  width: 100vw;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 0;
  height: calc(var(--vh, 1vh) * 100);
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
`;

const HeroLeft = styled.aside`
  position: relative;
  background: var(--bg);
  padding: 0 var(--golden-ratio);
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 700px) {
    margin-top: 4rem;
    padding-top: 2.5rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 1024px) {
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
  }

  .h-left-inner {
    margin-bottom: var(--spacing-lg);

    h1 {
      font-size: 2.25rem;
      letter-spacing: var(--ls-lg);
      line-height: 1;
      font-weight: var(--font-md);
      @media (min-width: 700px) {
        font-size: 4.2vw;
      }
    }
  }

  .h-left-side {
    margin-bottom: var(--spacing-lg);
    p {
      max-width: 55ch;
    }
  }
`;

const HeroRight = styled.aside`
  position: relative;

  .btn-container {
    position: absolute;
    padding: 0 var(--golden-ratio);
    bottom: calc(var(--spacer-lg) + 3rem);
    width: 100%;
  }
`;
