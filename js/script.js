// Initialize timelines
var tl = gsap.timeline();
var tlT = gsap.timeline();

// Function to adjust animations based on screen size
function adjustAnimations() {
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const isLaptop = window.matchMedia("(max-width: 1024px) and (min-width: 768px)").matches;

  // Update Logo and Menu Link Animation
  tl.clear(); // Clear previous animations
  tl.from(["#logo", "#menulink a"], {
    y: isDesktop ? -20 : isLaptop ? -15 : -10,
    opacity: 0,
    ease: "power4.out",
    duration: isDesktop ? 1.5 : isLaptop ? 1.2 : 1,
    delay: isDesktop ? 0.5 : isLaptop ? 0.4 : 0.3,
    stagger: isDesktop ? 0.4 : isLaptop ? 0.3 : 0.2,
  });

  // Update Title Animation
  tlT.clear(); // Clear previous animations
  tlT.from(".wrap-title h1:nth-child(1)", {
    x: isDesktop ? -200 : isLaptop ? -150 : -100,
    opacity: 0,
    skewX: isDesktop ? 10 : isLaptop ? 7 : 5,
    ease: "power4.out",
    duration: isDesktop ? 1.5 : isLaptop ? 1.2 : 1,
  });

  tlT.from(
    ".wrap-title h1:nth-child(2)",
    {
      x: isDesktop ? 200 : isLaptop ? 150 : 100,
      opacity: 0,
      skewX: isDesktop ? -10 : isLaptop ? -7 : -5,
      ease: "power4.out",
      duration: isDesktop ? 1.5 : isLaptop ? 1.2 : 1,
    },
    "-=1"
  );

  tlT.from(
    ".wrap-title h3",
    {
      scale: isDesktop ? 0.8 : isLaptop ? 0.85 : 0.9,
      y: isDesktop ? -50 : isLaptop ? -40 : -30,
      opacity: 0,
      ease: "back.out(1.5)",
      duration: isDesktop ? 1.5 : isLaptop ? 1.2 : 1,
    },
    "-=0.75"
  );

  tlT.from(
    ".wrap-title h4:nth-child(1)",
    {
      x: isDesktop ? 100 : isLaptop ? 75 : 50,
      opacity: 0,
      ease: "power4.out",
      duration: isDesktop ? 1.5 : isLaptop ? 1.2 : 1,
    },
    "-=0.75"
  );

  tlT.from(
    ".wrap-title h4:nth-child(2)",
    {
      y: isDesktop ? 100 : isLaptop ? 75 : 50,
      opacity: 0,
      ease: "power4.out",
      duration: isDesktop ? 1.5 : isLaptop ? 1.2 : 1,
    },
    "-=0.75"
  );

  // Update SVG Animation
  tlT.from(
    ".hero svg",
    {
      scale: isDesktop ? 1.2 : isLaptop ? 1.1 : 1,
      y: isDesktop ? -100 : isLaptop ? -75 : -50,
      opacity: 0,
      ease: "power4.out",
      duration: isDesktop ? 1.5 : isLaptop ? 1.2 : 1,
    },
    "-=0.75"
  );

  // Update Project Div Scroll Animation
  gsap.from("#allProject #projectDiv", {
    x: isDesktop ? 1500 : isLaptop ? 1200 : 800,
    y: isDesktop ? 150 : isLaptop ? 100 : 75,
    rotate: isDesktop ? 15 : isLaptop ? 12 : 10,
    scale: isDesktop ? 0.8 : isLaptop ? 0.85 : 0.9,
    ease: "power3.out",
    duration: isDesktop ? 2.5 : isLaptop ? 2 : 1.5,
    scrollTrigger: {
      trigger: "#allProject",
      start: "top 70%",
      end: "top top",

      scrub: 1,
    },
  });

  gsap.from(".project-wrapper h3", {
    y: isDesktop ? 200 : isLaptop ? 150 : 100,
    opacity: 0,
    ease: "power3.out",
    duration: isDesktop ? 2.5 : isLaptop ? 2 : 1.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#allProject",
      start: "top 70%",
      end: "top top",
      scrub: 1,
    },
  });

  gsap.from("#allProject .project-wrapper .wrap-project1", {
    scale: isDesktop ? 0 : isLaptop ? 0.3 : 0.5,
    x: isDesktop ? -1500 : isLaptop ? -1000 : -750,
    opacity: 0,
    ease: "power3.out",
    duration: isDesktop ? 2.5 : isLaptop ? 2 : 1.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#allProject",
      start: "top 70%",
      end: "top top",
      scrub: 1,
    },
  });

  gsap.from(".wrap-project2", {
    scale: isDesktop ? 0 : isLaptop ? 0.3 : 0.5,
    y: isDesktop ? 1500 : isLaptop ? 1000 : 750,
    opacity: 0,
    ease: "power3.out",
    duration: isDesktop ? 2.5 : isLaptop ? 2 : 1.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".wrap-project1",
      start: "600px bottom",
      end: "650px top",
      scrub: 1,
    },
  });
}

// Call the function on load and resize
adjustAnimations();
window.addEventListener("resize", adjustAnimations);

// GSAP animation

var tlS = gsap.timeline();

tlS.from("#Skills .container", {
  y: 200,
  duration: 1,
  delay: 0.5,
  ease: "power2.in",
  scrollTrigger: {
    trigger: "#Skills",
    start: "top bottom",
    end: "30% center",
    scrub: true,
  },
});

tlS.from("#Skills .container button", {
  scale: 0.5,
  duration: 1,
  opacity: 0,
  delay: 0.5,
  ease: "none",
  scrollTrigger: {
    trigger: "#Skills",
    start: "top bottom",
    end: "30% center",
    scrub: true,
  },
});

tlS.from(".contact img", {
  scale: 0,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  y: 200,
  scrollTrigger: {
    trigger: ".contact",
    start: "top bottom",
    end: "30% center",
    scrub: true,
  },
});

gsap.from(".quick-link div", {
  y: 100,
  opacity: 0,
  duration: 2,
  delay: 0.5,
  ease: "power3.in",
  scale: 0.5,
  scrollTrigger: {
    trigger: "footer",
    start: "-100% bottom",
    end: "center 100%",
    scrub: true,
  },
});
