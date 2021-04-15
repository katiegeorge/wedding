/** @jsx jsx */

import { Fragment } from "react";
import { jsx, Image, Flex } from "theme-ui";

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
        width: ["100%", "30%", "20%"],
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
                  display: "inline-block",
                  width: "100%",
                  py: "2",
                  ":hover": {
                    textDecoration: "none",
                    filter: "brightness(90%)",
                  },
                }}
              >
                <Flex sx={{ alignItems: "center" }}>
                  <Image
                    src={item.icon}
                    sx={{
                      width: "25px",
                      height: "25px",
                      objectFit: "contain",
                      mr: 3,
                    }}
                  />
                  {item.label}
                </Flex>
              </a>
            </li>
          ))}
          <li sx={{ mt: 3 }}>
            <em sx={{ fontSize: "11pt" }}>RSVP & Registry coming soon!</em>
          </li>
        </ul>
      </Fragment>
    </nav>
  );
};

export default Nav;
