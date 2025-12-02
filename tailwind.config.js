module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        floatInLeft: {
          "0%": { opacity: 0, transform: "translateX(-60px) rotate(-8deg)" },
          "100%": { opacity: 1, transform: "translateX(0) rotate(-8deg)" },
        },
        floatInRight: {
          "0%": { opacity: 0, transform: "translateX(60px) rotate(8deg)" },
          "100%": { opacity: 1, transform: "translateX(0) rotate(8deg)" },
        },
        scaleIn: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
        floatInLeft: "floatInLeft 1s ease-out forwards",
        floatInRight: "floatInRight 1s ease-out forwards",
        scaleIn: "scaleIn 1s ease-out forwards",
      },
    },
  },
};
