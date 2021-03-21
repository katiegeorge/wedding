/** @jsx jsx */

import { jsx } from "theme-ui";
import { useState, useRef, useEffect } from "react";

const FadeInSection = ({ children, delay }) => {
  const domRef = useRef();

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Only show animation effect once:
        setVisible(true);

        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      ref={domRef}
      sx={
        {
          // opacity: isVisible ? 1 : 0,
          // transform: isVisible ? "none" : "translateY(5vh)",
          // transition: "opacity 0.6s ease-out, transform 1.2s ease-out",
          // transitionDelay: delay ? "0.5s" : "0",
          // willChange: "opacity, visibility",
        }
      }
    >
      {children}
    </div>
  );
};

export default FadeInSection;
