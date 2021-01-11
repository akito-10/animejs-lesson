const { easing, tween, styler } = window.popmotion;

const divStyler = styler(document.querySelector(".target"));

tween({
  from: 0,
  to: { x: 300, rotate: 180 },
  duration: 1000,
  ease: easing.backOut,
  flip: Infinity,
}).start(divStyler.set);
