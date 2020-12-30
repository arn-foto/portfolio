const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easInout })
  .fromTo(hero, 1.2, { width: "20%" }, { width: "100%", ease: Power2.easInout })
  .fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "0%", ease: Power2.easInout },
    "-=1"
  )
  .fromTo(
    logo,
    0.5,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, ease: Power2.easInout },
    "-=1"
  )

  .fromTo(
    ".links",
    0.5,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, ease: Power2.easInout },
    "-=1"
  );

gsap.registerEffect({
  name: "fade",
  defaults: { duration: 2 }, //defaults get applied to the "config" object passed to the effect below
  effect: (targets, config) => {
    return gsap.to(targets, { duration: config.duration, opacity: 0 });
  },
});

//now we can use it like this:
//gsap.effects.fade(".box");

document.querySelectorAll(".box").forEach(function (box) {
  box.addEventListener("mouseenter", function () {
    gsap.effects.fade(this);
  });
});
