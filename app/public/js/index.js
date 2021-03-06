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

anime({
  targets: ".puddle",
  keyframes: [
    { scaleX: 1 },
    { scaleX: 1.01 },
    { scaleX: 1.02 },
    { scaleX: 1.03 },
    { scaleX: 1.04 },
    { scaleX: 1.05 },
    { scaleX: 1.06 },
    { scaleX: 1.07 },
    { scaleX: 1.08 },
    { scaleX: 1.09 },
    { scaleX: 1.1 },
    { scaleX: 1.11 },
    { scaleX: 1.12 },
    { scaleX: 1.13 },
    { scaleX: 1.14 },
    { scaleX: 1.15 },
    { scaleX: 1.16 },
    { scaleX: 1.17 },
    { scaleX: 1.18 },
    { scaleX: 1.19 },
    { scaleX: 1.2 },
    { scaleX: 1.21 },
    { scaleX: 1.22 },
    { scaleX: 1.23 },
    { scaleX: 1.24 },
    { scaleX: 1.25 },
    { scaleX: 1.26 },
    { scaleX: 1.27 },
    { scaleX: 1.28 },
    { scaleX: 1.29 },
    { scaleX: 1.3 },
    { scaleX: 1.31 },
    { scaleX: 1.32 },
    { scaleX: 1.33 },
    { scaleX: 1.34 },
    { scaleX: 1.35 },
    { scaleX: 1.36 },
    { scaleX: 1.37 },
    { scaleX: 1.38 },
    { scaleX: 1.39 },
    { scaleX: 1.4 },
    { scaleX: 1.41 },
    { scaleX: 1.42 },
    { scaleX: 1.43 },
    { scaleX: 1.44 },
    { scaleX: 1.45 },
    { scaleX: 1.46 },
    { scaleX: 1.47 },
    { scaleX: 1.48 },
    { scaleX: 1.49 },
    { scaleX: 1.5 },
    { scaleX: 1.51 },
    { scaleX: 1.52 },
  ],
  duration: 100000,
});

document.querySelector(".cloud").addEventListener("click", () => {
  const tl = anime.timeline({
    duration: 200,
  });

  tl.add({
    targets: ".cloud",
    background: "#444",
  })
    .add({
      targets: ".thunder",
      rotate: "-20deg",
      background: "#ffff66",
      scaleY: 3,
      duration: 50,
    })
    .add({
      targets: ".thunder",
      translateY: "50px",
    })
    .add({
      targets: ".thunder",
      rotate: "20deg",
      duration: 50,
    })
    .add({
      targets: ".thunder",
      translateY: "80px",
    })
    .add({
      targets: ".thunder",
      rotate: "-10deg",
      duration: 50,
    })
    .add({
      targets: ".thunder",
      translateY: "140px",
    })
    .add({
      targets: ".thunder",
      rotate: "10deg",
      duration: 50,
    })
    .add({
      targets: ".thunder",
      translateY: "200px",
    })
    .add({
      targets: ".cloud",
      background: "#EEFFFF",
    });
});
