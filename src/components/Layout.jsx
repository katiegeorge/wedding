/** @jsx jsx */

import { Global } from "@emotion/core";
import Helmet from "react-helmet";
import { Box, jsx } from "theme-ui";

const Layout = ({ children, className }) => {
  const base = {
    title: `Katie and Meg's Wedding`,
    product: `Katie and Meg's Wedding`,
    description: `Details and information about Katie and Meg's Wedding in June 2022!`,
    image: `https://katieandmeg.com/katie-meg-logo.png`,
    author: `@katiegeorge`,
  };

  return (
    <Box
      sx={{
        mx: `auto`,
        color: "#fff",
        width: "100vw",
        overflow: "hidden",
      }}
      className={className}
    >
      <Global
        styles={(theme) => `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;600&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;600;700&display=swap');

          @font-face {
            font-family: "Magnel Display";
            font-weight: 800;
            src: url("/fonts/MagnelDisplay-Black.otf");
          }

          html {
            scroll-behavior: smooth;
          }

          :focus {
            // border: 2px solid ${theme.colors["yellow-light"]} !important;
            box-shadow: 0 0 0 2px ${theme.colors["blue-dark"]};
            border-radius: 5px;
            outline: none;
          }

          #gatsby-focus-wrapper:focus {
            border: none !important;
          }

          *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
          }

          body {
            font: 1.25em/${theme.lineHeights.body} ${theme.fonts.body};
            font-weight: 300;
            font-size: 16pt;
          }

          p {
            max-width: 75ch;
          }

          h1 {
            font-size: 4rem;
          }

        `}
      />
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Katie and Meg's Wedding</title>
        <link rel="canonical" href={`https://katieandmeg.com`} />
        <meta name="description" content={base.description} />
        <meta name="image" content={base.image} />
        <meta name="application-name" content={base.product} />
        <meta name="apple-mobile-web-app-title" content={base.product} />
        <link rel="icon" href={`https://katieandmeg.com/favicon.ico`} />
        <link
          rel="mask-icon"
          href={`https://katieandmeg.com/favicon.ico`}
          color="#000000"
        />
        <link
          rel="apple-touch-icon"
          href={`https://katieandmeg.com/favicon.ico`}
        />

        <meta property="og:url" content={`https://katieandmeg.com`} />
        <meta property="og:site_name" content={base.product} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={base.title} />
        <meta property="og:description" content={base.description} />
        <meta property="og:image" content={base.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:image:alt" content={`${base.product} logomark`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={base.author} />
        <meta name="twitter:title" content={base.title} />
        <meta name="twitter:description" content={base.description} />
        <meta name="twitter:image" content={base.image} />
        <meta name="twitter:site" content={base.author} />
        <meta name="twitter:creator" content={base.author} />
      </Helmet>
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
