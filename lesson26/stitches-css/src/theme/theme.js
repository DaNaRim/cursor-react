import {createStitches} from "@stitches/react"
import {opinionated} from "stitches-normalize-css"

import {utils} from "./utils"

const defaultTheme = {
  colors: {
    //Slate
    slate50: "#f8fafc",
    slate100: "#f1f5f9",
    slate200: "#e2e8f0",
    slate300: "#cbd5e1",
    slate400: "#94a3b8",
    slate500: "#64748b",
    slate600: "#475569",
    slate700: "#334155",
    slate800: "#1e293b",
    slate900: "#0f172a",

    //Red
    red50: "#fef2f2",
    red100: "#fee2e2",
    red200: "#fecaca",
    red300: "#fca5a5",
    red400: "#f87171",
    red500: "#ef4444",
    red600: "#dc2626",
    red700: "#b91c1c",
    red800: "#991b1b",
    red900: "#7f1d1d",

    //Yellow
    yellow50: "#fefce8",
    yellow100: "#fef9c3",
    yellow200: "#fef08a",
    yellow300: "#fde047",
    yellow400: "#facc15",
    yellow500: "#eab308",
    yellow600: "#ca8a04",
    yellow700: "#a16207",
    yellow800: "#854d0e",
    yellow900: "#713f12",

    //Lime
    lime50: "#f7fee7",
    lime100: "#ecfccb",
    lime200: "#d9f99d",
    lime300: "#bef264",
    lime400: "#a3e635",
    lime500: "#84cc16",
    lime600: "#65a30d",
    lime700: "#4d7c0f",
    lime800: "#3f6212",
    lime900: "#365314",

    //Sky
    sky50: "#f0f9ff",
    sky100: "#e0f2fe",
    sky200: "#bae6fd",
    sky300: "#7dd3fc",
    sky400: "#38bdf8",
    sky500: "#0ea5e9",
    sky600: "#0284c7",
    sky700: "#0369a1",
    sky800: "#075985",
    sky900: "#0c4a6e",

    //Purple
    purple50: "#faf5ff",
    purple100: "#f3e8ff",
    purple200: "#e9d5ff",
    purple300: "#d8b4fe",
    purple400: "#c084fc",
    purple500: "#a855f7",
    purple600: "#9333ea",
    purple700: "#7e22ce",
    purple800: "#6b21a8",
    purple900: "#581c87",

    //Base
    black: "#000",
    white: "#fff",
    accent: "$black",
    primary: "$black"
  },
  fonts: {
    inter: "Inter, sans-serif",
    IBMPlexMono: "'IBM Plex Mono', monospace",
    base: "$inter",
    mono: "$IBMPlexMono"
  },
  fontSizes: {
    1: "1.2rem",
    2: "1.4rem",
    3: "1.6rem",
    4: "1.8rem",
    5: "2.4rem",
    6: "3.2rem",
    7: "4.8rem",
    8: "5.6rem",
    html: "62.5%",
    base: "$3"
  },
  space: {
    1: ".4rem",
    2: ".8rem",
    3: "1.2rem",
    4: "1.6rem",
    5: "2rem",
    6: "2.4rem",
    7: "2.8rem",
    8: "3.2rem",
    9: "3.6rem"
  },
  fontWeights: {
    bold: 500,
    bolder: 600,
    extraBold: 700
  },
  lineHeights: {
    base: "2.4rem"
  },
  letterSpacings: {},
  sizes: {},
  borderWidths: {},
  borderStyles: {},
  radii: {
    sm: "0.4rem",
    md: "0.8rem",
    xl: "1.6rem"
  },
  shadows: {
    sm: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
    md:
      "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg:
      "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl:
      "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
    xxl: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inset: "inset 0px 2px 4px rgba(0, 0, 0, 0.06)"
  },
  zIndices: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,

    // App Layers
    app1: "$1",
    app2: "$2",
    app3: "$3",
    appOnTop: "$4",

    // Dialog
    100: 100,
    101: 101,
    dialogOnTop: "$100",
    dialogOnTop1: "$101"
  },
  transitions: {}
}

const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  utils,
  theme: defaultTheme,
  prefix: "boopos-styles",
  media: {
    bp1: "(min-width: 43rem)",
    bp2: "(min-width: 62rem)",
    bp3: "(min-width: 82rem)"
  }
})

const globalStyles = globalCss(...opinionated, {
  html: {
    fontSize: "$fontSizes$html"
  },
  "html *": {
    fontFamily: "$fonts$base",
    fontSize: "$fontSizes$base",
    lineHeight: "$lineHeights$base"
  },
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  },
  h1: {
    fontSize: "$fontSizes$8"
  },
  h2: {
    fontSize: "$fontSizes$7"
  },
  h3: {
    fontSize: "$fontSizes$6"
  },
  h4: {
    fontSize: "$fontSizes$5"
  },
  h5: {
    fontSize: "$fontSizes$4"
  },
  h6: {
    fontSize: "$fontSizes$3"
  }
})

// Export utils
export {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  globalStyles
}
