/** @jsx jsx */

import { Global } from "@emotion/core";
import Helmet from "react-helmet";
import { Box, jsx } from "theme-ui";

const Layout = ({ children, className }) => {
  return (
    <Box
      sx={{ mx: `auto`, color: "#fff", width: "100vw", overflow: "hidden" }}
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
            border: 2px solid ${theme.colors["yellow-light"]} !important;
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

          h1 {
            font-size: 4rem;
          }

        `}
      />
      <Helmet
        title="Katie and Meg's Wedding"
        htmlAttributes={{ lang: "en" }}
      ></Helmet>
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
