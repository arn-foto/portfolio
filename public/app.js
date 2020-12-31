const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const project = document.querySelector("#project");
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

//  Opens "Contact box"
btn.onclick = function () {
  modal.style.display = "block";
};

// Closes "Contact" box
span.onclick = function () {
  modal.style.display = "none";
};

// Closes "Contact" box
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Animation for links & icons
const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easInout })
  .fromTo(hero, 1.2, { width: "20%" }, { width: "100%", ease: Power2.easInout })
  .fromTo(slider, 1, { x: "-100%" }, { x: "0%", ease: Power2.easInout }, "-=1")
  .fromTo(
    logo,
    0.5,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, ease: Power2.easInout },
    "-=1"
  )
  .fromTo(
    "footer",
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
  )
  .fromTo(
    project,
    0.5,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, ease: Power2.easInout },
    "-=1"
  );
