import React from "react";
import { Helmet } from "react-helmet-async";
import pageData from "./data/pageData";
import image from "./static/images/homepage.png";

function Head() {
  return (
    <Helmet>
      <html lang="en" prefix="og: http://ogp.me/ns#" />
      <title itemProp="name" lang="en">
        {pageData.head.siteTitle}
      </title>
      <link rel="canonical" href="https://luiscristo.com" />
      <meta name="description" content={pageData.head.siteDescription} />
      <meta name="keywords" content={pageData.head.siteKeywords} />

      <meta itemProp="name" content={pageData.head.siteTitle} />
      <meta itemProp="description" content={pageData.head.siteDescription} />
      <meta itemProp="image" content={`${pageData.head.siteUrl}${image}`} />

      <meta property="og:title" content={pageData.head.title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${pageData.head.siteUrl}${image}`} />
      <meta property="og:url" content={pageData.head.siteUrl} />
      <meta property="og:description" content={pageData.head.description} />
      <meta property="og:site_name" content={pageData.head.title} />

      <meta property="og:image:width" content="1899" />
      <meta property="og:image:height" content="964" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageData.head.title} />
      <meta name="twitter:description" content={pageData.head.description} />
      <meta name="twitter:url" content={pageData.head.siteUrl} />
      <meta name="twitter:image" content={`${pageData.head.siteUrl}${image}`} />

      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" />
      <meta name="twitter:image:alt" content={pageData.head.title} />

      <meta name="theme-color" content="#546686" />
    </Helmet>
  );
}

export default Head;
