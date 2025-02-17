console.clear();

//point-down animation
gsap.to("#point-down", {
  duration: 1,
  y: -20,
  repeat: -1,
  yoyo: true
});

// //card animation
// gsap.utils.toArray(".cardCont").forEach(function (card) {
//   gsap.set(card, {
//     transformStyle: "preserve-3d",
//     transformPerspective: 1000,
//   });
//   const q = gsap.utils.selector(card);
//   const front = q(".cardFront");
//   const back = q(".cardBack");

//   gsap.set(back, { rotationY: 180 });

//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".cardCont",
//       start: "30% center",
//       end: "70% center",
//       scrub: true,
//       markers: false,
//       pin: ".cardCont",
//     },
//   });

//   tl.add("reveal")
//     .to(front, { duration: 1, rotationY: -180 }, "reveal")
//     .to("#about-section", { backgroundColor: "black" }, "reveal")
//     .to("#about-reveal", { x: -500, stagger: 1 }, "reveal")
//     .to(back, { duration: 1, rotationY: 0 }, 0)
//     .to(card, { z: 50 }, 0)
//     .to(card, { z: 0 }, 0.5);
// });

// //horizontal scroll
// const aboutScroll = document.querySelector(".about-scroll");
// let aboutScrollWidth = aboutScroll.offsetWidth;
// let amountToScroll = aboutScrollWidth - window.innerWidth;

// const tween = gsap.to(aboutScroll, {
//   x: -amountToScroll,
//   duration: 1,
//   ease: "none",
// });

// ScrollTrigger.create({
//   trigger: ".about-scroll",
//   start: "top 0%",
//   end: "+=" + amountToScroll,
//   pin: true,
//   animation: tween,
//   scrub: 1,
//   markers: false,
// });

// //extracurriculars animation
// let tl2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#extracurriculars-section",
//     start: "0% center",
//     end: "90% center",
//     scrub: true,
//     markers: false,
//     pin: false,
//   },
// });

// tl2
//   .add("come-out")
//   .to(
//     ".extracurriculars-pop-up .extracurriculars-item",
//     { x: -1020, stagger: 1 },
//     "come-out"
//   );

// //projects animation
// let tl3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#projects-section",
//     start: "0% center",
//     end: "15% center",
//     scrub: true,
//     markers: false,
//     pin: false,
//   },
// });

// tl3.add("pop-out").to(".projects-container", { y: -250 }, "pop-out");

//text animation
var tltext = gsap.timeline({repeat: -1});

tltext.to("#text-animation", {
  duration: 3,
  text: "An aspiring fullstack developer",
  ease: "none",
}).to("#text-animation", {
  duration: 2,
  text: "-----------------------------",
  ease: "none",
}).to("#text-animation", {
  duration: 3,
  text: "A Computer Science Fresh Grad",
  ease: "none",
}).to("#text-animation", {
  duration: 2,
  text: "-------------------------------------------",
  ease: "none",
}).to("#text-animation", {
  duration: 3,
  text: "An addict of both coffee and creating stuff",
  ease: "none",
}).to("#text-animation", {
  duration: 2,
  text: "------------------------------------------------",
  ease: "none",
}).to("#text-animation", {
  duration: 3,
  text: "A lifelong student who wants to learn everything",
  ease: "none",
}).to("#text-animation", {
  duration: 2,
  text: "------------------",
  ease: "none",
}).to("#text-animation", {
  duration: 2,
  text: "Secretly a potato?",
  ease: "none",
}).to("#text-animation", {
  duration: 2,
  text: "------------------",
  ease: "none",
});

//lenis smooth scroll
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
