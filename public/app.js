const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easInout })
  .fromTo(hero, 1.2, { width: "100%" }, { width: "70%", ease: Power2.easInout })
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
    headline,
    1.2,
    { y: "400%" },
    { y: "-580%", ease: Power2.easInout },
    "-=1"
  )
  .fromTo(
    ".links",
    0.5,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, ease: Power2.easInout },
    "-=1"
  );
