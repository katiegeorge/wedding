/** @jsx jsx */

import { Box, jsx } from "theme-ui";

const Separator = ({ neg }) => {
  const colors = [
    "green-light",
    "purple",
    "purple-light",
    "yellow-light",
    "purple-light",
    "purple",
    "green-light",
  ];
  return (
    <Box
      sx={{
        position: "absolute",
        top: "-40px",
        width: "105%",
        left: "-5px",
        transform: neg ? "rotate(-2deg)" : "rotate(2deg)",
      }}
    >
      {colors.map((color) => (
        <Box sx={{ height: "0.85rem", bg: color }}></Box>
      ))}
    </Box>
  );
};

export default Separator;
