import Head from "next/head";
import Footer from "./footer";
import s from "./l.module.css";
import Header from "./header";
import { LazyMotion, domAnimation } from "framer-motion";

export default function Layout({ children }) {
  return (
    <LazyMotion features={domAnimation}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:locale" content="en_GB" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Adeleke Family Law is Nigerias largest specialist family law firm. Our divorce solicitors enjoy an outstanding reputation for expertise, compassion &amp; success."
        />
        <title>
          Divorce Solicitors &amp; Family Lawyers Across Nigeria - Adeleke
          Family Law
        </title>
      </Head>

      <>
        <Header />
        <main className={s.main}>{children}</main>
        <Footer />
      </>
    </LazyMotion>
  );
}
