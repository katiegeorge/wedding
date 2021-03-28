/** @jsx jsx */

import { jsx } from "theme-ui";

const Anchor = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      sx={{
        color: "blue-dark",
        backgroundColor: "green-light",
        textDecoration: "none",
        mb: 3,
        px: 1,
        fontSize: ["11pt", "12pt"],
        width: "fit-content",
        fontWeight: "400",
        ":hover": {
          backgroundColor: "green",
        },
      }}
    >
      {children}
    </a>
  );
};

export default Anchor;
