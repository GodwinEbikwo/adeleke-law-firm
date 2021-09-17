import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>The Adeleke Brothers - Law Firm</title>
      </Head>
      {children}
    </>
  );
}
