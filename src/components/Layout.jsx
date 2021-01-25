/** @jsx jsx */

import { Global } from "@emotion/core";
import { Box, jsx } from "theme-ui";

const Layout = ({ children }) => {
  return (
    <Box sx={{ mx: `auto`, bg: "#0D2D5E", color: "#fff" }}>
      <Global
        styles={(theme) => `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;600&display=swap');

          body {
            font: 1.25em/${theme.lineHeights.body} ${theme.fonts.body};
          }

        `}
      />
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
