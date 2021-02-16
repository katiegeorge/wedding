/** @jsx jsx */

import { Fragment } from "react";
import { jsx } from "theme-ui";

const Nav = ({ items, className, setShowSideBar }) => {
  return (
    <nav
      sx={{
        letterSpacing: "1px",
        fontWeight: "300",
        position: "fixed",
        height: "100%",
        overflow: "auto",
        pt: "100px",
        top: 0,
        bottom: 0,
        left: [0, "auto"],
        right: [0, "auto"],
        bg: "blue-dark",
        width: ["100%", "20%"],
        zIndex: 1,
        boxShadow: "3px 0 4px 0px #09283a",
      }}
      className={className}
    >
      <Fragment>
        <ul sx={{ listStyleType: "none", pl: 4 }}>
          {items.map((item) => (
            <li sx={{ pb: 2 }}>
              <a
                href={`#${item.href}`}
                onClick={() => setShowSideBar(false)}
                sx={{
                  color: "white",
                  textDecoration: "none",
                  ":hover": {
                    textDecoration: "none",
                    filter: "brightness(90%)",
                  },
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Fragment>
    </nav>
  );
};

export default Nav;
