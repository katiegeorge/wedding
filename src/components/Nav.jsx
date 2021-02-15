/** @jsx jsx */

import { jsx } from "theme-ui";

const Nav = ({ items }) => {
  return (
    <nav
      sx={{
        position: "fixed",
        top: "1rem",
        left: 0,
        letterSpacing: "1px",
        fontWeight: "300",
        zIndex: "1",
      }}
    >
      <ul sx={{ listStyleType: "none" }}>
        {items.map((item) => (
          <li sx={{ pb: 2 }}>
            <a
              href={`#${item.href}`}
              sx={{
                color: "yellow-light",
                textDecoration: "none",
                ":hover": { textDecoration: "none", filter: "brightness(90%)" },
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
