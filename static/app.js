gsap.to(".IntroSlideRight", {
  x: "101%",
  duration: 1.5,
  delay: 6,
  ease: Power4.easeInOut,
});
gsap.to(".IntroSlideLeft", {
  x: "-101%",
  duration: 1.5,
  delay: 6,
  ease: Power4.easeInOut,
});
gsap.fromTo(
  ".Intro-Text",
  { opacity: 1, duration: 1, stagger: 1 },
  { opacity: 0, duration: 1, stagger: 1, delay: 3 }
);
gsap.to("#Intro-Slide-Right-Home", 2, { display: "none", delay: 1 });
gsap.to("#Intro-Slide-Left-Home", 2, { display: "none", delay: 1 });

// Home Page

gsap.from("#Intro-Slide-Right-Home", {
  x: "101%",
  duration: 1.5,

  ease: Power2.easeInOut,
});
gsap.from("#Intro-Slide-Left-Home", {
  x: "-101%",
  duration: 1.5,

  ease: Power2.easeInOut,
});
gsap.to("#Intro-Slide-Right-Home", {
  x: "101%",
  duration: 1.5,
  delay: 1.6,
  ease: Power4.easeInOut,
});
gsap.to("#Intro-Slide-Left-Home", {
  x: "-101%",
  duration: 1.5,
  delay: 1.6,
  ease: Power4.easeInOut,
});
gsap.to(".wrapper", { opacity: 1, duration: 1.5, delay: 1.5 });

// Hamburger Animation

const hamburger = document.querySelector(".hamburger");
const navDropdown = document.querySelector(".nav-dropdown");
const links = document.querySelectorAll(".nav-dropdown .navlinks a");

hamburger.addEventListener("click", () => {
  navDropdown.classList.toggle("open");
});

gsap.to(".content", 2, { opacity: 1, display: "block", delay: 1.7 });
gsap.to(".projects-container", 2, { opacity: 1, display: "block", delay: 1.7 });
gsap.to(".contact-wrapper", 2, { opacity: 1, display: "block", delay: 1.7 });
