const quickLink = document.getElementById("toggleLink");
tfy = document.getElementById("toastify");
close = document.getElementById("closetfy");

let toastTimeout; // Variable to store the timeout ID

quickLink.addEventListener("click", () => {
  tfy.classList.add("toastify-active");

  // Clear any existing timeout to prevent resetting the timeout on multiple clicks
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  // Automatically hide the toast after 10 seconds
  toastTimeout = setTimeout(() => {
    tfy.classList.remove("toastify-active");
    toastTimeout = null; // Reset the timeout variable
  }, 3000); // 10 seconds
});

close.addEventListener("click", () => {
  tfy.classList.remove("toastify-active");

  // Clear the timeout if the close button is clicked before the timeout expires
  if (toastTimeout) {
    clearTimeout(toastTimeout);
    toastTimeout = null;
  }
});
