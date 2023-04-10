import React from "react";
import Head from "next/head";

export const HeadLayout = ({ children, title, keywords, description }) => {
  return (
    <>
      <Head>
        <title>{`${title} | Агросфера`}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
      </Head>
      <>{children}</>
    </>
  );
};
