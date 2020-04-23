import Head from "next/head";
import axios from "axios";
import Layout from "../components/Layout";

export default function Home({ user }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Home | Huzaifa Sajjad</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <img src={user.avatar_url} alt={user.name} height="200px" />
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
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
