const floatingBtn = document.getElementById("button-floating");
const backtoTop = document.getElementById("backtoTop");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

floatingBtn.addEventListener("click", () => {
  floatingBtn.classList.toggle("btn-active");
  if (floatingBtn.classList.contains("btn-active")) {
    backtoTop.classList.add("scale-0");
    sun.classList.add("sun-active");
    moon.classList.add("moon-active");
  } else {
    backtoTop.classList.remove("scale-0");
    sun.classList.remove("sun-active");
    moon.classList.remove("moon-active");
  }
});
