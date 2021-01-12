anime({
  targets: ".demo .el",
  translateY: 500,
  keyframes: [],
  duration: function () {
    return anime.random(500, 2000);
  },
  delay: function () {
    return anime.random(0, 600);
  },
  direction: "easeIn",
  loop: false,
});
