import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { AppStyles } from "@/styles/app-style";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <AppStyles />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}
