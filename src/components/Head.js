import React from "react";
import { Helmet } from "react-helmet";
import pageData from "./data/pageData";

function Head() {
  return (
    <Helmet>
      <title itemProp="name" lang="en">
        {pageData.head.siteTitle}
      </title>
      <link rel="canonical" href="https://luiscristo.com" />
      <meta name="description" content={pageData.head.siteDescription} />
      <meta name="keywords" content={pageData.head.siteKeywords} />

      <meta itemProp="name" content={pageData.head.siteTitle} />
      <meta itemProp="description" content={pageData.head.siteDescription} />
      {/* <meta itemProp="image" content={}/> */}

      <meta name="theme-color" content="#000000" />
    </Helmet>
  );
}

export default Head;
