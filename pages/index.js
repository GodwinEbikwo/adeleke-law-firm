import Hero from "@/components/hero";
import Layout from "@/components/layout";
import Header from "@/components/header";
import { fadeDelay } from "@/helpers/transition";
import { ContainerBox } from "@/components/container";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Banner from "@/components/banner";
import One from "@/components/content-one";
import Two from "@/components/content-two";
import Three from "@/components/content-three";
import Footer from "@/components/footer";
import Four from "@/components/content-four";

export default function HomePage() {
  return (
    <Layout>
      {/* <Banner /> */}
      <Header />
      <LazyMotion features={domAnimation}>
        <m.main initial="initial" animate="enter" exit="exit">
          <m.div variants={fadeDelay}>
            <ContainerBox className="has-mw">
              <Hero />
              <One />
              <Two />
              <Three />
              <Four/>
              <Footer />
            </ContainerBox>
          </m.div>
        </m.main>
      </LazyMotion>
    </Layout>
  );
}
