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
                  Ready, Sweat, Mediate
                </SplitText>
              </h1>
            </div>
          </HeroLeft>

          <HeroRight>
            <div className="btn-container">
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
            </div>
          </HeroRight>
        </HeroGrid>
      </Div100vh>
    </HeroBox>
  );
}

const HeroBox = styled.section`
  position: fixed;
  top: calc(var(--spacer-sm) + var(--golden-ratio));
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  margin-bottom: var(--spacing-lg);
  @media (min-width: 1024px) {
    top: 0;
  }
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

  .h-left-inner {
    position: absolute;
    bottom: 1rem;
    left: 1rem;

    h1 {
      font-size: 12.2vw;
      letter-spacing: var(--ls-lg);
      max-width: 7.5ch;
      margin-bottom: 1rem;
      line-height: 1;
      font-weight: var(--font-md);

      @media (min-width: 700px) {
        max-width: 8ch;
        font-size: 10vw;
      }
    }
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
    @media (min-width: 1024px) {
      bottom: var(--golden-ratio);
    }
  }
`;
