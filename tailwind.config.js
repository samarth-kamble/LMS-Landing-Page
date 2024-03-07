/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f6f6f6",
        gray: {
          100: "#2b2730",
          200: "rgba(255, 255, 255, 0.16)",
        },
        goldenrod: "#ffb84c",
        darkgoldenrod: "#cc851a",
        white: "#fff",
        dimgray: "#5e5963",
        gainsboro: "rgba(230, 230, 230, 0.16)",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
      },
      borderRadius: {
        "13xl": "32px",
        "8xs": "5px",
        "81xl": "100px",
        "145xl": "164px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      sm: "14px",
      "37xl": "56px",
      "26xl": "45px",
      "15xl": "34px",
      "5xl": "24px",
      lgi: "19px",
      "13xl": "32px",
      "7xl": "26px",
      "45xl": "64px",
      "32xl": "51px",
      "19xl": "38px",
      "lgi-7": "19.7px",
      "20xl-4": "39.4px",
      "53xl": "72px",
      "39xl": "58px",
      "24xl": "43px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
