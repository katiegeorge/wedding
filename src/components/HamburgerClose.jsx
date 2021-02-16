/** @jsx jsx */

import { jsx } from "theme-ui";

const HamburgerClose = ({ handleClick, active, setActive, className }) => {
  const onButtonClick = () => {
    setActive(!active);
    handleClick();
  };

  return (
    <button
      className={className}
      sx={{
        zIndex: 1,
        cursor: "pointer",
        left: ["80%", "1rem"],
        color: "#df8882",
        bg: "transparent",
        borderRadius: 5,
        p: 2,
        pb: 0,
        //ea948d

        transitionProperty: "opacity, filter",
        transitionDuration: "0.15s",
        transitionTimingFunction: "linear",

        // Normalize (<button>)
        font: "inherit",
        textTransform: "none",
        border: "0",
        margin: "0",
        overflow: "visible",

        ":hover": {
          opacity: "0.7",
        },
      }}
      onClick={onButtonClick}
    >
      <div
        sx={{
          width: "30px",
          height: "24px",
          display: "inline-block",
          position: "relative",
        }}
      >
        <div
          sx={{
            display: "block",
            top: "50%",
            marginTop: "-2px",
            width: "30px",
            height: "3px",
            backgroundColor: "#df8882",
            borderRadius: "4px",
            position: "absolute",
            transitionProperty: "transform",
            transitionDuration: "0.4s",
            transitionTimingFunction: active
              ? "cubic-bezier(0.215, 0.61, 0.355, 1)"
              : "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
            transform: active && "rotate(225deg)",
            transitionDelay: active && "0.12s",

            "&::before": {
              width: "30px",
              height: "3px",
              backgroundColor: "#df8882",
              borderRadius: "4px",
              position: "absolute",
              transition: active
                ? "top 0.1s ease-out"
                : "top 0.1s 0.25s ease-in",
              transition: active
                ? "opacity 0.1s 0.12s ease-out"
                : "opacity 0.1s ease-in",
              content: '""',
              display: "block",
              top: active ? 0 : "-10px",
              opacity: active && 0,
            },

            "&::after": {
              width: "30px",
              height: "3px",
              backgroundColor: "#df8882",
              borderRadius: "4px",
              position: "absolute",
              transition: active
                ? "bottom 0.1s ease-out"
                : "bottom 0.1s 0.25s ease-in",
              transition: active
                ? "transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)"
                : "transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)",
              content: '""',
              display: "block",
              bottom: active ? 0 : "-10px",
              transform: active && "rotate(-90deg)",
            },
          }}
        ></div>
      </div>
    </button>
  );
};

export default HamburgerClose;
