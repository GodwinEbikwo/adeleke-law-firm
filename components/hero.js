/* eslint-disable react/no-unescaped-entities */
import Div100vh from "react-div-100vh";
import styled from "styled-components";
import Image from "next/image";
import { SplitText } from "@/helpers/split-text";
import { m } from "framer-motion";
import Heart from "./heart";

// export default function Hero() {
//   return (
//     <HeroBox>
//       <Div100vh>
//         <TitleContainer className="mx-auto">
//           <Title>Your trusted partners in pursuing justice</Title>
//         </TitleContainer>
//         <Image
//           src="https://res.cloudinary.com/godwinebikwo/image/upload/v1627317608/inside-weather-OzqieLcs464-unsplash_ipy4fb.jpg"
//           width={1920}
//           height={1080}
//           alt="a shipping container"
//         />
//       </Div100vh>
//     </HeroBox>
//   );
// }

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
              <h1>
                <SplitText
                  initial={{ y: "110%", opacity: 0 }}
                  animate="enter"
                  exit={{
                    y: "110%",
                  }}
                  variants={{
                    enter: (i) => ({
                      y: "0%",
                      opacity: 1,
                      transition: {
                        duration: 1.5,
                        ease: [0.83, 0, 0.17, 1],
                        delay: i * 0.0285,
                      },
                    }),
                  }}
                >
                  When I do becomes I don't. We'll stand with you.
                </SplitText>
              </h1>
            </div>

            <div className="h-left-side">
              <p>
                <SplitText
                  initial={{ y: "110%", opacity: 0 }}
                  animate="enter"
                  exit={{
                    y: "110%",
                  }}
                  variants={{
                    enter: (i) => ({
                      y: "0%",
                      opacity: 1,
                      transition: {
                        duration: 1.5,
                        ease: [0.83, 0, 0.17, 1],
                        delay: i * 0.0285,
                      },
                    }),
                  }}
                >
                  At Adeleke Family Law, we are the only national law firm
                  dedicated to family matters with the largest team of
                  specialist family lawyers in nigeria.
                </SplitText>
              </p>
            </div>

            <div className="btn-container">
              <button title="Book Now" className="button button--hyperion">
                <span>
                  <span className="text-uppercase">
                    get a free consultation
                  </span>
                </span>
              </button>
            </div>
          </HeroLeft>

          <HeroRight>
            <Image
              src="https://res.cloudinary.com/godwinebikwo/image/upload/v1631904169/pexels-rodnae-productions-7841434_ej7wch.jpg"
              alt="adeleke"
              layout="fill"
              className="bg-full"
            />
            {/* <div className="btn-container" style={{ zIndex: "2" }}>
              <button
                title="Book Now"
                className="button button--hyperion"
                style={{ width: "100%", padding: "1.25rem" }}
              >
                <span>
                  <span className="text-uppercase">
                    get a free consultation
                  </span>
                </span>
              </button>
            </div> */}
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
    margin-top: 5rem;
    padding-top: 2.5rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 1024px) {
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
  }

  .h-left-inner {
    /* @media (max-width: 700px) {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
    } */

    margin-bottom: var(--spacing-lg);

    h1 {
      font-size: 2.5rem;
      letter-spacing: var(--ls-lg);
      line-height: 1;
      font-weight: var(--font-md);
      @media (min-width: 700px) {
        /* text-transform: uppercase; */
        font-size: 4.2vw;
      }
    }
  }

  .h-left-side {
    margin-bottom: var(--spacing-lg);
    p {
      max-width: 50ch;
    }
    /* position: absolute;
    bottom: 1rem;
    right: var(--spacer-lg); */

    /* p {
      max-width: 30ch;
    } */
  }
`;

const HeroRight = styled.aside`
  position: relative;
  background: var(--accent);

  .btn-container {
    position: absolute;
    padding: 0 var(--golden-ratio);
    bottom: calc(var(--spacer-lg) + 3rem);
    width: 100%;
  }
`;
