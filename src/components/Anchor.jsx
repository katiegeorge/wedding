/** @jsx jsx */

import { jsx } from "theme-ui";

const Anchor = ({ href, children, isButton }) => {
  return isButton ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      sx={{
        fontFamily: "heading",
        fontSize: 5,
        bg: "green-light",
        color: "blue-dark",
        borderRadius: "30px",
        transition: "0.2s ease",
        textDecoration: 'none',
        px: 3,
        py: 2,
        ":hover": {
          cursor: "pointer",
          filter: "brightness(85%)",
        },
      }}
    >
      {children}
    </a>
  ) : (
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
        fontSize: ["12pt", "14pt"],
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
