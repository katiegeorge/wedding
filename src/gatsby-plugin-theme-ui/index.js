// example base theme from @theme-ui/presets
export default {
  breakpoints: ["599px", "999px", "1799px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'Assistant, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "Magnel Display, serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    action: `#2a71e1`,
    text: "#000",
    background: "#FCFCFC",
    "blue-dark": "#004167",
    "blue-light": "#8FB5F0",
    "gray-light": "#E1E1E1",
    "yellow-light": "#FEF8DC",
    yellow: "#FED778",
    pink: "#F6BEBA",
    "green-light": "#82C7B8",
    green: "#4CB5B0",
    "purple-light": "#AFB4D8",
    purple: "#6F74BE",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
  },
  images: {
    hero: {
      height: "80%",
    },
  },
};
