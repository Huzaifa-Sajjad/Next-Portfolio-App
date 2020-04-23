import Head from "next/head";
import axios from "axios";
import Layout from "../components/Layout";

export default function Hire({ user }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Hire | Huzaifa Sajjad</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2>Contact Details</h2>
        <h4>{user.company}</h4>
        <h4>{user.location}</h4>
        <h4>{user.blog}</h4>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    "https://api.github.com/users/huzaifa-sajjad"
  );
  return {
    props: {
      user: response.data,
    },
  };
}
