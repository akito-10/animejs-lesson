anime({
  targets: ".rain-1 .el",
  keyframes: [
    { translateY: 75 },
    { translateY: 100 },
    { translateY: 150 },
    { translateY: 200 },
    { translateY: 250 },
    { translateY: 300 },
    { translateY: 350 },
    { translateY: 400 },
    { translateY: 450 },
    { translateY: 500 },
  ],
  duration: 200,
  delay: function () {
    return anime.random(0, 600);
  },
  direction: "easeIn",
  loop: true,
});

anime({
  targets: ".rain-2 .el",
  keyframes: [
    { translateY: 75 },
    { translateY: 100 },
    { translateY: 150 },
    { translateY: 200 },
    { translateY: 250 },
    { translateY: 300 },
    { translateY: 350 },
    { translateY: 400 },
    { translateY: 450 },
    { translateY: 500 },
  ],
  duration: 200,
  delay: function () {
    return anime.random(300, 900);
  },
  direction: "easeIn",
  loop: true,
});
