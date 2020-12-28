const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(
  hero,
  1,
  { height: "0%" },
  { height: "100%", ease: Power2.easInout }
).fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easInout });
