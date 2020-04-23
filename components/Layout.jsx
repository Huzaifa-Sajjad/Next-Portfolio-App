import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import Header from "./Header";
import Footer from "./Footer";

export default ({ children }) => {
  //Loading Indicator
  Router.events.on("routeChangeStart", (url) => {
    nProgress.start();
  });

  Router.events.on("routeChangeComplete", () => nProgress.done());
  Router.events.on("routeChangeError", () => nProgress.done());

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
      </Head>
      <Header />
      <div className="container">{children}</div>
      <Footer />
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {
          font-size: 18px;
          font-family: "PT Sans";
          margin: 0;
          padding: 0;
        }
        a {
          color: #000;
          text-decoration: none;
        }
        a:hover {
          color: #0070f3;
        }
        h1 {
          font-weight: 600;
          font-size: 3em;
        }
        .container {
          max-width: 1200px;
          width: 100%;
          height: 100%;
          margin: 0 auto;
          padding: 1em 2em;
          text-align: center;
        }
      `}</style>
    </>
  );
};
