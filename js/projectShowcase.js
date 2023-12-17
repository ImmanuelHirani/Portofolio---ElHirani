const OpenDescription = document.getElementById("OpenDescription");
const Description = document.querySelector(".Description");

OpenDescription.addEventListener("click", () => {
  Description.classList.toggle("Desc-Active-Open");

  if (Description.classList.contains("Desc-Active-Open")) {
    OpenDescription.textContent = "Tutup";
  } else {
    OpenDescription.textContent = "Baca Selengkapnya..";
  }
});
