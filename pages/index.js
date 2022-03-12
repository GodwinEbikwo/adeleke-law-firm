import Hero from "@/components/hero";
import Layout from "@/components/layout";
import { fadeDelay } from "@/helpers/transition";
import { ContainerBox } from "@/components/container";
import One from "@/components/content-one";
import Two from "@/components/content-two";
import Three from "@/components/content-three";
import Four from "@/components/content-four";
import Five from "@/components/content-five";
import { m } from "framer-motion";

export default function HomePage() {
  return (
    <Layout>
      <m.div initial="initial" animate="enter" exit="exit">
        <m.div variants={fadeDelay}>
          <ContainerBox className="has-mw">
            <Hero />
            <One />
            <Two />
            <Three />
            <Five />
            <Four />
          </ContainerBox>
        </m.div>
      </m.div>
    </Layout>
  );
}
