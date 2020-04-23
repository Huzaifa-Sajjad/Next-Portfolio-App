import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Home | Huzaifa Sajjad</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>I Write Code!</h1>
      </Layout>
    </>
  );
}
