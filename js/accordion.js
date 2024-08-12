const accordionHeads = document.querySelectorAll(".accordion-head");

accordionHeads.forEach((accordionHead) => {
  accordionHead.addEventListener("click", () => {
    // Cek jika item yang sama diklik lagi
    const isActive = accordionHead.classList.contains("accordion-active");

    // Tutup semua accordion
    accordionHeads.forEach((head) => {
      head.classList.remove("accordion-active");
      head.nextElementSibling.style.maxHeight = 0;
    });

    // Jika item yang diklik sebelumnya tidak aktif, maka aktifkan item tersebut
    if (!isActive) {
      accordionHead.classList.add("accordion-active");
      const accordionBody = accordionHead.nextElementSibling;
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    }
  });
});
