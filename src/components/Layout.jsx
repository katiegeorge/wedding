/** @jsx jsx */

import { Global } from "@emotion/core";
import { Box, jsx } from "theme-ui";

const Layout = ({ children, className }) => {
  return (
    <Box sx={{ mx: `auto`, color: "#fff" }} className={className}>
      <Global
        styles={(theme) => `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;600&display=swap');

          @font-face {
            font-family: "Magnel Display";
            font-weight: 800;
            src: url("/fonts/MagnelDisplay-Black.otf");
          }

          *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
          }

          body {
            font: 1.25em/${theme.lineHeights.body} ${theme.fonts.body};
          }

          h1 {
            font-size: ${theme.fontSizes[8]}px;
          }

        `}
      />
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
