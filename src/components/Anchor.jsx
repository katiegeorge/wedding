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
        fontWeight: "700",
        fontSize: 5,
        // bg: "green-light",
        color: "green",
        borderRadius: "30px",
        transition: "0.2s ease",
        textDecoration: "underling",
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
        color: "green",
        // backgroundColor: "green-light",
        textDecoration: "underline",
        mb: 3,
        px: 1,
        fontSize: ["12pt", "14pt"],
        width: "fit-content",
        fontWeight: "700",
        ":hover": {
          color: "green-light",
        },
      }}
    >
      {children}
    </a>
  );
};

export default Anchor;
