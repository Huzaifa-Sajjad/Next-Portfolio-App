import Head from "next/head";
import Layout from "../components/Layout";

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>About | Huzaifa Sajjad</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Hello, My Name is Huzaifa!</h1>
      </Layout>
    </>
  );
}
